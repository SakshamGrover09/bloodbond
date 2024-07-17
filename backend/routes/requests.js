const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Request = require("../models/Request");
const Seeker = require("../models/Seeker");
const Donor = require("../models/Donor");
const { body, validationResult } = require("express-validator");

router.get("/fetchmyrequests", fetchuser, async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id });
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/fetchallrequests", fetchuser, async (req, res) => {
  try {

    const data = await Donor.findById(req.user.id)
    const requests = await Request.find({ bloodgroup: data.bloodgroup});
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post(
  "/addrequest",
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
      

      const request = new Request({
        healthissue,
        name:data.name,
        email:data.email,
        user: req.user.id,
        mobile:data.mobile,
        bloodgroup:data.bloodgroup,
        gender:data.gender,
        age:data.age
      });
      const savedreq = await request.save();
      res.json(savedreq);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

// router.put("/updatenote/:id", fetchuser, async (req, res) => {
//   try {
//     const { title, description, tag } = req.body;

//     const newNote = {};
//     if (title) {
//       newNote.title = title;
//     }
//     if (description) {
//       newNote.description = description;
//     }
//     if (tag) {
//       newNote.tag = tag;
//     }
//     let note = await Note.findById(req.params.id);
//     if (!note) {
//       return res.status(404).send("Note not Found");
//     }
//     if (note.user.toString() != req.user.id) {
//       return res.status(401).send("Not Allowed");
//     }
//     note = await Note.findByIdAndUpdate(
//       req.params.id,
//       { $set: newNote },
//       { new: true }
//     );
//     res.json(note);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

router.delete("/deleterequest/:id", fetchuser, async (req, res) => {
  try {
    let request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).send("Note not Found");
    }
    if (request.user.toString() != req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    request = await Request.findByIdAndDelete(req.params.id);
    res.json({ Success: "Deleted Succesfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;