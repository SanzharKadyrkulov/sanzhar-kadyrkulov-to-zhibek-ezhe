import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

export default function DetailsPage({ articles }) {
  const [article, setArticle] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setArticle(articles.find((item) => item.id === id));
  }, [id]);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {article.title}
      </h1>

      <div
        style={{
          display: "flex",
        }}
      >
        <p
          className="desc"
          style={{
            width: "50%",
            fontStyle: "italic",
            padding: "10px",
          }}
        >
          {article.description}
        </p>
        <img
          style={{
            width: "50%",
            borderRadius: "10px",
          }}
          src={article.image}
          alt=""
        />
      </div>
    </div>
  );
}
