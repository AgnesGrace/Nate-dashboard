import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex h-20  items-start bg-teal-500 rounded-bl-lg rounded-br-lg p-4 shrink-0 ">
        {/* main header*/}
      </div>
      <div className="flex flex-col md:flex-row gap-4 grow mt-4">
        <div className="px-6 py-10 md:w-2/5 md:px-20 bg-gray-50 flex flex-col justify-center gap-4 rounded-lg">
          <p>Hello from Agnes</p>
          <p>Don&apos;t ever give up!</p>
          <span>Rome was&apos;t built in a day</span>

          <Link
            href="/login"
            className="flex items-center gap-4 self-start rounded-lg bg-teal-500 text-white px-6 py-3 text-sm font-medium transition-colors hover:bg-teal-600 md:text-base"
          >
            <span>Join now</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/pos.png"
            alt="pos macheine"
            width={300}
            height={300}
            className="hidden md:block"
          />
        </div>
      </div>
    </main>
  );
}
