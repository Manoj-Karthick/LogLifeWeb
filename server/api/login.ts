import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "~/utils/firebaseConfig";

export default defineEventHandler(async (event) => {
  const auth = getAuth(app);
  console.log("called from login api");
  signInWithEmailAndPassword(auth, "test@loglife.co", "test")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Testing api");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
