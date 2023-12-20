import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB9CMgbn0sSeTV8KJbTKS6zSecFhj6TQ9U",
  authDomain: "feel-like-fb.firebaseapp.com",
  projectId: "feel-like-fb",
  storageBucket: "feel-like-fb.appspot.com",
  messagingSenderId: "670409576708",
  appId: "1:670409576708:web:0e926caae686ebfd978051",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
