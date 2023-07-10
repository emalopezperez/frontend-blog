import { useContext, useEffect } from "react";
import "./profile.css";
import authContext from "../../../context/auth/authContext";
import Card from "../../presentational/card/Card";

const ProfileContainer = () => {
  const AuthContext = useContext(authContext);
  const { getUserLikes, likesUser } = AuthContext;

  useEffect(() => {
    getUserLikes();
  }, []);

  return (
    <div className="container-posts container-profile-user">
      <h2>Mi perfil</h2>

      <div className="sub-title-profile-user">
        <h3>Articulos guardados:</h3>
      </div>

      <div className="posts">
        {likesUser.map((post) => (
          <Card post={post} key={post._id} imageSrc={post.imagen} />
        ))}
      </div>
    </div>
  );
};

export default ProfileContainer;
