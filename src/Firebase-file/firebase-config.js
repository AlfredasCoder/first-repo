import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmnZ6Wj7Fv4anRn0MVd2P54KL7CPQKY3o",
  authDomain: "fir-9-explore.firebaseapp.com",
  databaseURL:
    "https://fir-9-explore-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-9-explore",
  storageBucket: "fir-9-explore.appspot.com",
  messagingSenderId: "591586209049",
  appId: "1:591586209049:web:07bf2ad11a402520c26988",
};

const app = initializeApp(firebaseConfig);
export default app;
