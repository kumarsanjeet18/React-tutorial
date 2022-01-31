import { useState } from "react"; // here the name is made reactive using hook from react library
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { blogs, setBlogs, isPending, Error } = useFetch(
    "http://localhost:8000/blogs"
  );
  // these elements used in the return part are fetched from the useFetch file

  function handleClick() {
    setName("Abhimanyu");
    setAge(22);
    console.log("Hello people");
  }
  const handleClickAgain = (name) => {
    console.log("hello" + name);
  };
  const handledelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id); //helps to delete the clicked blog by the user
    setBlogs(newBlogs);
  };
  const [name, setName] = useState("Atvik"); // the name changes to atvik
  const [age, setAge] = useState(21); // the name changes to atvik

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      <h2>Homepage</h2>
      <p>
        {name}'s age is {age}
      </p>
      {Error && <div>{Error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs!"
          handledelete={handledelete}
        />
      )}
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleClickAgain("Mario")}>Click me again</button>

      {blogs.map(
        (
          blog // use to print the blogs serially one after another from the Bloglist.js file
        ) => (
          //whereas the upper block is used to do from this file blogs only
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => handledelete(blog.id)}>delete blog</button>
            <button onClick={() => setName("Swapnil")}>Change the name</button>
            <p>{name}</p>
          </div>
          // line38: function to delete the blogs if the user presses the button to delete
          //line 39:function to change the name by using the button
        )
      )}
    </div>
  );
};

export default Home;
