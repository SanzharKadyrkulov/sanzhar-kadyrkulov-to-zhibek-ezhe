import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleItem({ item, deleteArticle }) {
  const navigate = useNavigate();
  return (
    <div>
      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "20px",
          }}
          onClick={() => navigate(`/details/${item.id}`)}
        >
          {item.title}
        </span>
        <div>
          <button
            style={{
              marginLeft: "5px",
              cursor: "pointer",
              padding: "3px 5px",
              background: "#ff000d",
              borderRadius: "5px",
              border: "none",
              color: "white",
            }}
            onClick={() => deleteArticle(item.id)}
          >
            del
          </button>
          <button
            style={{
              marginLeft: "5px",
              cursor: "pointer",
              padding: "3px 5px",
              background: "#ff9966",
              borderRadius: "5px",
              border: "none",
              color: "white",
            }}
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            edit
          </button>
        </div>
      </p>
    </div>
  );
}
