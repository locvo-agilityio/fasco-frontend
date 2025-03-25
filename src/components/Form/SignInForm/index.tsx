'use client';

import { z } from 'zod';
import Form from 'next/form';
import { addToast } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { useActionState, useCallback, useEffect, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

// Components
import { Button, Input } from '@/components/common';
import PasswordInput from '@/components/PasswordInput';

// Utils
import { SignInSchema } from '@/utils';

// Icons
import { GithubIcon, GoogleIcon } from '@/components/icons';

// ACtions
import { login, signInWithGitHub, signInWithGoogle } from '@/actions';

// Constants
import { ROUTES, ToastType } from '@/constants';

const SignInForm = () => {
  const [action, formAction] = useActionState(login, {
    status: ToastType.SUCCESS,
    message: '',
  });
  const [isPending, startTransition] = useTransition();
  const {
    control,
    formState: { isDirty, isValid },
  } = useForm<z.infer<typeof SignInSchema>>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      password: '',
      email: '',
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
    <div className="mt-[83px]">
      <h2 className="font-volkhov text-xl">Sign In To FASCO</h2>
      <div className="flex flex-col md:flex-row w-full gap-5 mt-7">
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

      <div className="flex items-center justify-center mt-20 font-poppins font-bold text-xl text-background-600">
        - OR -
      </div>

      <Form
        action={handleSubmit}
        className="w-full flex flex-col items-center justify-center mt-12"
      >
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <Input
              type="email"
              label="Email"
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

        <div className="w-full max-w-[575px] mt-11 flex flex-col gap-5 justify-around">
          <Button
            title="Sign In"
            type="submit"
            size="md"
            className="shadow-md h-[60]"
            radius="lg"
            isDisabled={isDisabled}
            isLoading={isPending}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            href={ROUTES.SIGN_UP}
            title="Register Now"
            color="primary"
            variant="ghost"
            size="md"
            radius="lg"
            className="h-[60] text-blue-600 border-blue-600"
          >
            Register Now
          </Button>
        </div>
        <div className="flex w-full justify-end mt-1">
          <p className="font-bold text-blue-600">Forget Password?</p>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
