import { appwriteConfig } from "@/config";
import { Account, Avatars, Client, Databases } from "react-native-appwrite";

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
      const user = await db.getDocument(
        databaseId,
        userCollectionId,
        currAcc.$id
      );

      if (!user) {
        throw new Error("No user found in the database");
      }

      return user;
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
