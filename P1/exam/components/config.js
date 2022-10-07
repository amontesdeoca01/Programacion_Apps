// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6JQdZyyH6rVg9NPOXlKFTv9HFvQV1oYg",
    authDomain: "examen-a9957.firebaseapp.com",
    databaseURL: "https://examen-a9957-default-rtdb.firebaseio.com/",
    projectId: "examen-a9957",
    storageBucket: "examen-a9957.appspot.com",
    messagingSenderId: "694013370094",
    appId: "1:694013370094:web:41a0b9c9b8cba17b325dff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);    

//initizile database
export const db = getDatabase(app);