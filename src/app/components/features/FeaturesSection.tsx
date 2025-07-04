import Image from 'next/image';
import React from 'react';
import AnimateOnScroll from '../animate/AnimateOnScroll';

export default function FeaturesSection() {
  return (
    <section className="pt-[30px] text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Manage your entire community <br />in a single system
      </h2>
      <p className="mt-2 text-gray-600">
        Who is Nextcent suitable for?
      </p>
      <section className="mt-3 flex flex-col md:flex-row justify-center gap-8 text-center px-4">
        {[1, 2, 3].map((num, index) => (
            <AnimateOnScroll key={num} delay={index * 0.2}>

                <FeatureCard 
                  key={num}
                  icon={`/Icon_${num}.svg`}
                  title={[
                    "Membership, Organisations",
                    "National, Associations",
                    "Clubs, And Groups"
                  ][num - 1]}
                  description={[
                    "Our membership management software provides full automation of membership renewals and payments",
                    "Our membership management software provides full automation of membership renewals and payments",
                    "Our membership management software provides full automation of membership renewals and payments"
                  ][num - 1]}
                />
            </AnimateOnScroll>
        ))}
      </section>
    </section>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 bg-white px-5.5 py-4.25 rounded-[6px] shadow-md w-full max-w-[416px] mx-auto">
      <div className="h-24 flex items-center justify-center">
        <Image src={icon} alt={title} width={80} height={80} priority />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2.75">
        {title.split(',').map((word, i) => (
          <React.Fragment key={i}>
            {word}
            <br />
          </React.Fragment>
        ))}
      </h3>
      <p className="mt-1.5 text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}