import React from "react";
import BlogItem from "./BlogItem/BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) => {
  return (
    <>
      <div className="tetxt-center">
        <div className="blogList-wrap">
          {blogs.map((blog) => (
            <BlogItem blog={blog} />
          ))}
        </div>
        <br />
        <br />
        <div className="text-center">
          <button style={{ backgroundColor: "#F51663", color: "white" }}>
            View More Projects
          </button>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default BlogList;