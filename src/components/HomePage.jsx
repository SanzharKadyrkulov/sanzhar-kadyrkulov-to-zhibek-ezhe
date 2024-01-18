import React, { useEffect } from "react";
import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router-dom";

export default function HomePage({ articles, deleteArticle, getArticles }) {
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Wikipedia
      </h1>

      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "15px",
          margin: "80px auto",
        }}
      >
        {articles.map((item) => (
          <ArticleItem
            key={item.id}
            item={item}
            deleteArticle={deleteArticle}
          />
        ))}
      </div>
    </div>
  );
}
