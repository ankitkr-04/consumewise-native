import { appwriteConfig } from "@/config";
import {
  Account,
  Avatars,
  Client,
  Databases,
  Query,
} from "react-native-appwrite";

const { endpoint, platform, projectId, databaseId, userCollectionId } =
  appwriteConfig;

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setPlatform(platform);

const account = new Account(client);
const avatar = new Avatars(client);
const db = new Databases(client);

export const getCurrentUser = async () => {
  try {
    let currAcc;
    try {
      currAcc = await account.get();
    } catch (error) {
      // console.log("User not logged in. Proceeding as guest.");
      return null;
    }
    

    if (currAcc && currAcc.$id) {
      // console.log("Current User ID: ", currAcc.$id);
      const user = await db.listDocuments(databaseId, userCollectionId, [
        Query.equal("userId", currAcc.$id),
      ]);

      if (!user) {
        throw new Error("No user found in the database");
      }
      // console.log("Current User: ", user.documents[0]);

      return user.documents[0];
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get current user");
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw new Error("No session found");
    return session;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to sign in");
  }
};

export const signOut = async () => {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to sign out");
  }
}
