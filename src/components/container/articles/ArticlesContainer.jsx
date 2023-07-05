/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DetailArticles from "../../presentational/detail-articles/DetailArticles";

const ArticlesContainer = ({ id }) => {
  const [article, setArticle] = useState({});

  const getArticle = async () => {
    try {
      const apiUrl = import.meta.env.VITE_DEPLOY_URL;

      let response = await fetch(`${apiUrl}/api/article/${id}`, {
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
      imageSrc={article.imagen}
      />
    </main>
  );
};

export default ArticlesContainer;
