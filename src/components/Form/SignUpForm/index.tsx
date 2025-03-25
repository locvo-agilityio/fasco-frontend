'use client';

import { z } from 'zod';
import Form from 'next/form';
import { addToast } from '@heroui/react';
import { useActionState, useCallback, useEffect, useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';

// Components
import { Button, Input } from '@/components/common';
import PasswordInput from '@/components/PasswordInput';

// Utils
import { SignUpSchema } from '@/utils';

// Icons
import { GithubIcon, GoogleIcon } from '@/components/icons';

// Actions
import { signInWithGitHub, signInWithGoogle, signUp } from '@/actions';

// Constants
import { ROUTES, ToastType } from '@/constants';

const SignUpForm = () => {
  const [action, formAction] = useActionState(signUp, {
    status: ToastType.SUCCESS,
    message: '',
  });
  const [isPending, startTransition] = useTransition();
  const {
    control,
    formState: { isDirty, isValid },
  } = useForm<z.infer<typeof SignUpSchema>>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      phone: '',
      password: '',
    },
  });
  const isDisabled = !isDirty || !isValid;

  const handleSubmit = useCallback(
    (data: FormData) => startTransition(() => formAction(data)),
    [],
  );

  useEffect(() => {
    if (action.message) {
      addToast({
        description: action.message,
        color: action.status === ToastType.SUCCESS ? 'success' : 'danger',
      });
    }
  }, [action]);

  const handleSignInWithGitHub = useCallback(
    async () => await signInWithGitHub(),
    [],
  );

  const handleSignInWithGoogle = useCallback(
    async () => await signInWithGoogle(),
    [],
  );

  return (
    <div className="md:mt-[83px]">
      <h2 className="font-volkhov text-xl">Create Account</h2>
      <div className="flex flex-col md:flex-row w-full gap-5 md:mt-7 mt-2">
        <Button
          color="primary"
          startContent={<GithubIcon />}
          variant="ghost"
          radius="sm"
          size="md"
          className="text-foreground-500 py-2 h-[55]"
          type="button"
          onPress={handleSignInWithGitHub}
        >
          Continue with Github
        </Button>
        <Button
          color="primary"
          startContent={<GoogleIcon />}
          variant="ghost"
          radius="sm"
          size="md"
          className="text-foreground-500 py-2 h-[55]"
          type="button"
          onPress={handleSignInWithGoogle}
        >
          Continue with Google
        </Button>
      </div>

      <div className="flex items-center justify-center md:mt-20 mt-5 font-poppins font-bold text-xl text-background-600">
        - OR -
      </div>

      <Form
        className="w-full ]flex flex-col items-center justify-center md:mt-10"
        action={handleSubmit}
      >
        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full">
            <Controller
              control={control}
              name="firstName"
              render={({ field, fieldState: { error } }) => (
                <Input
                  type="text"
                  label="First Name"
                  {...field}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <Input
                  type="email"
                  label="Email Address"
                  {...field}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <PasswordInput
                  label="Password"
                  {...field}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
          </div>
          <div className="w-full">
            <Controller
              control={control}
              name="lastName"
              render={({ field, fieldState: { error } }) => (
                <Input
                  type="text"
                  label="Last Name"
                  {...field}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field, fieldState: { error } }) => (
                <Input
                  type="phone"
                  label="Phone Number"
                  {...field}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field, fieldState: { error } }) => (
                <PasswordInput
                  label="Confirm Password"
                  {...field}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
          </div>
        </div>

        <div className="w-full max-w-[575px] md:mt-11 flex flex-col gap-5 justify-around">
          <Button
            type="submit"
            size="md"
            className="shadow-md h-[60] font-semibold font-poppins"
            radius="lg"
            isDisabled={isDisabled}
            isLoading={isPending}
          >
            Create Account
          </Button>
        </div>
        <div className="flex items-center justify-center gap-1 w-full md:mt-1">
          <p className="font-poppins text-center">Already have an account?</p>

          <Button
            as={Link}
            href={ROUTES.LOGIN}
            color="primary"
            size="md"
            variant="ghost"
            className="border-none flex items-center justify-start w-2 px-0 py-0 data-[hover=true]:!bg-transparent data-[hover=true]:!text-primary-foreground"
          >
            <span className="text-blue-600">Login</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
