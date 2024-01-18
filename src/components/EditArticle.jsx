import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditArticle({ editArticle, getOneArticle }) {
  const [article, setArticle] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneArticle(id).then(setArticle);
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
    console.log(article);
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
          marginBottom: "30px",
        }}
      >
        Изменить статью "{article.title}"
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
        <textarea
          style={{
            padding: "10px 5px",
          }}
          placeholder="Содержание"
          type="text"
          name="description"
          onChange={handleChange}
          value={article.description}
          rows="5"
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
