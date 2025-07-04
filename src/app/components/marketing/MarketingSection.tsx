'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  title: string;
  urlToImage: string;
  url: string;
}



const MarketingCard = ({ 
  title, 
  urlToImage, 
  url 
}: Article) => {
  return (
    <div className="relative group w-full">
      <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg">
        
        {urlToImage && (
          <Image
            src={urlToImage}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority
          />
        )}
      </div>
      <div className="relative bg-white shadow-lg mx-2 sm:mx-4 -mt-16 sm:-mt-20 md:-mt-28 p-4 sm:p-6 rounded-lg min-h-[120px] sm:min-h-[140px] md:min-h-[168px] flex flex-col items-center justify-center">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-d-grey text-[#717171] mb-2 sm:mb-3 md:mb-4 text-center">
          {title}
        </h3>
        <Link 
          href={url} 
          className="flex items-center text-sm sm:text-base md:text-lg text-brand-primary font-semibold hover:underline text-[#4CAF4F]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Readmore <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
};

const MarketingSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = '8e0eab736a814ba68c79423303134bef';
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        setArticles(data.articles || []);
        console.log(data.articles.urlToImage);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="mx-auto px-4 sm:px-6 text-center max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-d-grey mb-3 sm:mb-4 text-[#4D4D4D]">
          Caring is the new marketing
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-neutral-grey max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12 md:mb-16 text-[#717171]">
          The Nextcent blog is the best place to read about the latest membership insights,
          trends and more. See who's joining the community, read about how our community
          are increasing their membership income and lot's more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-16 sm:gap-y-20 md:gap-y-32">
          {articles.slice(0, 3).map((article, index) => (
            <MarketingCard
              key={index}
              urlToImage={article.urlToImage || ''}
              title={article.title}
              url={article.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;