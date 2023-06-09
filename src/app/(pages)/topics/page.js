// "use client";

import getIndexData from "../../../../firebase/firestore/getIndexData";
// import getIndexData from "@/firebase/firestore/getIndexData";

const Topics = async () => {

  const topics = await getIndexData("topics").then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err)
  });

  console.log(topics);

  return (
    <div>
      <h2>All topics</h2>

      {topics?.map((topic) => {
        return (
          <div key={topic.id}>
            <h3>{topic.name}</h3>
            <p>{topic.type}</p>
            <p>{topic.difficulty}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Topics;
