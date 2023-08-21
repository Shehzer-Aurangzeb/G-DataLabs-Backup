import { InferType, array, number, object, string } from 'yup';

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
export const PersonalDataSchema = object({
  date: string().required('Date is required'),
  highTemp: number().required('High Temperature is required'),
  lowTemp: number().required('Low Temperature is required'),
  emotionList: array().of(string().required('Emotion List cannot be empty')).min(1, 'At least one emotion is required'),
  emotionOverall: string().required('Overall emotion is required'),
  weatherType: string().required('Weather type is required'),
  relFinanceStatus: string().required(),
  exerciseTotalTime: string().required('Exercise time is required'),
});

export type PersonalInfoSchemaType = InferType<typeof PersonalInfoSchema>;
export type PersonalDataSchemaType = InferType<typeof PersonalDataSchema>;
