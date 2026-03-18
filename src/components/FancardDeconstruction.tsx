import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import { allCardImages, cardRotations } from "./FancardBackground";
import layer1Src from "../assets/layer1-stadium.png";
import layer2Src from "../assets/layer2-fan.png";
import layer3Src from "../assets/layer3-frame.png";

gsap.registerPlugin(ScrollTrigger);

export function FancardDeconstruction({ onBookDemo }: { onBookDemo: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLImageElement>(null);
  const layer2Ref = useRef<HTMLImageElement>(null);
  const layer3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Exploded state: layers spread horizontally with Y-axis rotation (3/4 view)
      const explodeProps1 = { x: "110%", rotateY: -35, ease: "power2.inOut" };
      const explodeProps2 = { x: "0%", rotateY: -35, ease: "power2.inOut" };
      const explodeProps3 = { x: "-110%", rotateY: -35, ease: "power2.inOut" };

      // First half: deconstruct
      tl.to(layer1Ref.current, explodeProps1, 0);
      tl.to(layer2Ref.current, explodeProps2, 0);
      tl.to(layer3Ref.current, explodeProps3, 0);

      // Second half: reconstruct back to stacked
      tl.to(layer1Ref.current, { x: 0, rotateY: 0, ease: "power2.inOut" }, 0.5);
      tl.to(layer2Ref.current, { x: 0, rotateY: 0, ease: "power2.inOut" }, 0.5);
      tl.to(layer3Ref.current, { x: 0, rotateY: 0, ease: "power2.inOut" }, 0.5);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white snap-start"
      style={{ height: "300vh" }}
    >
      {/* Sticky viewport */}
      <div
        className="sticky top-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          height: "100vh",
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Fancard grid background */}
        <div className="absolute inset-0 z-0">
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 p-2"
            style={{
              width: "110%",
              marginLeft: "-5%",
            }}
          >
            {allCardImages.map((src, i) => (
              <div
                key={i}
                className="rounded-xl sm:rounded-2xl overflow-hidden"
                style={{ rotate: `${cardRotations[i]}deg` }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-auto block rounded-xl sm:rounded-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(255,255,255,0.9)" }} />

        {/* 3D card container */}
        <div
          className="relative z-[2]"
          style={{
            width: "min(60vw, 340px)",
            aspectRatio: "3 / 4",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Layer 1 — Stadium background (back) */}
          <img
            ref={layer1Ref}
            src={layer1Src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            style={{ zIndex: 1, willChange: "transform" }}
          />

          {/* Layer 2 — Fan photo (middle / anchor) */}
          <img
            ref={layer2Ref}
            src={layer2Src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            style={{ zIndex: 2, willChange: "transform" }}
          />

          {/* Layer 3 — Card frame (front) */}
          <img
            ref={layer3Ref}
            src={layer3Src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            style={{ zIndex: 3, willChange: "transform" }}
          />
        </div>

        {/* CTA Text */}
        <div className="text-center mt-8 sm:mt-12 z-[2] relative">
          <h2 className="text-gray-900 mb-8 sm:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight px-4">
            Start Turning Moments Into
            <br />
            <span className="bg-gradient-to-r from-[#6FE866] to-[#8FF888] bg-clip-text text-transparent">
              Measurable Value.
            </span>
          </h2>

          <p className="text-gray-600 text-xl sm:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join leading sports organizations creating unforgettable experiences that drive loyalty and revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <Button
              size="lg"
              className="bg-[#6FE866] hover:bg-[#5CD85C] text-black border-0 px-10 py-7 text-lg sm:text-xl font-semibold group transition-all duration-300"
              onClick={onBookDemo}
            >
              Book a Demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
