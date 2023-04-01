import React, { useEffect, useState } from "react";
import "./Blog.css";
import Cart from "../Cart/Cart";
import Bookmark from "../Bookmark/Bookmark";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
const[totalTime,setTotalTime]=useState(0)
  function showTime(time) {
    setTotalTime(totalTime+time)
  }

  const [cartNames, setCartNames] = useState([]);
  const handleAddTo = (cart) => {  
    const getName=cartNames.find(cartName=>cartName===cart)
    if (getName) {
      toast.warn(' Already added!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return 
    }
    const newCartName=[...cartNames,cart]
    setCartNames(newCartName);
  };
  return (
    <div className="blog-container">
      <div>
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} handleAddTo={handleAddTo} showTime={showTime}></Cart>
        ))}
      </div>
      <div className="bookmark-blog">
        <Bookmark cartNames={cartNames} totalTime={totalTime} ></Bookmark>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Blog;
