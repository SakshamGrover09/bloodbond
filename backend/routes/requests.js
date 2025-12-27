const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Seeker = require("../models/Seeker");
const Donor = require("../models/Donor");
const { body, validationResult } = require("express-validator");
const DonorPendingRequest = require("../models/DonorPendingRequest");
const SeekerPendingRequest = require("../models/SeekerPendingRequest");
const BloodStock = require("../models/BloodStock");

router.get("/donorrequest", async (req, res) => {
  try {
    const requests = await DonorPendingRequest.find();
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/seekerrequest", async (req, res) => {
  try {
    const requests = await SeekerPendingRequest.find();
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post(
  "/requestblood",
  fetchuser,
  [
    body("healthissue", "Enter valid input").exists()
    
  ],
  async (req, res) => {
    try {
      const { healthissue} = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const data = await Seeker.findById(req.user.id);
      const bloodStock = await BloodStock.findOne({bloodgroup: data.bloodgroup});
      if(!bloodStock)
      {
        return res.status(200).json({error: "NOT_AVAILABLE"});
      }else if (bloodStock.quantity ===0){
        return res.status(200).json({error: "NOT_AVAILABLE"});
      }
      const updatequantity = await BloodStock.updateOne(
        { bloodgroup: data.bloodgroup },
        { $inc: { quantity: -1 } }
      );

      const seekerRequest = new SeekerPendingRequest({
        healthissue,
        name:data.name,
        email:data.email,
        user: req.user.id,
        bloodgroup:data.bloodgroup,
      });
      const savedreq = await seekerRequest.save();
      res.json(savedreq);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
);


router.delete("/rejectdonaterequest/:id", async (req, res) => {
  try {
    let request = await DonorPendingRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).send("Request not Found");
    }
    request = await DonorPendingRequest.findByIdAndDelete(req.params.id);
    res.json({ Success: "Deleted Succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/approvedonaterequest/:id", async (req, res) => {
  try {
    let request = await DonorPendingRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).send("Request not Found");
    }
    const availRequest = await BloodStock.findOne({bloodgroup: request.bloodgroup});
    if(!availRequest)
    { 
      const req = new BloodStock({
        bloodgroup:request.bloodgroup,
        quantity: 1,
      });
      const saveReq = await req.save();
    }else
    {
    const updatequantity = await BloodStock.updateOne(
      { bloodgroup: request.bloodgroup },
      { $inc: { quantity: 1 } }
    );
    }
    request = await DonorPendingRequest.findByIdAndDelete(req.params.id);
    res.json({ Success: "Deleted Succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/approveseekerrequest/:id", async (req, res) => {
  try {
    let request = await SeekerPendingRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).send("Request not Found");
    }
    request = await SeekerPendingRequest.findByIdAndDelete(req.params.id);
    res.json({ Success: "Deleted Succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/rejectseekerrequest/:id", async (req, res) => {
  try {
    let request = await SeekerPendingRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).send("Request not Found");
    }
    const updatequantity = await BloodStock.updateOne(
      { bloodgroup: request.bloodgroup },
      { $inc: { quantity: 1 } }
    );
    request = await SeekerPendingRequest.findByIdAndDelete(req.params.id);
    res.json({ Success: "Deleted Succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post(
  "/donateblood",
  fetchuser,
  async (req, res) => {
    try {
      const data = await Donor.findById(req.user.id);
    
      const donorRequest = new DonorPendingRequest({
        name:data.name,
        email:data.email,
        user: req.user.id,
        bloodgroup:data.bloodgroup,
      });
      const savedReq = await donorRequest.save();
      res.json(savedReq);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;