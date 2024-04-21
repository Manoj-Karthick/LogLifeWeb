import { User, getAuth, sendEmailVerification } from "firebase/auth";

export default defineEventHandler(async (event) => {
  const auth = getAuth();
  sendEmailVerification(auth?.currentUser as User).then(() =>
    console.log("Sent email verification")
  );
});
