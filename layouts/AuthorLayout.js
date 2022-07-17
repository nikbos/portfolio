import Image from 'next/image';
import { PageSEO } from '@/components/SEO';
import Link from '@/components/Link';

export default function AuthorLayout({ children, frontMatter }) {
  const { name } = frontMatter;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="pt-6 pb-6 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            About
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">More about me.</p>
        </div>
        <div className="items-start space-y-2  xl:gap-x-8 xl:space-y-0">
          <div className="pt-6 pb-6 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
        </div>
      </div>
      <div className="pb-6 space-y-2">
        <p>
          <Link
            href={'/uses'}
            className=" no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
          >
            Uses
          </Link>
        </p>
        <p>
          <Link
            href={'/books'}
            className="no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
          >
            Books
          </Link>
        </p>
        <p>
          <Link
            href={'/podcasts'}
            className="no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
          >
            Podcasts
          </Link>
        </p>
      </div>
    </>
  );
}
