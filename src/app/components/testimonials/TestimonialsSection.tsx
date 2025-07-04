import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section className="bg-carousel -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-36 mt-8.25 py-6.5">
      <section className="flex flex-col lg:flex-row justify-around items-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 gap-8">
        <section className="w-full lg:w-1/2 justify-center flex">
          <Image
            src="/image9.svg"
            alt="Testimonial illustration"
            width={518}
            height={504}
            priority
            className="w-full h-auto max-w-[518px]"
          />
        </section>
        <section className="w-full lg:w-1/2">
          <p className="text-gray-600 text-sm sm:text-[16px]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
            vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
            tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#4CAF4F] mt-3.5">
            Tim Smith
          </h2>
          <p className="text-gray-400 text-xs sm:text-[14px] mt-1.5">
            British Dragon Boat Racing Association
          </p>
          <section className="flex flex-wrap justify-center sm:justify-between mt-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Image
                key={num}
                src={`/Logo (${num}).svg`}
                alt={`Client Logo ${num}`}
                width={48}
                height={48}
                priority
                className="w-8 h-8 sm:w-12 sm:h-12"
              />
            ))}
            <button className="items-center flex h-[40px] text-[#4CAF4F] rounded-[2.78px] text-sm sm:text-[16px]">
              Meet all customers
              <Image 
                src="/Right_green.svg" 
                alt="Arrow right" 
                width={20} 
                height={20} 
                className="ml-1.5 flex" 
              />
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}