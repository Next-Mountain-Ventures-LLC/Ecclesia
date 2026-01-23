import React, { useState, useEffect, useRef } from "react";

export default function EcosystemSection() {
  const [activeElement, setActiveElement] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFlip = (cardKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardKey)) {
        newSet.delete(cardKey);
      } else {
        newSet.add(cardKey);
      }
      return newSet;
    });
  };
  
  // No animation or auto-rotation

  const ecosystemElements = {
    gather: {
      title: "Gathering Together",
      description: [
        "People in Ecclesia gather together weekly to grow together. We do this around the table because we believe that food not only brings people together but is biblical (Acts 2:46, Luke 22:14-20, Acts 20:7).",
        "We share food, brainstorm ways we can help those around us, and enjoy each other's company. Currently, we meet every Friday night in Midtown and are constantly looking for additional opportunities to hang out."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      image: "/assets/family_gathering_nw_f63ba1cb.jpg",
      linkText: "Learn more about our gatherings",
      linkHref: "/who-we-are",
      position: 0,
      color: "#4D9384"
    },
    mentor: {
      title: "Coaching & Discipleship",
      description: [
        "Each gathering creates an environment for mentorship through micro-bands of people (no larger than six) that meet together regularly. These meetings are designed to help people grow deeper in their relationship with Jesus and the power of the Holy Spirit.",
        "Our mentorship meetings include prayer, confession, Bible study, mutual support, and fellowship—creating space for authentic spiritual growth and community."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="m9 17 3-3 3 3" />
        </svg>
      ),
      image: "/assets/prayer_circle_nw_96b2ff2b.jpg",
      linkText: "Learn more about discipleship",
      linkHref: "/who-we-are",
      position: 1,
      color: "#E6A54C"
    },
    serve: {
      title: "Serving Our Community",
      description: [
        "We strive to serve as Jesus served. We encourage everyone to identify needs in the community and invite their friends and neighbors along for the journey. We have multiple ways to serve every month and are continually looking for more opportunities.",
        "You do not need to attend a gathering to serve with us. If you would like to serve alongside us, please reach out and let us know how to get plugged in."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7 11 2-2-2-2" />
          <path d="M11 13h4" />
          <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
        </svg>
      ),
      image: "/assets/baptism_nw_f24fce58.jpg",
      linkText: "Contact us to serve together",
      linkHref: "/contact",
      position: 2,
      color: "#8E4D84"
    }
  };

  // Get the next element in the cycle
  const getNextElement = (current: string): string => {
    if (current === "gather") return "mentor";
    if (current === "mentor") return "serve";
    return "gather";
  };

  // Get the previous element in the cycle
  const getPrevElement = (current: string): string => {
    if (current === "gather") return "serve";
    if (current === "mentor") return "gather";
    return "mentor";
  };

  // Color palette based on the site's color scheme
  const colorClasses = {
    active: {
      background: "bg-primary-700", 
      text: "text-white",
      ring: "ring-primary-300",
      shadow: "shadow-md shadow-primary-300/30",
    },
    inactive: {
      background: "bg-primary-100",
      text: "text-primary-600",
      hover: "hover:bg-primary-200 hover:text-primary-700",
      shadow: "shadow-sm"
    },
    accent: {
      background: "bg-accent-500", 
      text: "text-white",
      ring: "ring-accent-200",
    }
  };

  // Function to get the proper y offset for the dotted lines
  const getLineYOffset = (position: number) => {
    return 120; // Use consistent distance for all lines
  };
  
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-primary-50 mb-24">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-800 mb-4">
            Our Ecosystem
          </h2>
          <p className="text-primary-700 max-w-2xl mx-auto">
            The vision of Ecclesia, Greek for "gathering," follows the precepts outlined in 
            Acts 2:42. Our ecosystem is built on three foundational elements that guide 
            everything we do.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Visual Ecosystem Diagram */}
            <div 
              className="relative h-[320px]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* No center circle */}

              {/* Connection lines from intro text to each box */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#E2E8F0" />
                  </marker>
                </defs>
                
                {/* Connecting lines with gradient - from top center to each box */}
                <g className="transform translate-x-[500px] translate-y-[50px]">
                  {/* Line to Gather (left) */}
                  <path 
                    d="M0,20 L-250,150" 
                    stroke="url(#gather-gradient)" 
                    strokeWidth="4" 
                    strokeDasharray={activeElement === 'gather' ? '0' : '5,5'}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                    style={{
                      opacity: activeElement === 'gather' ? 1 : 0.7,
                      filter: activeElement === 'gather' ? 'drop-shadow(0 0 4px rgba(77, 147, 132, 0.5))' : 'none'
                    }}
                  />
                  
                  {/* Line to Mentor (center) */}
                  <path 
                    d="M0,20 L0,150" 
                    stroke="#E6A54C" 
                    strokeWidth="4" 
                    strokeDasharray={activeElement === 'mentor' ? '0' : '5,5'}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                    style={{
                      opacity: activeElement === 'mentor' ? 1 : 0.7,
                      filter: activeElement === 'mentor' ? 'drop-shadow(0 0 4px rgba(230, 165, 76, 0.5))' : 'none'
                    }}
                  />
                  
                  {/* Line to Serve (right) */}
                  <path 
                    d="M0,20 L250,150" 
                    stroke="url(#serve-gradient)" 
                    strokeWidth="4" 
                    strokeDasharray={activeElement === 'serve' ? '0' : '5,5'}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                    style={{
                      opacity: activeElement === 'serve' ? 1 : 0.7,
                      filter: activeElement === 'serve' ? 'drop-shadow(0 0 4px rgba(142, 77, 132, 0.5))' : 'none'
                    }}
                  />
                </g>
                
                {/* Gradient definitions */}
                <linearGradient id="gather-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4D9384" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#4D9384" stopOpacity="1" />
                </linearGradient>
                
                <linearGradient id="mentor-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E6A54C" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#E6A54C" stopOpacity="1" />
                </linearGradient>
                
                <linearGradient id="serve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8E4D84" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8E4D84" stopOpacity="1" />
                </linearGradient>
              </svg>

              {/* Ecosystem elements */}
              <div className="absolute top-[150px] left-0 right-0 grid grid-cols-3 gap-8">
                {/* Gather */}
                <div
                  className="transition-all duration-300 hover:scale-105"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    onClick={(e) => toggleFlip('gather', e)}
                    onMouseEnter={() => !flippedCards.has('gather') && setActiveElement('gather')}
                    onMouseLeave={() => !flippedCards.has('gather') && setActiveElement('')}
                    className="relative p-6 rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 h-full hover:ring-2 hover:ring-offset-2 hover:ring-[#4D9384] cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCards.has('gather') ? "rotateY(180deg)" : "rotateY(0deg)",
                      transitionDuration: "0.6s"
                    } as React.CSSProperties}
                  >
                    {/* Front */}
                    {!flippedCards.has('gather') && (
                      <div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#4D9384]"></div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-[#4D9384] bg-opacity-10 rounded-full flex items-center justify-center text-[#4D9384] mb-4">
                            {ecosystemElements.gather.icon}
                          </div>
                          <h3 className="text-xl font-display font-medium text-primary-800 mb-3">{ecosystemElements.gather.title}</h3>
                          <p className="text-primary-600 text-sm">
                            {ecosystemElements.gather.description.join(' ')}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Back */}
                    {flippedCards.has('gather') && (
                      <div className="flex flex-col items-center justify-center h-full bg-white" style={{ transform: "rotateY(180deg)" }}>
                        <p className="text-primary-800 font-medium mb-4">Want to know more?</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip('gather', e);
                            setTimeout(() => scrollToContact(), 300);
                          }}
                          className="px-6 py-3 bg-[#4D9384] text-white rounded-full font-medium hover:bg-[#4D9384]/90 transition-colors"
                        >
                          Get in touch!
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mentor */}
                <div
                  className="transition-all duration-300 hover:scale-105"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    onClick={(e) => toggleFlip('mentor', e)}
                    onMouseEnter={() => !flippedCards.has('mentor') && setActiveElement('mentor')}
                    onMouseLeave={() => !flippedCards.has('mentor') && setActiveElement('')}
                    className="relative p-6 rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 h-full hover:ring-2 hover:ring-offset-2 hover:ring-[#E6A54C] cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCards.has('mentor') ? "rotateY(180deg)" : "rotateY(0deg)",
                      transitionDuration: "0.6s"
                    } as React.CSSProperties}
                  >
                    {/* Front */}
                    {!flippedCards.has('mentor') && (
                      <div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#E6A54C]"></div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-[#E6A54C] bg-opacity-10 rounded-full flex items-center justify-center text-[#E6A54C] mb-4">
                            {ecosystemElements.mentor.icon}
                          </div>
                          <h3 className="text-xl font-display font-medium text-primary-800 mb-3">{ecosystemElements.mentor.title}</h3>
                          <p className="text-primary-600 text-sm">
                            {ecosystemElements.mentor.description.join(' ')}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Back */}
                    {flippedCards.has('mentor') && (
                      <div className="flex flex-col items-center justify-center h-full bg-white" style={{ transform: "rotateY(180deg)" }}>
                        <p className="text-primary-800 font-medium mb-4">Want to know more?</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip('mentor', e);
                            setTimeout(() => scrollToContact(), 300);
                          }}
                          className="px-6 py-3 bg-[#E6A54C] text-white rounded-full font-medium hover:bg-[#E6A54C]/90 transition-colors"
                        >
                          Get in touch!
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Serve */}
                <div
                  className="transition-all duration-300 hover:scale-105"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    onClick={(e) => toggleFlip('serve', e)}
                    onMouseEnter={() => !flippedCards.has('serve') && setActiveElement('serve')}
                    onMouseLeave={() => !flippedCards.has('serve') && setActiveElement('')}
                    className="relative p-6 rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 h-full hover:ring-2 hover:ring-offset-2 hover:ring-[#8E4D84] cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCards.has('serve') ? "rotateY(180deg)" : "rotateY(0deg)",
                      transitionDuration: "0.6s"
                    } as React.CSSProperties}
                  >
                    {/* Front */}
                    {!flippedCards.has('serve') && (
                      <div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#8E4D84]"></div>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-[#8E4D84] bg-opacity-10 rounded-full flex items-center justify-center text-[#8E4D84] mb-4">
                            {ecosystemElements.serve.icon}
                          </div>
                          <h3 className="text-xl font-display font-medium text-primary-800 mb-3">{ecosystemElements.serve.title}</h3>
                          <p className="text-primary-600 text-sm">
                            {ecosystemElements.serve.description.join(' ')}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Back */}
                    {flippedCards.has('serve') && (
                      <div className="flex flex-col items-center justify-center h-full bg-white" style={{ transform: "rotateY(180deg)" }}>
                        <p className="text-primary-800 font-medium mb-4">Want to know more?</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip('serve', e);
                            setTimeout(() => scrollToContact(), 300);
                          }}
                          className="px-6 py-3 bg-[#8E4D84] text-white rounded-full font-medium hover:bg-[#8E4D84]/90 transition-colors"
                        >
                          Get in touch!
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-8">
              {/* Elements */}
              <div className="space-y-6">
                {Object.entries(ecosystemElements).map(([key, element]) => {
                  const isFlipped = flippedCards.has(key);
                  return (
                    <div
                      key={key}
                      onClick={(e) => toggleFlip(key, e)}
                      className="p-5 rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg border-t-4 cursor-pointer"
                      style={{
                        borderTopColor: element.color,
                        perspective: "1000px"
                      }}
                    >
                      <div
                        style={{
                          transformStyle: "preserve-3d",
                          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                          transitionDuration: "0.6s"
                        } as React.CSSProperties}
                      >
                        {/* Front */}
                        {!isFlipped && (
                          <div>
                            <div className="flex items-center mb-3">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                                style={{
                                  backgroundColor: `${element.color}20`,
                                  color: element.color
                                }}
                              >
                                {element.icon}
                              </div>
                              <div>
                                <h4 className="font-medium text-primary-800">{element.title}</h4>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-primary-600">
                                {element.description.join(' ')}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Back */}
                        {isFlipped && (
                          <div
                            className="flex flex-col items-center justify-center min-h-[150px] bg-white"
                            style={{ transform: "rotateY(180deg)" }}
                          >
                            <p className="text-primary-800 font-medium mb-4">Want to know more?</p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFlip(key, e);
                                setTimeout(() => scrollToContact(), 300);
                              }}
                              className="px-6 py-3 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
                              style={{ backgroundColor: element.color }}
                            >
                              Get in touch!
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
