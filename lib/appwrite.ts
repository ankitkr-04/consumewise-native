import { appwriteConfig } from "@/config";
import { Account, Avatars, Client, Databases } from "react-native-appwrite";

const { endpoint, platform, projectId, databaseId, userCollectionId } =
  appwriteConfig;

const client = new Client();
client.setEndpoint(endpoint).setProject(projectId).setPlatform(platform);

const account = new Account(client);
const avatar = new Avatars(client);
const db = new Databases(client);


