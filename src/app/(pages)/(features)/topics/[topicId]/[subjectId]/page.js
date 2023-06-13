import getShowData from "@firebase/firestore/getShowData";

export async function generateMetadata({ params, searchParams }) {
  // ? read route params
  const { subjectId } = params;

  // ? fetch data
  const { data } = await getShowData("subjects", subjectId);

  // ? returns metadata
  return {
    title: data.meta_title,
    description: data.meta_description,
    keywords: data.meta_keywords,
    data
  };
}

const Topic = async ({ params }) => {
  const { subjectId } = params;
  const { data } = await generateMetadata({ params });

  console.log(data);

  return (
    <div>
      <h2>{data.title}</h2>
      <h5>{subjectId}</h5>
      <p>{data.description}</p>
    </div>
  );
}

export default Topic;
