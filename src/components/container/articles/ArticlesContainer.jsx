/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DetailArticles from "../../presentational/detail-articles/DetailArticles";

const ArticlesContainer = ({ id }) => {
  const [article, setArticle] = useState({});

  const getArticle = async () => {
    try {
      const apiUrl = "http://localhost:3001/api";

      let response = await fetch(`${apiUrl}/article/${id}`, {
        method: "GET",
      });

      response = await response.json();

      setArticle(response.item);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getArticle();
    }
  }, [id]);


  return (
    <main>
      <DetailArticles article={article}
      imageSrc={`http://localhost:3001/api/imagen/${article.imagen}`}
      />
    </main>
  );
};

export default ArticlesContainer;
