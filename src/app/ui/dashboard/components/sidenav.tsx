import { PowerIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className="h-[20vh] md:h-[100vh] bg-gray-100 flex flex-col ">
      <Link
        href="/"
        className="bg-teal-600 p-4 h-20 md:h-40 rounded-bl-lg rounded-br-lg mb-2 flex items-end justify-start "
      >
        <div className="w-32 md:w-40 text-white text-4xl md:text-6xl font-bold">
          Nate
        </div>
      </Link>
      <div className="flex flex-row md:flex-col grow justify-between space-x-2 md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden md:block h-auto w-full grow rounded-md bg-gray-50 "></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
