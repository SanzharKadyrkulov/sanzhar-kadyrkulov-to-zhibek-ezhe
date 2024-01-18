import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";
import DetailsPage from "./components/DetailsPage";
import axios from "axios";
import MainLayout from "./components/MainLayout";

const BASE_URL = "https://65a921a8219bfa37186886d7.mockapi.io/api/v1/articles";

function App() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const { data } = await axios.get(BASE_URL);
    setArticles(data);
  }

  async function getOneArticle(id) {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
  }

  async function addArticle(newArticle) {
    await axios.post(BASE_URL, newArticle);
    getArticles();
  }

  async function deleteArticle(id) {
    await axios.delete(`${BASE_URL}/${id}`);
    getArticles();
  }

  async function editArticle(newArticle) {
    await axios.put(`${BASE_URL}/${newArticle.id}`, newArticle);
    getArticles();
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <HomePage
                articles={articles}
                deleteArticle={deleteArticle}
                getArticles={getArticles}
              />
            }
          />
          <Route
            path="/create"
            element={<CreateArticle addArticle={addArticle} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditArticle
                getOneArticle={getOneArticle}
                articles={articles}
                editArticle={editArticle}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <DetailsPage getOneArticle={getOneArticle} articles={articles} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
