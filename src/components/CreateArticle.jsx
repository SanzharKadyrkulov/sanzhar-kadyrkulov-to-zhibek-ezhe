import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  title: "",
  description: "",
  image: "",
};
export default function CreateArticle({ addArticle }) {
  const [article, setArticle] = useState(defaultValues);

  const navigate = useNavigate();

  function handleChange(e) {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  }

  console.log(article);
  function onSubmit(e) {
    e.preventDefault();

    if (!article.title || !article.description || !article.image) {
      alert("Заполните все поля");
      return;
    }

    addArticle({
      ...article,
      id: Date.now(),
    });

    setArticle(defaultValues);
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
        Create new Article
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
          }}
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
