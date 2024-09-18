export interface UserProps {
  $id: string;
  email: string;
  name: string;
  height: number;
  weight: number;
  age: number;
  userId: string;
  gender: string;
  activityLevel: "sedentary" | "light" | "moderate" | "active" | "very_active";
  allergies: string[];
  medications: string[];
  createdAt: string;
  updatedAt: string;
  avatar: string;
}
