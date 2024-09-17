import { useGlobalContext } from "@/context/GlobalProvider";
import useForm, { FormState } from "@/hooks/useForm";
import { getCurrentUser, signIn } from "@/lib/appwrite";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SignInFormState extends FormState {
  email: string;
  password: string;
}

const SignIn = () => {
  const { setIsLogged, setUser } = useGlobalContext();

  const { form, isSubmitting, handleChange, handleSubmit } =
    useForm<SignInFormState>({
      initialValues: { email: "", password: "" },
      onSubmit: async ({ email, password }) => {
        await signIn(email, password);
        const currUser = await getCurrentUser();
        setUser(currUser);
        setIsLogged(true);
      },
    });

  return (
    <SafeAreaView className="h-full">
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
