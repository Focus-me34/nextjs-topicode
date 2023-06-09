"use client";

import { useRouter } from "next/navigation";

const Topic = ({ topic }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/topics/${topic.id}`)}
      key={topic.id}
      style={{ border: "5px solid #ccc", textAlign: "center", cursor: "pointer", marginBottom: "2rem" }}
    >
      <h2 style={{ textTransform: "uppercase" }}>{topic.name}</h2>
      <p>{topic.type}</p>
      <p>{topic.difficulty}</p>
      <br />
    </div>
  );
}

export default Topic;
