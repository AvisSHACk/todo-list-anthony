// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc, doc, onSnapshot, updateDoc, deleteDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Ob53HrRPm-_XABBJXlNmjGR6QHPKXYU",
  authDomain: "app-todolist-bbab6.firebaseapp.com",
  projectId: "app-todolist-bbab6",
  storageBucket: "app-todolist-bbab6.appspot.com",
  messagingSenderId: "693026780514",
  appId: "1:693026780514:web:85ef281e1952ec8f89a83b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
    collection, 
    addDoc,
    doc, 
    onSnapshot,
    updateDoc,
    deleteDoc
  };