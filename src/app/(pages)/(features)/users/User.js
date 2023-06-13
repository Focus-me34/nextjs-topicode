"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const User = ({ user }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/users/${user.id}`)}
      key={user.id}
      style={
        isHovered
          ? { border: "1px solid red", textAlign: "center", cursor: "pointer", backgroundColor: "red" }
          : { border: "1px solid #ccc", textAlign: "center" }
      }
    >
      <Image
        src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
        width={180}
        height={180}
        alt={user.name}
      />
      <h3>{user.name}</h3>
    </div>
  );
};

export default User;
