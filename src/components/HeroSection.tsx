import React from "react";
import { buttonVariants } from "@/components/ui/button";
import woodTexture from "@/assets/logo_wood_bg_nw_1efb2b0b.jpg";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-primary-50">
      {/* Wood texture overlay with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('${woodTexture}')` }}
      ></div>
      
      <div className="container relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mobile top image and callout */}
          <div className="lg:hidden mb-4 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/1763402076513-53_nw_2b7647e8.jpg')" }}
              ></div>
            </div>
            
            {/* Greek word callout for mobile */}
            <div className="bg-white py-3 px-5 rounded-xl shadow-lg mx-auto max-w-[250px] -mt-12 mb-6 relative z-10">
              <div className="font-display italic text-xl text-primary-800 mb-1 text-center">ἐκκλησία</div>
              <div className="text-sm text-muted-foreground text-center">
                Ekklesia (Greek): "an assembly" or "a gathering of called-out ones"
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="inline-block rounded-full px-4 py-1.5 bg-primary-100 text-primary-700 font-medium text-sm mb-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Tulsa, Oklahoma
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-primary-800 mb-6 leading-tight">
              {/* Desktop order */}
              <div className="hidden sm:block">
                <span className="block text-accent-600">Following Jesus</span>
                <span className="block">Together</span>
              </div>

              {/* Mobile order */}
              <div className="sm:hidden">
                {/* Correct text order */}
                <div>
                  <span className="block text-accent-600">Following Jesus</span>
                  <span className="block">Together</span>
                </div>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-700 mb-8 max-w-lg">
              Ecclesia is a community of believers gathering in homes throughout Tulsa to experience authentic community, intentional discipleship, and transformative service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#gatherings"
                className={buttonVariants({
                  variant: 'default',
                  size: 'lg',
                  className: 'rounded-full px-8'
                })}
              >
                Join a Gathering
              </a>
              <a
                href="#about"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'rounded-full px-8 border-primary-300 text-primary-700 hover:text-primary-800 hover:bg-primary-100'
                })}
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative lg:mt-0 mt-6 hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/1763402076513-53_nw_2b7647e8.jpg')" }}
              ></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 bottom-6 -left-6 w-24 h-24 bg-primary-200 rounded-2xl"></div>
            <div className="absolute -z-10 top-6 -right-6 w-32 h-32 bg-accent-200 rounded-2xl"></div>
            
            {/* Greek word callout */}
            <div className="absolute -bottom-6 -right-6 bg-white py-4 px-6 rounded-xl shadow-lg max-w-[220px] z-20">
              <div className="font-display italic text-xl text-primary-800 mb-1">ἐκκλησία</div>
              <div className="text-sm text-muted-foreground">
                Ekklesia (Greek): "an assembly" or "a gathering of called-out ones"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
