import "./recent-posts-home.css";

const RecentPosts = () => {
  return (
    <main className="recent-posts-container">
      <selection className="grid-container">
        <article className="cuadrado-izquierdo">
          <img
            className="recent-post-img"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <button className="button-recent-posts">
            <span>informacion</span>
          </button>
        </article>

        <section className="cuadrado-derecho">
          <article className="cuadrado-derecho-uno">
            <img
              className="recent-post-img"
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />

            <button className="button-recent-posts">
              <span>informacion</span>
            </button>
          </article>
          <article className="cuadrado-derecho-dos">
            <img
              className="recent-post-img"
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=996&q=80"
              alt=""
            />

            <button className="button-recent-posts">
              <span>informacion</span>
            </button>
          </article>
        </section>
      </selection>
    </main>
  );
};

export default RecentPosts;
