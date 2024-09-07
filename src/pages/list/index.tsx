import Link from 'next/link'
import Image from 'next/image'
import organizations from '@/data/organization.json'
import * as m from '@/paraglide/messages'

export default function OrganizationList() {
  return (
    <div className="font-preten flex flex-col min-h-screen bg-yellow-400 p-6 pb-20 sm:p-10 md:p-16 lg:p-24">
      <h1 className="text-3xl sm:text-4xl font-bold font-gmarket text-center tracking-tighter leading-tight mt-4 mb-8 sm:mb-12">
        {m.list_title()}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-6">
        {organizations.map((org) => (
          <Link
            href={`/result/${org.type}`}
            key={org.type}
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--black)] focus:ring-opacity-50"
          >
            <article className="h-full flex flex-col">
              <Image
                src={org.imageUrl}
                alt=""
                width={300}
                height={200}
                className="w-full h-36 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6 flex-grow">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--black)] mb-2 sm:mb-3">
                  {m[org.name as keyof typeof m]()}
                </h2>
                <p className="text-sm sm:text-base text-[var(--grey-03)]">
                  {m[org.description as keyof typeof m]()}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
