import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);



 

  useEffect(() => {
    updateNews();
    
    //eslint-disable-next-line
  }, []);

  const updateNews = async () => {
   
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=bc182024c9e54b669ee7c7ee74617da0&page=${page}&pageSize=6`;
     
      const res = await fetch(url);
      const data = await res.json();
      
      setArticles(data.articles);
      setTotalResults(data.totalResults);
     
    } catch (e) {
      console.log("something is not working");
    }
    
  };

  const fetchMoreData = async () => {
    
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=bc182024c9e54b669ee7c7ee74617da0&page=${page+1}&pageSize=6`;
      setPage(page + 1);
     
      const res = await fetch(url);
      const data = await res.json();
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
      
    } catch (e) {
      console.log("something is not working");
    }
  };

  return (
    <div className="container ">
      <h2 className="text-center" style={{marginTop:'2px'}}>
         Latest Health News 
      </h2>
     
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
       
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={!element.author ? "Unknown" : element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "health",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;