import React from "react";

const NewsItem =(props)=> {


    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3"> 
        <div className="card" style={{width: "24rem"}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left:'90%',zIndex:'1'}}>{source}</span>
          <img src={!imageUrl?"https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">
              {description}.....
            </p>
            <p className="card-text">
              <small className="text-muted">By {author} on {new Date(date).toGMTString()}</small> </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;