import React from "react";
import { useNavigate } from "react-router-dom";
import Chip from "../Chip/Chip";
import "./styles.css";
import LikeButton from "../../LikeButton/LikeButton";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  const navigate = useNavigate();
  const bidHandler = () => {
    navigate(`/blog/${id}`);
  };
  return (
    <>
      <div className="blogItem-wrap text-center">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <img
          style={{ cursor: "pointer" }}
          onClick={bidHandler}
          className="blogItem-cover"
          src={cover}
          alt="cover"
        />
        <Chip onClick={bidHandler} label={category} />
        <h3 style={{ cursor: "pointer" }} onClick={bidHandler}>
          {title}
        </h3>
        <LikeButton /> <br />
        <button
          style={{
            backgroundColor: "#F86F15",
            color: "white",
            borderRadius: 20,
          }}
          className="blogItem-link"
          onClick={bidHandler}
          to={`/blog/${id}`}
        >
          Bid on the Project
        </button>
      </div>
    </>
  );
};

export default BlogItem;
