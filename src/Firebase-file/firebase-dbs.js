import app from "./firebase-config";
import { getFirestore } from "@firebase/firestore";

const db = getFirestore(app);
// db variable store all firebase information
export default db;
