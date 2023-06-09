// ! DELETE A NEW DOCUMENT TO A COLLECTION
import { firebase_db } from "../firebase_config";
import { doc, deleteDoc } from "firebase/firestore";

export default async function deleteData(colllection, id) {
  let result = null;
  let error = null;

  try {
    console.log(id);
    await deleteDoc(doc(firebase_db, colllection, id));

    console.log(`Document with ID: ${result.id} deleted with success`);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
