'use client';

import { useMemo } from 'react';
import {
  Navbar as NavbarHeroUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Constants
import { FOOTER_NAVBAR } from '@/constants';

const Footer = () => {
  const pathname = usePathname();

  const renderNavbar = useMemo(
    () =>
      FOOTER_NAVBAR.map(({ id, title, path }) => (
        <NavbarItem
          key={id}
          className="font-poppins text-foreground-400 hover:border-b-2 hover:border-b-primary-200 data-[active=true]:border-b-2 data-[active=true]:border-b-primary-200 data-[active=true]:font-normal"
          isActive={pathname === path}
        >
          <Link href={path}>{title}</Link>
        </NavbarItem>
      )),
    [pathname],
  );

  return (
    <NavbarHeroUI
      className="py-8 border-t mt-10 border-t-primary-200"
      maxWidth="2xl"
    >
      <NavbarBrand>
        <h2 className="text-2xl font-volkhov">FASCO</h2>
      </NavbarBrand>

      <div className="hidden sm:flex gap-14 items-center">
        <NavbarContent className="hidden sm:flex gap-14" justify="center">
          {renderNavbar}
        </NavbarContent>
      </div>
    </NavbarHeroUI>
  );
};

export default Footer;
