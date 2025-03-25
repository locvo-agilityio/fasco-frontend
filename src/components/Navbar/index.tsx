'use client';

import {
  Navbar as NavbarHeroUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import HeaderTools from './HeaderTools';
import AuthActionGroup from './AuthActionGroup';

// Constants
import { DEFAULT_NAVBAR, AUTH_NAVBAR, ROUTES } from '@/constants';

interface INavbarProps {
  isAuthenticated?: boolean;
}

const Navbar = ({ isAuthenticated = false }: INavbarProps) => {
  const pathname = usePathname();

  const renderNavbar = () =>
    (isAuthenticated ? AUTH_NAVBAR : DEFAULT_NAVBAR).map(
      ({ id, title, path }) => {
        const isActive =
          pathname.includes(title.toLowerCase()) || pathname === path;

        return (
          <NavbarItem
            key={id}
            className="font-poppins text-foreground-400 hover:border-b-2 hover:border-b-primary-200 data-[active=true]:border-b-2 data-[active=true]:border-b-primary-200 data-[active=true]:font-normal"
            isActive={isActive}
          >
            <Link href={path} aria-label={title}>
              {title}
            </Link>
          </NavbarItem>
        );
      },
    );

  return (
    <NavbarHeroUI className="py-16" maxWidth="full">
      <NavbarBrand>
        <Link href={ROUTES.HOME}>
          <h1 className="text-5xl font-volkhov">FASCO</h1>
        </Link>
      </NavbarBrand>

      <div className="hidden sm:flex gap-14 items-center">
        <NavbarContent className="hidden sm:flex gap-14" justify="center">
          {renderNavbar()}
        </NavbarContent>

        {!isAuthenticated && <AuthActionGroup />}
      </div>

      {isAuthenticated && <HeaderTools />}
    </NavbarHeroUI>
  );
};

export default Navbar;
