import { useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay@8.6.0';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import worxLogo from 'figma:asset/2f399471bafeab7ca8bc4e4dd5a8ecdd36b3819d.png';
import nyGiantsLogo from 'figma:asset/871b45173a44a8de849d0396d6125af779efbe47.png';
import giantsWordmarkLogo from 'figma:asset/7069a072c3a1660d6cfbc7eaf45b2a746d7c6d07.png';
import nyGiantsHelmetLogo from 'figma:asset/fd737180328e8fa51dd6d9de778b078d776dc489.png';
import crownShieldLogo from 'figma:asset/9831b06430f797ca90b79d451acb88aaf78323ca.png';
import cascaisLogo from 'figma:asset/4bae5343f63d2a18ca9a60eddf4b0b1dc696d0ce.png';

const partnerLogos = [
  { name: 'NY Giants Helmet', logo: nyGiantsHelmetLogo },
  { name: 'Giants Wordmark', logo: giantsWordmarkLogo },
  { name: 'Crown Shield', logo: crownShieldLogo },
  { name: 'SportWorx', logo: worxLogo },
  { name: 'CS Cascais', logo: cascaisLogo },
  { name: 'New York Giants', logo: nyGiantsLogo },
  { name: 'NY Giants Helmet', logo: nyGiantsHelmetLogo },
  { name: 'Giants Wordmark', logo: giantsWordmarkLogo },
  { name: 'Crown Shield', logo: crownShieldLogo },
  { name: 'SportWorx', logo: worxLogo },
];

export function PartnerSlider() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <div className="w-full py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {partnerLogos.map((partner, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex items-center justify-center h-24 w-full">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-auto h-auto max-w-[140px] max-h-16 object-contain opacity-50 hover:opacity-80 transition-opacity"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}