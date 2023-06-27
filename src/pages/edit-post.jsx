import { useParams } from "react-router-dom";
import TopBar from "../components/presentational/topBar/TopBar";
import UpdatePost from "../components/presentational/write/UpdatePost";

const Editar = () => {
  const { id } = useParams();

  return (
    <div>
      <TopBar />
      <UpdatePost id={id} />
    </div>
  );
};

export default Editar;
