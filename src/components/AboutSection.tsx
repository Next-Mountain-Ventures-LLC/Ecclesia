import React, { useState, useEffect } from "react";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [allImages, setAllImages] = useState<string[]>([]);
  // State to track if user is hovering
  const [isHovering, setIsHovering] = useState(false);

  // Core values for the interactive section
  const values = [
    {
      key: "community",
      title: "Community",
      description: "We believe the church is not a building but a community of believers growing together in Christ.",
      image: "/assets/1763402076513-3_nw_9b9eead9.jpg"
    },
    {
      key: "fellowship",
      title: "Fellowship",
      description: "Authentic relationships form as we share meals, discussions, and life together.",
      image: "/assets/1763402076513-22_nw_952a4e27.jpg"
    },
    {
      key: "scripture",
      title: "Scripture",
      description: "We study God's Word together, applying biblical principles to everyday life.",
      image: "/assets/1763402076513-44_nw_e3d25284.jpg"
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
      image: "/assets/1763402076513-20_nw_b4ff1a4a.jpg"
    }
  ];

  // Comprehensive list of all gallery images for the background mosaic
  const galleryImages = [
    "/assets/family_gathering_nw_f63ba1cb.jpg",
    "/assets/prayer_circle_nw_96b2ff2b.jpg", 
    "/assets/sunset_gathering_nw_541bf1dd.jpg",
    "/assets/baptism_nw_f24fce58.jpg",
    "/assets/1763402076513-10_nw_96329f18.jpg",
    "/assets/1763402076513-11_nw_c0a95c81.jpg",
    "/assets/1763402076513-12_nw_c0840049.jpg",
    "/assets/1763402076513-13_nw_e65b03b1.jpg",
    "/assets/1763402076513-16_nw_3f0a5106.jpg",
    "/assets/1763402076513-17_nw_a842057f.jpg",
    "/assets/1763402076513-18_nw_c03fb031.jpg",
    "/assets/1763402076513-20_nw_b4ff1a4a.jpg",
    "/assets/1763402076513-21_nw_29328aa6.jpg",
    "/assets/1763402076513-22_nw_952a4e27.jpg",
    "/assets/1763402076513-34_nw_ec1bc736.jpg",
    "/assets/1763402076513-36_nw_0f8529a4.jpg",
    "/assets/1763402076513-37_nw_65b81d79.jpg",
    "/assets/1763402076513-43_nw_9f4b1f4b.jpg",
    "/assets/1763402076513-45_nw_b079c0f0.jpg",
    "/assets/1763402076513-48_nw_a493105e.jpg"
  ];

  // Initialize the grid with all available images and fill
  // any remaining cells by repeating from the start of the array
  useEffect(() => {
    // Total cells in our grid
    const totalCells = 36; // 6x6 grid
    let expandedImages: string[] = [];
    
    // Fill the grid with images, repeating from start if needed
    for (let i = 0; i < totalCells; i++) {
      expandedImages.push(galleryImages[i % galleryImages.length]);
    }
    
    // Shuffle the images to create a more random, natural-looking mosaic
    expandedImages = shuffleArray([...expandedImages]);
    
    setAllImages(expandedImages);
  }, []);

  // Helper function to shuffle an array
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Auto-rotate through values when not hovering
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    // Only start the auto-rotation when not hovering
    if (!isHovering) {
      interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % values.length);
          setIsTransitioning(false);
        }, 500);
      }, 6000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [values.length, isHovering]);

  // Handle clicking or hovering on a value card
  const handleValueClick = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };
  
  // Handle hovering on a value card
  const handleValueHover = (index: number) => {
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
      <div className="hidden">
        {/* Preload all images for smoother transitions */}
        {values.map(value => (
          <img key={`preload-${value.key}`} src={value.image} alt="" className="hidden" />
        ))}
      </div>
      {/* Background image mosaic - CSS Grid layout for clean, even spacing */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {/* Mobile grid - 3 columns */}
        <div className="block sm:hidden w-full h-full">
          <div className="grid grid-cols-3 auto-rows-fr h-full w-full">
            {allImages.slice(0, 18).map((img, idx) => (
              <div key={`mobile-${idx}`} className="relative overflow-hidden p-1 aspect-square">
                <div
                  className="w-full h-full bg-cover bg-center rounded"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet grid - 4 columns */}
        <div className="hidden sm:block md:hidden w-full h-full">
          <div className="grid grid-cols-4 auto-rows-fr h-full w-full">
            {allImages.slice(0, 24).map((img, idx) => (
              <div key={`tablet-${idx}`} className="relative overflow-hidden p-1 aspect-square">
                <div
                  className="w-full h-full bg-cover bg-center rounded"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop grid - 6 columns */}
        <div className="hidden md:block w-full h-full">
          <div className="grid grid-cols-6 auto-rows-fr h-full w-full">
            {allImages.map((img, idx) => (
              <div key={`desktop-${idx}`} className="relative overflow-hidden p-1 aspect-square">
                <div
                  className="w-full h-full bg-cover bg-center rounded"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
              </div>
            ))}
          </div>
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
                The vision of Ecclesia is to reach out to people and show them the love of Jesus. We create a church that follows the biblical pattern through gathering weekly, mentoring through smaller groups, and serving our community together.
              </p>
            </div>
          </div>

          {/* Interactive value cards */}
          <div>
            <div className="relative">
              {/* Main featured value image */}
              <div 
                className="relative rounded-xl overflow-hidden mb-6 shadow-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`aspect-video w-full bg-cover transition-opacity duration-500 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ 
                    backgroundImage: `url('${values[activeIndex].image}')`,
                    backgroundPosition: values[activeIndex].key === "prayer" ? "center top -75px" : "center"
                  }}
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
                    onMouseEnter={() => { setIsHovering(true); handleValueHover(idx); }}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                      idx === activeIndex 
                        ? "ring-2 ring-primary-500 ring-offset-2" 
                        : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className="aspect-square">
                      <div
                        className="w-full h-full bg-cover"
                        style={{ 
                          backgroundImage: `url('${value.image}')`,
                          backgroundPosition: value.key === "prayer" ? "center top -75px" : "center"
                        }}
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