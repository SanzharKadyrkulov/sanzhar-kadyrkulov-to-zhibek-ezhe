import { useState } from "react";
import ArticleItem from "./components/ArticleItem";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";
import DetailsPage from "./components/DetailsPage";

function App() {
  const [articles, setArticles] = useState([
    {
      id: "1",
      title: "Article",
      image:
        "https://fatstacksblog.com/wp-content/uploads/2019/11/Person-writing-article-nov26.jpg",
      description:
        "В английском языке одинаково звучащие слова могут относиться к разным частям речи и иметь различные значения. Артикли – это особые частицы, которые используются с существительными и помогают отличать их от глаголов, прилагательных и других частей речи. Так как в русском языке нет аналога артикля, его можно воспринимать как единое целое вместе с существительным.",
    },
  ]);

  function addArticle(newArticle) {
    setArticles([...articles, newArticle]);
  }

  function deleteArticle(id) {
    setArticles(articles.filter((item) => item.id !== id));
  }

  function editArticle(newArticle) {
    setArticles(
      articles.map((item) => (item.id === newArticle.id ? newArticle : item))
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage articles={articles} deleteArticle={deleteArticle} />
          }
        />
        <Route
          path="/create"
          element={<CreateArticle addArticle={addArticle} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditArticle articles={articles} editArticle={editArticle} />
          }
        />
        <Route
          path="/details/:id"
          element={<DetailsPage articles={articles} />}
        />
      </Routes>
    </>
  );
}

export default App;
