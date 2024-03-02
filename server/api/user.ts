import { Databases } from "node-appwrite";
import { confi } from "./config";

const getUsers = async () => {
  const runtimeConfig = useRuntimeConfig();
  const client = confi();
  const databases = new Databases(client);
  return databases.listDocuments(
    runtimeConfig.public.DATABASE_ID,
    runtimeConfig.public.COLLECTION_USER_ID
  );
};

export default defineEventHandler((event) => {
  if (event.method == "GET") {
    return getUsers();
  }
});
