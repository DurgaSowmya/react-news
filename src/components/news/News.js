import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/everything?domains=gadgets360.com&apiKey=fcf50e500d674dd59581c7e8b863d4cd"
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mainDiv">
        {mynews.map((ele) => {
          console.log(ele);
          return (
            <>
              <div
                class="card"
                style={{
                  width: "350px",
                  height: "450px",
                  marginLeft: "4rem",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={
                    ele.urlToImage == null
                      ? "https://i.insider.com/6492daec65b9ce0018a443c8?width=1200&format=jpeg"
                      : ele.urlToImage
                  }
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{ele.title}</h5>
                  <p class="card-time">{ele.publishedAt}</p>
                  <p class="card-text">{ele.author}</p>
                  <a href={ele.url} target="_blank" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
