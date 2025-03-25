import Link from 'next/link';
import { NavbarContent, NavbarItem } from '@heroui/react';

// Constants
import { HEADER_TOOLS, ROUTES } from '@/constants';

// Components
import DrawerCart from '@/components/DrawerCart';

const HeaderTools = () => (
  <NavbarContent justify="end" className="gap-8">
    {HEADER_TOOLS.map(({ id, icon: Icon, path }) => (
      <NavbarItem key={id} className="hidden lg:flex">
        {path === ROUTES.CART ? (
          <DrawerCart />
        ) : (
          <Link href={path} aria-label={path}>
            <Icon className="text-primary-200" width={18} height={18} />
          </Link>
        )}
      </NavbarItem>
    ))}
  </NavbarContent>
);

export default HeaderTools;
