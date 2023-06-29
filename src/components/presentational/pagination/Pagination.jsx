import "./pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="container-pagination">
      {pages.map((page, index) => {
        return (
          <button className="" key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
