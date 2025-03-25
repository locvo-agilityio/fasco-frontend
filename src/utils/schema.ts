import { z } from 'zod';

// Constants
import {
  ERROR_MESSAGES,
  LOWERCASE_CHARACTERS_REGEX,
  NUMBER_CHARACTERS_REGEX,
  PHONE_NUMBER_REGEX,
  SPECIAL_CHARACTERS_REGEX,
  UPPERCASE_CHARACTERS_REGEX,
} from '@/constants';

const emailSchema = z.string().email({
  message: ERROR_MESSAGES.INVALID_EMAIL,
});

const passwordSchema = z
  .string()
  .min(8, { message: ERROR_MESSAGES.INVALID_PASSWORD })
  .regex(UPPERCASE_CHARACTERS_REGEX, {
    message: ERROR_MESSAGES.REQUIRE_UPPER_CASE,
  })
  .regex(LOWERCASE_CHARACTERS_REGEX, {
    message: ERROR_MESSAGES.REQUIRE_LOWER_CASE,
  })
  .regex(NUMBER_CHARACTERS_REGEX, {
    message: ERROR_MESSAGES.REQUIRE_NUMBER,
  })
  .regex(SPECIAL_CHARACTERS_REGEX, {
    message: ERROR_MESSAGES.REQUIRE_SPECIAL_CHARACTER,
  });

export const SignInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const SignUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: ERROR_MESSAGES.FIELD_REQUIRED('First Name') }),
    lastName: z
      .string()
      .min(1, { message: ERROR_MESSAGES.FIELD_REQUIRED('Last Name') }),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    phone: z.string().regex(PHONE_NUMBER_REGEX, {
      message: ERROR_MESSAGES.INVALID_PHONE_NUMBER,
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERROR_MESSAGES.PASSWORD_NOT_MATCH,
    path: ['confirmPassword'],
  });
