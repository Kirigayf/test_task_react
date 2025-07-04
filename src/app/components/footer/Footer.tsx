import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#263238] py-8 sm:py-16">
      <div className="max-w-[1615px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <Image 
            src="/Logo_w.svg" 
            alt="Nexcent logo" 
            width={120} 
            height={40} 
          />
          <div className="space-y-4">
            <p className="text-sm text-gray-300">
              Copyright © 2020 Landify UI Kit.
            </p>
            <p className="text-sm text-gray-300">All rights reserved</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 sm:mb-6">Company</h3>
          <ul className="space-y-2 sm:space-y-4">
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">About us</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Blog</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Contact us</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Pricing</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 sm:mb-6">Support</h3>
          <ul className="space-y-2 sm:space-y-4">
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Help center</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Terms of service</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Legal</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Privacy policy</Link></li>
            <li><Link href="/" className="text-gray-300 hover:text-primary text-sm sm:text-base">Status</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 sm:mb-6">Stay up to date</h3>
          <div className="relative max-w-[300px]">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 pr-10 rounded-lg bg-white/20 placeholder-gray-300 border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image 
                src="/send.svg" 
                alt="Submit" 
                width={16} 
                height={16} 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}