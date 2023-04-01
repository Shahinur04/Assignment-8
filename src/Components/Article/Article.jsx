import React from "react";
import { useState } from "react";
import './Article.css'

const Article = () => {
  return (
    <div className="article">
      <h1 className="heading">Question & Answer</h1>
      <h2>Props vs state</h2>
      <p>
        Props is use for data read for parent components,on the other-hand state
        is use for update or change thing.
      </p>
      <h2>How does useState work?</h2>
      <p>
        useState is use for react hook function.it has an array in 2 parameter
      </p>
      <h2>Purpose of useEffect other than fetching data?</h2>
      <p>
        It is mainly use for fetch or dom manipulation,also use it for timer
        retrieving data.
      </p>
      <h2>How Does React work?</h2>
      <p>
        React is a js library.it has components to make code and also use
        useEffect,useState it make easier to developer to write code.
      </p>
    </div>
  );
};

export default Article;
