import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);

  const [ispending, setIsPending] = useState(true); //to create a loading symbol when the data is getting loaded
  const [blogs, setBlogs] = useState([
    { title: "sf df  s", body: "sfsfdf", author: "sads", id: 1 },
    { title: "sffdg df  s", body: "sfdgsfdf", author: "safdgds", id: 2 },
    { title: "sf dfdgfghh  s", body: "sfsfdfdgg", author: "sfgfgads", id: 3 },
  ]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the information"); //this throws an error if the ok component of response is false
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err.message); //this receives or catches the error thrown by the throw function mentioned above
      })
      .then((blogs) => {
        setIsPending(false); //when the data is loaded the loading thing is removed
        setBlogs(blogs);
        console.log(blogs);
      });
    // use to check whether the use effect ran or not
  }, [url]);
  return { blogs, setBlogs, ispending, error };
};
export default useFetch;
