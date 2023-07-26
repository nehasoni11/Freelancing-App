import React, { useState } from "react";
import EmptyList from "../BlogList/EmptyList";
import BlogList from "../BlogList/BlogList";
import SearchBar from "../SearchBar/SearchBar";
import { blogList } from "../Configuration/Data";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
<div>
    {/*   <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />     <button>Go</button> */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
