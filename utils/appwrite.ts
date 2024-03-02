import { Client, Databases } from "appwrite";
const connectAppwriteClient = () => {
  const runtimeConfig = useRuntimeConfig();
  const client = new Client()
    .setEndpoint(runtimeConfig.public.API_ENDPOINT)
    .setProject(runtimeConfig.public.PROJECT_ID);
  const databases = new Databases(client);

  return { client, databases };
};

export const getAppwriteDocuments = async () => {
  const { databases } = connectAppwriteClient();
  const runtimeConfig = useRuntimeConfig();
  return databases.listDocuments(
    runtimeConfig.public.DATABASE_ID,
    runtimeConfig.public.COLLECTION_USER_ID
  );
};
