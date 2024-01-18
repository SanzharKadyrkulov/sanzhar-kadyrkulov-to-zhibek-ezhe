import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditArticle({ editArticle, articles }) {
  const [article, setArticle] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setArticle(articles.find((item) => item.id === id));
  }, [id]);

  function handleChange(e) {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    if (!article.title || !article.description || !article.image) {
      alert("Заполните все поля");
      return;
    }

    editArticle({
      ...article,
    });

    navigate("/");
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "grey",
            marginRight: "15px",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Go Home
        </span>
        Edit Article "{article.title}"
      </h1>
      <form
        style={{
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "0 auto",
        }}
        onSubmit={onSubmit}
      >
        <input
          style={{
            padding: "10px 5px",
          }}
          placeholder="Заголовок"
          type="text"
          name="title"
          onChange={handleChange}
          value={article.title}
        />
        <input
          style={{
            padding: "10px 5px",
          }}
          placeholder="Содержание"
          type="text"
          name="description"
          onChange={handleChange}
          value={article.description}
        />
        <input
          style={{
            padding: "10px 5px",
          }}
          placeholder="Картина"
          type="text"
          name="image"
          onChange={handleChange}
          value={article.image}
        />
        <button
          style={{
            border: "none",
            background: "#89cff0",
            borderRadius: "10px",
            padding: "10px 5px",
            cursor: "pointer",
          }}
        >
          Сохранить
        </button>
      </form>
    </div>
  );
}
