import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-8.25 flex flex-col lg:flex-row justify-around items-center gap-8">
      <section className="flex w-full lg:w-1/2 justify-center">
        <Image
          src="/image1.svg"
          alt="Hero illustration"
          width={618}
          height={604}
          priority
          className="w-full h-auto max-w-[618px]"
        />
      </section>

      <section className="flex-1 w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          The unseen of spending three <br />years at Pixelgrade
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
          accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
          porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
          quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="mt-5.5 bg-primary text-white font-medium py-2.5 px-5.5 rounded">
          Learn More
        </button>
      </section>
    </section>
  );
}