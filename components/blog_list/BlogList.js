import Image from "next/image";
import Link from "next/link";

export default function BlogList({ blogs }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80";
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {blogs.map((bl) => (
            <Link key={bl.id} href={`/ssg/${bl.id}`} className="group">
              <a>
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    layout="fill"
                    src={bl.img ? bl.img : defaultImage}
                    alt={bl.title}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{bl.title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
