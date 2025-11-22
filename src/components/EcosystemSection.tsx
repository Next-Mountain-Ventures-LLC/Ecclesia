import React, { useState, useEffect, useRef } from "react";

export default function EcosystemSection() {
  const [activeElement, setActiveElement] = useState("gather");
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Refs for animation
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Removed auto-rotation functionality as per client request
  useEffect(() => {
    // No auto-rotation, only manual interaction
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);

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
      title: "Mentorship & Discipleship",
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

  // Function to position elements evenly in a triangle around the center circle
  const getCirclePosition = (position: number) => {
    // Use triangular layout instead of a full circle
    // 0 = top, 1 = bottom right, 2 = bottom left
    const positions = [
      { x: 0, y: -120 },    // Top (gather)
      { x: 120, y: 60 },    // Bottom right (mentor)
      { x: -120, y: 60 }    // Bottom left (serve)
    ];
    
    const { x, y } = positions[position];
    
    return {
      transform: `translate(${x}px, ${y}px)`
    };
  };
  
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="text-center mb-16">
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
              className="relative h-[400px] mb-16"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Center circle with image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full bg-white shadow-lg z-20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/assets/logo_no_bg_small_nw_ac64265b.png')" }}></div>
                <div className="text-center z-10">
                  <h3 className="text-xl font-display font-medium text-primary-800">
                    Ecclesia
                  </h3>
                  <p className="text-xs text-primary-600 mt-1">Acts 2:42</p>
                </div>
                <div className="absolute inset-0 border-4 border-primary-100 rounded-full"></div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#E2E8F0" />
                  </marker>
                </defs>
                
                {/* Connecting lines with gradient */}
                <g className="transform translate-x-[500px] translate-y-[120px]">
                  {/* Line to Gather */}
                  <path 
                    d="M0,0 L-250,150" 
                    stroke="url(#gather-gradient)" 
                    strokeWidth="4" 
                    strokeDasharray={activeElement === 'gather' ? '0' : '5,5'}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                    style={{
                      opacity: isAnimating && activeElement !== 'gather' ? 0.3 : 1,
                      filter: activeElement === 'gather' ? 'drop-shadow(0 0 4px rgba(77, 147, 132, 0.5))' : 'none'
                    }}
                  />
                  
                  {/* Line to Mentor */}
                  <path 
                    d="M0,0 L0,150" 
                    stroke="url(#mentor-gradient)" 
                    strokeWidth="4" 
                    strokeDasharray={activeElement === 'mentor' ? '0' : '5,5'}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                    style={{
                      opacity: isAnimating && activeElement !== 'mentor' ? 0.3 : 1,
                      filter: activeElement === 'mentor' ? 'drop-shadow(0 0 4px rgba(230, 165, 76, 0.5))' : 'none'
                    }}
                  />
                  
                  {/* Line to Serve */}
                  <path 
                    d="M0,0 L250,150" 
                    stroke="url(#serve-gradient)" 
                    strokeWidth="4" 
                    strokeDasharray={activeElement === 'serve' ? '0' : '5,5'}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                    style={{
                      opacity: isAnimating && activeElement !== 'serve' ? 0.3 : 1,
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
              <div className="absolute top-[280px] left-0 right-0 grid grid-cols-3 gap-8">
                {/* Gather */}
                <div 
                  className={`transition-all duration-500 ${isAnimating && activeElement !== 'gather' ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
                >
                  <div 
                    className={`relative p-6 rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 h-full ${activeElement === 'gather' ? 'ring-2 ring-offset-4 ring-[#4D9384]' : ''}`}
                    onClick={() => setActiveElement('gather')}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#4D9384]"></div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-[#4D9384] bg-opacity-10 rounded-full flex items-center justify-center text-[#4D9384] mb-4">
                        {ecosystemElements.gather.icon}
                      </div>
                      <h3 className="text-xl font-display font-medium text-primary-800 mb-3">{ecosystemElements.gather.title}</h3>
                      <p className="text-primary-600 text-sm">
                        {activeElement === 'gather' ? ecosystemElements.gather.description.join(' ') : ecosystemElements.gather.description[0].substring(0, 120) + '...'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mentor */}
                <div 
                  className={`transition-all duration-500 ${isAnimating && activeElement !== 'mentor' ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
                >
                  <div 
                    className={`relative p-6 rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 h-full ${activeElement === 'mentor' ? 'ring-2 ring-offset-4 ring-[#E6A54C]' : ''}`}
                    onClick={() => setActiveElement('mentor')}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#E6A54C]"></div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-[#E6A54C] bg-opacity-10 rounded-full flex items-center justify-center text-[#E6A54C] mb-4">
                        {ecosystemElements.mentor.icon}
                      </div>
                      <h3 className="text-xl font-display font-medium text-primary-800 mb-3">{ecosystemElements.mentor.title}</h3>
                      <p className="text-primary-600 text-sm">
                        {activeElement === 'mentor' ? ecosystemElements.mentor.description.join(' ') : ecosystemElements.mentor.description[0].substring(0, 120) + '...'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Serve */}
                <div 
                  className={`transition-all duration-500 ${isAnimating && activeElement !== 'serve' ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
                >
                  <div 
                    className={`relative p-6 rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 h-full ${activeElement === 'serve' ? 'ring-2 ring-offset-4 ring-[#8E4D84]' : ''}`}
                    onClick={() => setActiveElement('serve')}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#8E4D84]"></div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-[#8E4D84] bg-opacity-10 rounded-full flex items-center justify-center text-[#8E4D84] mb-4">
                        {ecosystemElements.serve.icon}
                      </div>
                      <h3 className="text-xl font-display font-medium text-primary-800 mb-3">{ecosystemElements.serve.title}</h3>
                      <p className="text-primary-600 text-sm">
                        {activeElement === 'serve' ? ecosystemElements.serve.description.join(' ') : ecosystemElements.serve.description[0].substring(0, 120) + '...'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-8">
              {/* Central Image */}
              <div className="flex justify-center mb-2">
                <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/assets/logo_no_bg_small_nw_ac64265b.png')" }}></div>
                  <div className="text-center z-10">
                    <h3 className="text-lg font-display font-medium text-primary-800">
                      Ecclesia
                    </h3>
                    <p className="text-xs text-primary-600">Acts 2:42</p>
                  </div>
                </div>
              </div>
              
              {/* Elements */}
              <div className="space-y-4">
                {Object.entries(ecosystemElements).map(([key, element]) => {
                  const isActive = activeElement === key;
                  
                  return (
                    <div 
                      key={key}
                      onClick={() => setActiveElement(key)}
                      className={`p-4 rounded-xl bg-white shadow-sm transition-all duration-300 ${isActive ? 'ring-2 ring-offset-2 shadow-md' : ''}`}
                      style={{ borderColor: isActive ? element.color : 'transparent' }}
                    >
                      <div className="flex items-center">
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
                          <p className="text-sm text-primary-600 line-clamp-2">
                            {element.description[0].substring(0, 60)}...
                          </p>
                        </div>
                      </div>
                      
                      <div className={`mt-3 overflow-hidden transition-all duration-300 ${isActive ? 'max-h-96' : 'max-h-0'}`}>
                        <div className="pt-2 border-t border-gray-100 mt-2">
                          <p className="text-sm text-primary-600 mb-3">
                            {element.description.join(' ')}
                          </p>
                        </div>
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