import React from "react";
import "./Bookmark.css";

const Bookmark = (props) => {
  // console.log(props.cartNames)
  const {cartNames}=props;
  const{totalTime}=props;
  return (
    <div>
      <div>
        <h3>Spent time on read :{totalTime} min</h3>
      </div>
      <div className="book-container">
      <h3>Bookmark-Blog:{cartNames.length}</h3>
      <div className="bookmark">
        {
          cartNames.map(cartName=><h2 className="nameList">{cartName}</h2>)
        }
      </div>
      </div>
    </div>
  );
};

export default Bookmark;
