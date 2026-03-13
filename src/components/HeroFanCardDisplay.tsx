import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Trophy } from 'lucide-react';
import giantsPrideImage from 'figma:asset/4d7e6dd911f4d9b96edce19fbbd6e709d8335644.png';
import carouselImage2 from 'figma:asset/0e2122cc3a35c155aadd3cf3b5b6e1f7e113c996.png';

export function HeroFanCardDisplay() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[580px] sm:h-[620px] lg:h-[680px] flex items-center justify-center">
      {/* Left FanCard - Giants Pride (Behind, tilted left) */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -15 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-0 sm:left-8 lg:left-12 top-4 sm:top-8 w-[240px] sm:w-[280px] lg:w-[320px] z-10"
      >
        <div className="relative">
          {/* Card Shadow */}
          <div className="absolute inset-0 bg-black/20 rounded-3xl blur-2xl translate-y-4" />
          
          {/* FanCard with border */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-2">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={giantsPrideImage}
                alt="Giants Pride FanCard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Golden Fancard Badge - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute left-4 sm:left-12 lg:left-16 top-24 sm:top-32 lg:top-36 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 z-30"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
          <Trophy className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900 whitespace-nowrap">Golden Fancard</div>
          <div className="text-xs text-gray-500 whitespace-nowrap">Winner selected!</div>
        </div>
      </motion.div>

      {/* Right FanCard - Queen & King (Front, tilted right) */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-0 sm:right-8 lg:right-12 top-0 sm:top-4 w-[260px] sm:w-[300px] lg:w-[340px] z-20"
      >
        <div className="relative">
          {/* Card Shadow */}
          <div className="absolute inset-0 bg-black/20 rounded-3xl blur-2xl translate-y-4" />
          
          {/* FanCard with border */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-2">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={carouselImage2}
                alt="Queen & King of the Court FanCard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* +340% Engagement Badge - Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute right-0 sm:right-4 lg:right-8 top-[45%] sm:top-[48%] bg-gray-900 rounded-2xl shadow-2xl px-5 py-4 border border-gray-800 z-30"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">+340%</div>
            <div className="text-xs text-gray-400 whitespace-nowrap">Engagement</div>
          </div>
        </div>
      </motion.div>

      {/* Campaign Analytics Panel - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-[88%] max-w-3xl z-40"
      >
        {/* Complete Panel with rounded corners */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header - Black Background */}
          <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Campaign Analytics — Live</span>
            </div>
            <span className="text-gray-400 text-xs">Last 24h</span>
          </div>

          {/* Stats - White Background */}
          <div className="bg-white px-8 py-8">
            <div className="grid grid-cols-3 gap-6 sm:gap-10">
              {/* Fancards */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">2,847</div>
                <div className="text-sm text-gray-500 mb-2">Fancards</div>
                <div className="text-sm font-semibold text-green-600">+34%</div>
              </div>

              {/* Shares */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">8,291</div>
                <div className="text-sm text-gray-500 mb-2">Shares</div>
                <div className="text-sm font-semibold text-green-600">+52%</div>
              </div>

              {/* Impressions */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">124K</div>
                <div className="text-sm text-gray-500 mb-2">Impressions</div>
                <div className="text-sm font-semibold text-green-600">+89%</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
