import Image from "next/image";

import Link from "next/link";

const Navbar = () => {

  return (
    <nav>
      <div className="logo">
        <Image
          src="/LOGOAZED.png"
          alt="logo"
          width={300}
          height={100}
        />
      </div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/topics">All Topics</Link>
      <Link href="/users">Users</Link>
      <Link href="/counter">Redux Counter</Link>
    </nav>
  );
};

export default Navbar;
