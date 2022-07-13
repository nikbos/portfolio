import Link from './Link';
import siteMetadata, { github, linkedin } from '@/data/siteMetadata';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-slate-50 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-500 mb-8" />
      <div className="w-full justify-items-center max-w-2xl grid grid-cols-1 gap-4 pb-8 sm:grid-cols-3 ">
        <div className="flex flex-col space-y-4 ">
          <Link href="/">
            <a className="text-gray-500 hover:text-slate-50">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-slate-50">About</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href={linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={github}>GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-slate-50">Uses</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-slate-50">Blog</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
