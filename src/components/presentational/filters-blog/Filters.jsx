import "./filters.css";

const Filters = () => {

  

  return (
    <nav className="container-filters">
      <section className="container-category">
        <button className="filter-all">
          <span>All</span>
        </button>
        <button>
          <span>Javascript</span>
        </button>
        <button>
          <span>CSS</span>
        </button>
        <button>
          <span>React</span>
        </button>
        <button>
          <span>Next</span>
        </button>
        <button>
          <span>Node</span>
        </button>
      </section>
      <div className="search-container">
        <input type="search" placeholder="Buscar post..." />
      </div>
    </nav>
  );
};

export default Filters;
