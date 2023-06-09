import { firebase_db } from "../firebase_config";
import { collection, setDoc, getDocs } from "firebase/firestore";


export default async function getIndexData(colllection) {
  let results = null;
  let error = null;
  const data = [];


  try {
    results = await getDocs(collection(firebase_db, colllection));
    results.forEach((doc) => {
      data.push(doc.data());
    });

  } catch (e) {
    error = e;
  }

  return { results, error, data };
}
