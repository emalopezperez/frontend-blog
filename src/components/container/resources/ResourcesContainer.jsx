import "./resources-container.css";
import { useEffect, useState, useContext } from "react";
import postsContext from "../../../context/posts/postsContext";
import CardsResources from "../../presentational/resources/CardsResources";

const ResourcesContainer = () => {
  const PostsContext = useContext(postsContext);
  const { categoryResources } = PostsContext;

  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_DEPLOY_URL;
    const endpoint = `${apiUrl}/api/resource/get-resource`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setResources(data.resource);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (categoryResources) {
      const filteredResources = resources.filter(
        (resource) => resource.categoria === categoryResources
      );
      setFilteredResources(filteredResources);
    } else {
      setFilteredResources(resources);
    }
  }, [categoryResources, resources]);

  return (
    <main className="container-resources">
      <section className="resources-grid">
        {filteredResources.map((element, index) => (
          <CardsResources element={element} key={index} />
        ))}
      </section>
    </main>
  );
};

export default ResourcesContainer;

