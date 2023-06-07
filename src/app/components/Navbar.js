import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>My Blog</h2>
      </div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/topics">All Topics</Link>
      <Link href="/counter">counter</Link>
    </nav>
  );
};

export default Navbar;
