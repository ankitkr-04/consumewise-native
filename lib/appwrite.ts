import { appwriteConfig } from "@/config";
import { SignUpProps } from "@/types";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

const { endpoint, platform, projectId, databaseId, userCollectionId } =
  appwriteConfig;

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setPlatform(platform);

const account = new Account(client);
const avatarCreator = new Avatars(client);
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

export const signUp = async ({
  name,
  age,
  activityLevel,
  email,
  gender,
  height,
  password,
  weight,
  avatar,
}: SignUpProps) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);

    if (!newAccount) throw new Error("Account creation Failed");
    const avatarUrl = avatar ? avatar : avatarCreator.getInitials(name);

    await signIn(email, password);

    const newUser = await db.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        userId: newAccount.$id,
        name,
        age : parseInt(age),
        gender,
        height : parseFloat(height),
        weight : parseFloat(weight),
        activityLevel,
        email,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
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
};
