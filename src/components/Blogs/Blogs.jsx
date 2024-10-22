import { useEffect, useState } from "react";

const [blogs, setBlogs] = useState([])

const Blogs = () => {
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return <div></div>;
};

export default Blogs;
