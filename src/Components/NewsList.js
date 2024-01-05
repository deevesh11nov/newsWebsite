import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
<>
    {currentArticles?.map((article) => (
    <div style={{ width:"400px",height:"495px", padding:"10px", overflow:"hidden"
  }} >
    <img
    
      src={
        article.image
          ? article.image
          : "https://www.examsegg.com/wp-content/uploads/2021/02/hindi-news-channels-list-e1613312066124-810x379.png"
      }
      style={{ height: "200px", width: "100%" }}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{article.title.slice(0, 40)}</h5>
      <div>
      <p className="card-text">
        {article.description ? article.description.slice(0,70):"WhatsApp has recently been working on various new features and one of them is the 'secret"}
      </p>
      </div>
      <div style={{marginBottom:"0px"}}>
      <a href={article.url} className="btn btn-primary">
        Read More..
      </a>
      </div>
    </div>
  </div>
  ))}
  </>
   

  );
};

export default NewsList;
