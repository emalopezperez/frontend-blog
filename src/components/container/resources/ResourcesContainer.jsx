import "./resources-container.css";
import { useEffect, useState, useContext } from "react";
import postsContext from "../../../context/posts/postsContext";
import CardsResources from "../../presentational/resources/CardsResources";
import Loader from "../../presentational/loader/Loader";

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
        setTimeout(() => {
          setResources(data.resource);
        }, 1300);
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

  if (resources.length) {
    return (
      <main className="container-resources">
        <section className="resources-grid">
          {filteredResources.map((element, index) => (
            <CardsResources element={element} key={index} />
          ))}
        </section>
      </main>
    );
  }

  return (
    <div className="container-loader-resources">
      <Loader />
    </div>
  );
};

export default ResourcesContainer;
