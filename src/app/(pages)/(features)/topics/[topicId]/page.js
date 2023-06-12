// * import getIndexData from "@firebase/firestore/getIndexData"; NEEDED IN THE CASE THERE IS NO SUBSCRIPTION
"use client";

import { useState, useEffect } from "react";
import { subjectCollectionRef } from "@firebase/firebase_config";
import { onSnapshot } from "firebase/firestore";

import NewSubjectForm from "./NewSubjectForm";
import deleteData from "@firebase/firestore/deleteData";

// * const Subjects = async ({ params }) => { NEEDED IN THE CASE THERE IS NO SUBSCRIPTION
const Subjects = ({ params }) => {
  const { topicId } = params;
  const [allSubjects, setAllSubjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // * Subscribe to real-time updates
      const unsubscribe = onSnapshot(subjectCollectionRef, (snapshot) => {
        const updatedDocuments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAllSubjects(updatedDocuments);
      });

      // * Clean up the subscription when the component unmounts
      return () => unsubscribe();
    } catch (error) {
      setError(error);
    }
  }, []);

  const subjectsFilteredByTopic = allSubjects.filter(subject => subject.topic === topicId);

  // ! THIS IS HOW WE WOULD DO WITHOUT SUBSCRIPTION.
  // ! IT WORKS BUT IT DOESN'T UPDATE IN REAL TIME WHEN WE ADD A NEW SUBJECT
  // ? IF THE FORM WAS ON A DIFFERENT PAGE AND WE'D BE REDIRECTING AFTER SUBMITTING THE FORM, THIS WOULD BE FINE
  // const { results, error, data } = await getIndexData("subjects");

  const deleteSubjectHandler = (subjectId) => deleteData("subjects", subjectId);

  console.log(error);

  return (
    <div>
      <h2>hey there {params.topicId}</h2><br />

      {error && <p>{error}</p>}
      {allSubjects && subjectsFilteredByTopic.map((subject) => {
        return (
          <div key={subject.id} style={{ borderBottom: "5px solid white" }}>
            <h2>{subject.title}</h2>
            <span>{subject.category}</span>
            <p>{subject.description}</p>

            {/* <DeleteSubjectButton subjectId={subject.id} /> */}
            <button onClick={() => deleteSubjectHandler(subject.id)} className="delete-button">
              Delete
            </button>
          </div>
        );
      })}

      <hr />
      <NewSubjectForm topicId={params.topicId} />

    </div>
  );
}

export default Subjects;
