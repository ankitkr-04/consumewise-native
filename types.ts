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

export interface SignUpProps {
  email: string;
  name: string;
  password: string;
  age: string;
  weight: string;
  gender: string;
  height: string;
  activityLevel: string;
  avatar: string
}
