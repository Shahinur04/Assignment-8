import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h2 className="heder-title">Welcome to My Knowledge Cafe</h2>
        <div className="nav">
          <a href="Home">Home</a>
          <a href="Load-More">Load_More</a>
          <a href="About">About</a>
        </div>
        <div className="profile">
          <img
            
            src="https://as1.ftcdn.net/v2/jpg/02/15/63/42/1000_F_215634201_6MHT39zdmOmAmbbWLth2z7KMvpiZnMak.jpg"
            alt=""
          />
        </div>
      </div>
      <hr className="horizontal" />
    </div>
  );
};

export default Header;















