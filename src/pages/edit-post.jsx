import { useParams } from "react-router-dom";
import UpdatePost from "../components/presentational/write/UpdatePost";

const Editar = () => {
  const { id } = useParams();

  return (
    <div>
      <UpdatePost id={id} />
    </div>
  );
};

export default Editar;
