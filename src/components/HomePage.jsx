import React from "react";
import ArticleItem from "./ArticleItem";
import { useNavigate } from "react-router-dom";

export default function HomePage({ articles, deleteArticle }) {
  const navigate = useNavigate();
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Wikipedia
      </h1>
      <button
        style={{
          cursor: "pointer",
          padding: "10px 5px",
          background: "#89cff0",
          borderRadius: "5px",
          border: "none",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={() => navigate("/create")}
      >
        Create new
      </button>
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
