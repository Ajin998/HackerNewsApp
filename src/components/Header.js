import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1>Hacker's News</h1>
      <div className="nav-link">
        <Link to="/top" className="active">
          {" "}
          Top Articles
        </Link>
        <Link to="/new" className="active">
          {" "}
          Latest Articles
        </Link>
        <Link to="/best" className="active">
          {" "}
          Trending Articles
        </Link>
      </div>
    </>
  );
};

export default Header;
