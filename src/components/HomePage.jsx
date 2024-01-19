import React, { useEffect } from "react";

export default function HomePage({
  articles,
  selectedArticle,
  getArticles,
  setSelectedArticle,
}) {
  useEffect(() => {
    getArticles().then(
      (data) => !selectedArticle && setSelectedArticle(data[0])
    );
  }, []);

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Wikipedia
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "15px",
          margin: "80px auto",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {articles.map((item) => (
            <p
              key={item.id}
              className={`article-item ${
                selectedArticle?.id === item.id && "active"
              }`}
              onClick={() => setSelectedArticle(item)}
            >
              {item.title}
            </p>
          ))}
        </div>
        <div
          style={{
            width: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              className="desc"
              style={{
                width: "100%",
                fontStyle: "italic",
                padding: "10px",
                fontSize: "18px",
              }}
            >
              <img
                style={{
                  width: "300px",
                  float: "right",
                  borderRadius: "10px",
                  margin: "0 auto",
                }}
                src={selectedArticle?.image}
                alt=""
              />
              {selectedArticle?.description.split("*").map((item, index) =>
                index % 2 ? (
                  <strong>{item}</strong>
                ) : (
                  item.split("").map((item) => {
                    return item === "\n" ? <br /> : item;
                  })
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
