import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section className="pt-6 sm:pt-8 text-center px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Our Clients
      </h2>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">
        We have been working with some Fortune 500+ clients
      </p>
      <section className="mt-6 mb-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div key={num} className="flex-shrink-0 p-2 sm:p-3 md:p-4">
            <Image
              src={`/Logo_${num}.svg`}
              alt={`Client Logo ${num}`}
              width={0}
              height={0}
              sizes="(max-width: 640px) 32px,
                     (max-width: 768px) 40px,
                     (max-width: 1024px) 48px,
                     (max-width: 1280px) 56px,
                     64px"
              className="w-8 h-auto sm:w-10 md:w-12 lg:w-14 xl:w-16"
              priority
            />
          </div>
        ))}
      </section>
    </section>
  );
}