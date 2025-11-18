import React, { useState, useEffect } from "react";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const values = [
    {
      key: "community",
      title: "Community",
      description: "We believe the church is not a building but a community of believers growing together in Christ.",
      image: "/assets/1763402076513-43_nw_9f4b1f4b.jpg"
    },
    {
      key: "fellowship",
      title: "Fellowship",
      description: "Authentic relationships form as we share meals, discussions, and life together.",
      image: "/assets/family_gathering_nw_f63ba1cb.jpg"
    },
    {
      key: "scripture",
      title: "Scripture",
      description: "We study God's Word together, applying biblical principles to everyday life.",
      image: "/assets/1763402076513-11_nw_c0a95c81.jpg"
    },
    {
      key: "prayer",
      title: "Prayer",
      description: "Prayer connects us to God and each other, bringing spiritual transformation.",
      image: "/assets/prayer_circle_nw_96b2ff2b.jpg"
    },
    {
      key: "service",
      title: "Service",
      description: "Following Jesus' example, we serve one another and our community with love.",
      image: "/assets/1763402076513-21_nw_29328aa6.jpg"
    }
  ];

  // Thumbnail gallery images - more than the values above for visual richness
  const galleryImages = [
    "/assets/family_gathering_nw_f63ba1cb.jpg",
    "/assets/1763402076513-20_nw_b4ff1a4a.jpg",
    "/assets/1763402076513-10_nw_96329f18.jpg",
    "/assets/1763402076513-12_nw_c0840049.jpg",
    "/assets/1763402076513-13_nw_e65b03b1.jpg",
    "/assets/1763402076513-16_nw_3f0a5106.jpg",
    "/assets/1763402076513-21_nw_29328aa6.jpg",
    "/assets/1763402076513-22_nw_952a4e27.jpg",
    "/assets/1763402076513-34_nw_ec1bc736.jpg",
    "/assets/1763402076513-37_nw_65b81d79.jpg"
  ];

  // Auto-rotate through values
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % values.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [values.length]);

  // Handle clicking on a value card
  const handleValueClick = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div id="about" className="relative w-full py-20 overflow-hidden" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.97), rgba(255,255,255,0.97))' }}>
      {/* Background image collage - full coverage with repetition */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {/* First layer - larger grid with no gaps */}
        <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-3 h-full w-full absolute inset-0">
          {galleryImages.slice(0, 18).map((img, idx) => (
            <div key={`main-${idx}`} className="w-full h-full overflow-hidden p-px">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${galleryImages[idx % galleryImages.length]}')` }}
              ></div>
            </div>
          ))}
        </div>
        
        {/* Second layer - offset grid for complete coverage */}
        <div className="grid grid-cols-4 md:grid-cols-5 grid-rows-4 h-full w-full absolute inset-0 -translate-x-1/4 translate-y-1/4">
          {galleryImages.slice(0, 20).map((img, idx) => (
            <div key={`offset-${idx}`} className="w-full h-full overflow-hidden p-px">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${galleryImages[(idx + 10) % galleryImages.length]}')` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-800 mb-6">
              <span className="relative inline-block">
                What is
                <svg 
                  width="100%" 
                  height="6" 
                  viewBox="0 0 100 6" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-1 left-0 w-full opacity-70"
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M1 3C26.3333 1.66667 59 0.2 99 5" 
                    stroke="#4D9384" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Ecclesia?
            </h2>
            
            <div className="space-y-4 text-primary-700">
              <p>
                The Bible says that we don't <em>go</em> to church, but that we <em>are</em> the church (Ephesians 2:21-22). 
                Ecclesia is a community of believers gathering together in homes, coffee shops, 
                parks, and other locations throughout Tulsa.
              </p>
              <p>
                We follow the model found in Acts 2:42-47, creating spaces for people to share 
                meals, study scripture, pray together, and build authentic relationships. 
                Our gatherings typically have fewer than 30 people, allowing for greater 
                intimacy and interdependence between friends.
              </p>
              <p>
                When a house church grows too large to comfortably gather in a home, we multiply 
                by division—forming new gatherings while maintaining our connections as one 
                body of believers.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-display font-medium text-primary-800">Our Vision</h3>
              <p className="text-primary-700">
                The vision of Ecclesia, Greek for "gathering," is to reach out to people and 
                show them the love of Jesus. We create a church that follows the biblical 
                pattern through gathering weekly, mentoring through smaller groups, and serving 
                our community together.
              </p>
            </div>
          </div>

          {/* Interactive value cards */}
          <div>
            <div className="relative">
              {/* Main featured value image */}
              <div className="relative rounded-xl overflow-hidden mb-6 shadow-lg">
                <div
                  className={`aspect-video w-full bg-cover bg-center transition-opacity duration-500 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ backgroundImage: `url('${values[activeIndex].image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-display text-white mb-2">{values[activeIndex].title}</h3>
                  <p className="text-white/90 text-sm md:text-base">{values[activeIndex].description}</p>
                </div>
              </div>

              {/* Value tiles */}
              <div className="grid grid-cols-5 gap-2">
                {values.map((value, idx) => (
                  <button
                    key={value.key}
                    onClick={() => handleValueClick(idx)}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                      idx === activeIndex 
                        ? "ring-2 ring-primary-500 ring-offset-2" 
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className="aspect-square">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${value.image}')` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-2">
                        <span className="text-white text-xs font-medium">{value.title}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}