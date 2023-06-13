import getIndexData from "@firebase/firestore/getIndexData";
import TopicShow from "./Topic";

const Topics = async () => {
  const { results, error, data } = await getIndexData("topics");

  return (
    <div>
      <h2>All topics</h2>

      {error && <p>{error}</p>}
      {data && data.map((topic) => {
        return (
          <TopicShow topic={topic}/>
        );
      })}
    </div>
  );
}

export default Topics;
