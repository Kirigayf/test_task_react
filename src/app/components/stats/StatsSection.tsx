import Image from "next/image";

const stats = [
  { icon: "/Icon_4.svg", value: "2,245,341", label: "Members" },
  { icon: "/Group2.svg", value: "828,867", label: "Event Bookings" },
  { icon: "/Icon_6.svg", value: "46,328", label: "Clubs" },
  { icon: "/Icon_7.svg", value: "1,926,436", label: "Payments" },
];

export default function StatsSection() {
  return (
    <section className="bg-carousel -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-36 mt-8 py-8 sm:py-10 md:py-12 lg:py-14">
      <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 md:gap-12 lg:gap-16">
        <section className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Helping a local</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">business reinvent itself</h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
            We reached here with our hard work and dedication
          </p>
        </section>

        <section className="w-full lg:w-1/2 grid grid-cols-1 sm:ml-4 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
              <div className="flex-shrink-0">
                <Image 
                  src={stat.icon} 
                  alt={stat.label} 
                  width={40} 
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  priority
                />
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-gray-600 text-sm sm:text-base">{stat.label}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}