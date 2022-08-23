// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDGPmki-WjYPZxq6sppxT_f22hPMf3Izj8",
    authDomain: "to-do-list-5f3c8.firebaseapp.com",
    databaseURL: "https://to-do-list-5f3c8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "to-do-list-5f3c8",
    storageBucket: "to-do-list-5f3c8.appspot.com",
    messagingSenderId: "837634878572",
    appId: "1:837634878572:web:f84e0e274534e93945bc49",
    measurementId: "G-J9T179LP6Z"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// function to save the new to-do list item to the backend
export function saveToDoItem(text, isDone) {
    const pathRef = ref(db, users);
    set(pathRef, {
        text: text,
        isDone: isDone
    });
}