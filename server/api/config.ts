import { Client } from "node-appwrite";

export function confi(): Client {
  const runtimeConfig = useRuntimeConfig();

  const client = new Client()
    .setEndpoint(runtimeConfig.public.API_ENDPOINT)
    .setProject(runtimeConfig.public.PROJECT_ID)
    .setKey(runtimeConfig.public.APPWRITE_API_KEY);

  return client;
}
