import { InferType, number, object, string } from 'yup';

export const PersonalInfoSchema = object({
  firstName: string().min(2).required('First Name is required'),
  lastName: string().min(2).required('Last Name is required'),
  email: string().email().required('Email is required'),
  password: string().min(3).required('Password is required'),
  username: string().min(3).required('Username is required'),
  phone: number(),
  totalRewards: number(),
  nameOnCard: string().min(3),
  cardNo: number(),
  cardExpiry: number(),
  cvv: number(),
});

export type PersonalInfoSchemaType = InferType<typeof PersonalInfoSchema>;
