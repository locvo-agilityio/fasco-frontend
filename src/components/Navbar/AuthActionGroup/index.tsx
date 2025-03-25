import { Button } from '@/components/common';
import { ROUTES } from '@/constants';
import { NavbarContent, NavbarItem } from '@heroui/react';
import Link from 'next/link';

const AuthActionGroup = () => (
  <NavbarContent justify="end">
    <NavbarItem className="hidden lg:flex">
      <Button
        as={Link}
        href={ROUTES.LOGIN}
        color="primary"
        variant="ghost"
        size="md"
        className="h-14 w-36 font-poppins text-foreground-400 border-none data-[hover=true]:!bg-primary-300 data-[hover=true]:!text-primary-foreground"
      >
        Sign In
      </Button>
    </NavbarItem>

    <NavbarItem>
      <Button
        as={Link}
        href={ROUTES.SIGN_UP}
        size="md"
        radius="lg"
        className="h-14 w-36"
      >
        Sign Up
      </Button>
    </NavbarItem>
  </NavbarContent>
);

export default AuthActionGroup;
