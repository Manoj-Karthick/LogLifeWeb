import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return {};
});
