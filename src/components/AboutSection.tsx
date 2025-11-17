import React, { useState, useEffect } from "react";

export default function AboutSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const galleryImages = [
    "/assets/family_gathering_nw_f63ba1cb.jpg",
    "/assets/1763402076513-20_nw_b4ff1a4a.jpg",
    "/assets/1763402076513-10_nw_96329f18.jpg",
    "/assets/1763402076513-12_nw_c0840049.jpg",
    "/assets/1763402076513-13_nw_e65b03b1.jpg",
    "/assets/1763402076513-16_nw_3f0a5106.jpg",
    "/assets/1763402076513-18_nw_c03fb031.jpg",
    "/assets/1763402076513-29_nw_72ed5df2.jpg"
  ];

  // Auto-rotate through images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovering) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
          setIsTransitioning(false);
        }, 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length, hovering]);
  
  // We're no longer animating all thumbnails, so we don't need this global animation
  // Instead, we'll handle hover effects at the individual thumbnail level

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width;
    const y = (e.clientY - bounds.top) / bounds.height;
    setMousePosition({ x, y });
  };

  // Helper function for dynamic positioning of thumbnails
  const getRandomizedPosition = (index: number, total: number) => {
    // Generate a more sporadic, clustered layout that favors the right side
    // Using a combination of randomness and pattern to create a trail-like effect
    
    // Base positions are now asymmetric with preference to bottom-right quadrant
    const positions = [
      { x: 40, y: -10 },  // top-right
      { x: 60, y: 10 },   // right
      { x: 70, y: 30 },   // bottom-right
      { x: 50, y: 50 },   // bottom
      { x: 20, y: 40 },   // bottom-left
      { x: -10, y: 20 },  // left
      { x: 10, y: -20 },  // top-left
    ];
    
    // Get base position from our designed pattern
    const posIndex = index % positions.length;
    const { x, y } = positions[posIndex];
    
    // Add slight randomization to make it feel more natural
    // This is just a small offset so positions are still recognizable
    const randomOffset = 10;
    const randomX = (Math.random() - 0.5) * randomOffset;
    const randomY = (Math.random() - 0.5) * randomOffset;
    
    return { x: x + randomX, y: y + randomY };
  };

  return (
    <div className="w-full py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div 
              className="relative w-full aspect-square max-w-lg mx-auto"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Main circular frame */}
              <div className="absolute inset-[10%] rounded-full overflow-hidden border-4 border-primary-100 shadow-2xl z-10">
                <div 
                  className={`w-full h-full bg-cover bg-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                  style={{ backgroundImage: `url('${galleryImages[activeImageIndex]}')` }}
                ></div>
              </div>
              
              {/* Floating thumbnails */}
              <div className="absolute inset-0 m-auto w-full h-full">
                {galleryImages.map((img, idx) => {
                  if (idx === activeImageIndex) return null;
                  
                  const { x, y } = getRandomizedPosition(idx, galleryImages.length - 1);
                  // Position is now more static, with the center of our layout to the right of the main circle
                  const centerX = 60; // Shifted right from center
                  const centerY = 50; // Vertically centered
                  const posX = centerX + x;
                  const posY = centerY + y;
                  
                  // We'll store the original position for hover effects
                  const originalPos = { x: posX, y: posY };
                  
                  return (
                    <div
                      key={idx}
                      className="absolute w-14 h-14 rounded-full overflow-hidden cursor-pointer border-2 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125"
                      style={{ 
                        left: `${posX}%`, 
                        top: `${posY}%`,
                        zIndex: idx
                      }}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setActiveImageIndex(idx);
                          setIsTransitioning(false);
                        }, 300);
                      }}
                      onMouseEnter={() => {
                        // Change the main image on hover
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setActiveImageIndex(idx);
                          setIsTransitioning(false);
                        }, 300);
                      }}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${img}')` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Background gradient shape */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-2/3 h-2/3 bg-gradient-to-br from-secondary-200 to-secondary-100 rounded-full opacity-70"></div>
              <div className="absolute -z-10 -top-6 -right-6 w-1/2 h-1/2 bg-gradient-to-br from-accent-200 to-accent-100 rounded-full opacity-50"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
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

            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {['community', 'fellowship', 'authenticity', 'relationship', 'scripture', 'prayer', 'service'].map((tag) => (
                  <span key={tag} className="inline-block bg-primary-50 rounded-full px-3 py-1 text-sm font-medium text-primary-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}