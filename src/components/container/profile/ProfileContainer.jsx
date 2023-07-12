import { useContext, useEffect } from "react";
import "./profile.css";
import authContext from "../../../context/auth/authContext";
import CardProfile from "../../presentational/cards-profile/CardsProfile";

const ProfileContainer = () => {
  const AuthContext = useContext(authContext);
  const { getUserLikes, likesUser, usuario } = AuthContext;

  useEffect(() => {
    getUserLikes();
  }, []);

  if (likesUser.length) {
    return (
      <>
        <div className=" container-profile-user">
          <h2>Perfil de {usuario.nombre} Lopez </h2>

          <div className="sub-title-profile-user">
            <h3>Mis articulos guardados:</h3>
          </div>

          <div className="posts">
            {likesUser.map((post) => (
              <CardProfile post={post} key={post._id} imageSrc={post.imagen} />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container-posts container-profile-user">
      <h2>Perfil de {usuario.nombre} Lopez </h2>

      <div className="sub-title-profile-user">
        <h3>Usted no tiene articulos guardados</h3>
      </div>
    </div>
  );
};

export default ProfileContainer;
