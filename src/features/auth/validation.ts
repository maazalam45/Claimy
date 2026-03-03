import { z } from 'zod';

const email = z
  .string()
  .trim()
  .min(1, 'Email is required')
  .email('Enter a valid email');

const password = z.string().min(8, 'Password must be at least 8 characters');

export const loginSchema = z.object({
  email,
  password: z.string().min(1, 'Password is required'),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  email,
});

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export const signUpSchema = z
  .object({
    email,
    password,
    confirmPassword: z.string().min(1, 'Confirm your password'),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpValues = z.infer<typeof signUpSchema>;

export const newPasswordSchema = z
  .object({
    password,
    confirmPassword: z.string().min(1, 'Confirm your password'),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type NewPasswordValues = z.infer<typeof newPasswordSchema>;
