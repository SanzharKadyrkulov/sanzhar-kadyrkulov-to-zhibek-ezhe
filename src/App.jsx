import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";
import DetailsPage from "./components/DetailsPage";
import axios from "axios";
import MainLayout from "./components/MainLayout";
import HomePage from "./components/HomePage";

const BASE_URL = "https://65a921a8219bfa37186886d7.mockapi.io/api/v1/articles";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  async function getArticles() {
    const { data } = await axios.get(BASE_URL);
    setArticles(data);
    return data;
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
                getArticles={getArticles}
                selectedArticle={selectedArticle}
                articles={articles}
                setSelectedArticle={setSelectedArticle}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <AdminPanel
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
