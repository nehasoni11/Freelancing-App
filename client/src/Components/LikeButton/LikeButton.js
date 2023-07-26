import React, { useState } from "react";
import "./styles.css";
import ShareIcon from "../../Resources/ShareIcon.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LikeButton = () => {
  const notify = () => toast("😍 Thanks for liking my blog 😍");
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    console.log("HELLO")
  }

  const handleClick = () => {
    !isClicked && notify()
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
    <div className="text-center">
      <div
        className={`like-button ${isClicked && "liked"}`}
        onClick={handleClick}
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="likes-counter">
      {`🧡 ${likes}`}
      
{/*       <button
          style={{ width: 80, height: 20 }}
          className="shareIcon"
          src={ShareIcon}
          onClick={modalHandler}
          alt=""
        /> */}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{backgroundColor: 'orange', color: 'white', 'borderRadius' : 10}}>Share</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input style={{width: 90}} placeholder="Comment" type="text"/>  
        
        </span><ToastContainer />
</div>
        </div>
    </>
  );
};

export default LikeButton;