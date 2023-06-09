import { firebase_db } from "./firebase_config";
import { doc, setDoc } from "firebase/firestore";

export default async function addData(colllection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(firebase_db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
