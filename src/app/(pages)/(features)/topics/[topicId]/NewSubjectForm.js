"use client";

import { useState, useEffect } from "react";
import addData from "@firebase/firestore/addData";

const NewSubjectForm = ({ topicId }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  console.log(topicId);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = { title, description, category, topic: topicId };
    // console.log(formData);

    addData("subjects", formData);
    setShowForm(false);
  }

  return (
    <>
      <button
        onClick={() => setShowForm(!showForm)}
        className={showForm ? "delete-button" : "add-button"}
      >
        {!showForm ? "Add a subject" : "Cancel"}
      </button>

      {showForm &&
        <form onSubmit={submitHandler}>
          {/* // ! CATEGORY */}
          <label htmlFor="category">Category</label>
          <input onChange={(e) => setCategory(e.target.value)} type="text" name="category" id="category" placeholder="Category" required />

          {/* // ! TITLE  */}
          <label htmlFor="title">Title</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" placeholder="Title" required/>

          {/* // ! DESCRIPTION */}
          <label htmlFor="description">Description</label>
          <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="description" cols="30" rows="5" placeholder="Description" required />

          {/* // ! SUBMIT BUTTON */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      }
    </>
  );
};

export default NewSubjectForm;

// ! PSEUDO CODE
// * 1. Create a button that toggles a form
// * 2. Create a form that has a title and description
// * 3. Create a submit button that creates a new subject
// * 4. Create a function that creates a new subject
// * 5. Create a function that toggles the form
// * 6. Create a function that submits the form
