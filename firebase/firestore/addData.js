// ! ADD A NEW DOCUMENT TO A COLLECTION
import { firebase_db } from "../firebase_config";
import { collection, addDoc } from "firebase/firestore";

export default async function addData(colllection, formData) {

  let result = null;
  let error = null;

  try {

    console.log(formData);
    const result = await addDoc(collection(firebase_db, colllection), formData);

    console.log(`Document written with ID: ${result.id}`)
  } catch (e) {
    error = e;
  }

  return { result, error };
}
