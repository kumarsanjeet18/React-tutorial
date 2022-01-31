const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>NEWAPP</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            display: "inline",
            color: "aqua",
            backgroundColor: "white",
          }}
        >
          {" "}
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
