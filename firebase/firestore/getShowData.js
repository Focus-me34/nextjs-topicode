import { firebase_db } from "../firebase_config";
import { doc, getDoc } from "firebase/firestore";

export default async function getShowData(collection, id) {
  let result = null;
  let error = null;
  let data = null;

  const docRef = doc(firebase_db, "cities", id);

  try {
    result = await getDoc(docRef);

    if (result.exists()) {
      data = result.data();
    } else {
      throw new Error(`Couldn't find document with id ${id} from the collection ${collection}`);
    }
  } catch (e) {
    error = e;
  }

  return { result, error, data };
}
