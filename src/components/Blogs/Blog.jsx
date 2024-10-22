import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-11">
      <img className="rounded-md w-full" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between items-center">
        <div className="flex gap-6 my-6">
          <img className="w-14" src={author_img} />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-lg">{posted_date}</p>
          </div>
        </div>
        <p>{reading_time} min read</p>
      </div>
      <h1 className="text-4xl font-semibold mb-8">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="pr-4" key={idx}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
      <button className="underline text-blue-600 my-4">Mark As Read</button>
      <div className="divider"></div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
