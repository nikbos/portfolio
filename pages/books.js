import booksData from '@/data/booksData';
import Card from '@/components/Card';

export default function Books() {
  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Books
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Books I enjoy reading.
          </p>
        </div>
        <div className="py-12 ">
          <div className="flex flex-wrap m-4">
            {booksData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
