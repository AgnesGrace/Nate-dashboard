'use client';
import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/ui/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Invoices',
    href: '/ui/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Customers',
    href: '/ui/dashboard/customers',
    icon: UserGroupIcon,
  },
];
export default function NavLinks() {
  const pathName = usePathname();
  console.log('pathname', pathName);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
              'flex items-center justify-center grow gap-2 md:flex-none md:justify-start h-[48px] rounded-mg bg-gray-50 p-3 text-sm hover:text-teal-600 md:p-2 md:px-3',
              {
                'bg-teal-50 text-teal-600': pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />{' '}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
