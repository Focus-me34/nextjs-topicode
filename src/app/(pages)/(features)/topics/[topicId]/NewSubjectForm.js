"use client";

import { useState } from "react";
import addData from "@firebase/firestore/addData";

const NewSubjectForm = ({ topicId }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      category,
      topic: topicId,
      meta_title: metaTitle,
      meta_description: metaDescription,
      meta_keywords: metaKeywords
    };

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

          <hr /><br />
          {/* // ! META TAGS */}
          {/* // TODO: META TITLE */}
          <label htmlFor="meta_title">Meta Title</label>
          <input style={{ borderColor: "blue" }} onChange={(e) => setMetaTitle(e.target.value)} name="meta_title" id="meta_title" placeholder="Meta title" required />

          {/* // TODO: META DESCRIPTION */}
          <label htmlFor="meta_description">Meta Description</label>
          <input style={{ borderColor: "blue" }} onChange={(e) => setMetaDescription(e.target.value)} name="meta_description" id="meta_description" placeholder="Meta description" required />

          {/* // TODO: META KEYWORDS */}
          <label htmlFor="meta_keywords">Meta Keywords</label>
          <input style={{ borderColor: "blue" }} onChange={(e) => setMetaKeywords(e.target.value)} name="meta_keywords" id="meta_keywords" placeholder="Meta description" required />

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
