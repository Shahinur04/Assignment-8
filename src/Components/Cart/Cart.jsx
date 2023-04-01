import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
 
const Cart = (props) => {
 const {showTime}=props;
  const { album, name, authorImg, authorName, publishDate, time } = props.cart;

  return (
    <div className="dynamic-container">
      <img className="album" src={album} alt="" />
      <div className="bro-div">
        <div className="publish">
          <img className="authorImg" src={authorImg} alt="" />
          <div>
            <p>{authorName}</p>
            <p>{publishDate}</p>
          </div>
        </div>

        <p>
          {time} Min Read{" "}
          <FontAwesomeIcon
            onClick={() => props.handleAddTo(name)}
            icon={faBookmark}
          />
        </p>
      </div>
      <h2>{name}</h2>
      <p>#beginners #programming</p>
      <a onClick={()=>showTime(time)} className="mark-button">Mark As Read</a>
      <hr />
    </div>
  );
};

export default Cart;
