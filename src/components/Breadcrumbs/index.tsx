'use client';

import {
  BreadcrumbItem,
  Breadcrumbs as BreadcrumbsHeroUI,
} from '@heroui/react';

interface BreadcrumbsProps {
  breadcrumbs: {
    id: number;
    title: string;
    path: string;
  }[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <BreadcrumbsHeroUI>
    {breadcrumbs.map(({ id, path, title }) => (
      <BreadcrumbItem
        key={id}
        href={path}
        className="font-jost"
        classNames={{
          item: 'font-jost text-gray-600',
        }}
      >
        {title}
      </BreadcrumbItem>
    ))}
  </BreadcrumbsHeroUI>
);

export default Breadcrumbs;
