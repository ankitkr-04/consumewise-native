import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export interface FormState {
  [key: string]: string;
}

interface UseFormProps<T extends FormState> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
}

const useForm = <T extends FormState>({
  initialValues,
  onSubmit,
}: UseFormProps<T>) => {
  const [form, setForm] = useState<T>(initialValues);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof T, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // console.log(field, value);
    
  };

  const handleSubmit = async () => {
    const isEmptyField = Object.values(form).some((value) => !value);

    if (isEmptyField) {
      alert("Please fill all fields");
      return;
    }
    setSubmitting(true);
    try {
      await onSubmit(form);
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
