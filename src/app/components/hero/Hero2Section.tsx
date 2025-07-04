import Image from "next/image";

export default function Hero2Section() {
  return (
    <section className="mt-8.25 flex flex-col lg:flex-row justify-around items-center gap-8">
      <section className="flex w-full lg:w-1/2 justify-center">
        <Image
          src="/pana.svg"
          alt="Hero illustration"
          width={618}
          height={604}
          priority
          className="w-full h-auto max-w-[618px]"
        />
      </section>

      <section className="flex-1 w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          How to design your site footer like <br/>we did
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-[14px]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt 
          molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
          libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
          nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
          in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi
          ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="mt-5.5 bg-primary text-white font-medium py-2.5 px-5.5 rounded">
          Learn More
        </button>
      </section>
    </section>
  );
}