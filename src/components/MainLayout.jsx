import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "80px",
          padding: "0 20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button className="back center" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          Назад
        </button>
        <button
          style={{
            cursor: "pointer",
            padding: "10px 5px",
            borderRadius: "5px",
            border: "none",
            width: "max-content",
          }}
          className="center"
          onClick={() => navigate("/")}
        >
          Читать статьи
        </button>
        {pathname === "/admin" ? (
          <button
            style={{
              cursor: "pointer",
              padding: "10px 5px",
              // background: "#89cff0",
              borderRadius: "5px",
              border: "none",
              width: "max-content",
            }}
            className="center"
            onClick={() => navigate("/create")}
          >
            Добавить статью
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={30}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        ) : (
          <button
            style={{
              cursor: "pointer",
              padding: "10px 5px",
              borderRadius: "5px",
              border: "none",
              width: "max-content",
            }}
            className="center"
            onClick={() => navigate("/admin")}
          >
            Изменить контент
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
}
