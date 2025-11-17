import React, { useState, useEffect } from "react";

export default function EcosystemSection() {
  const [activeElement, setActiveElement] = useState("gather");
  const [isHovering, setIsHovering] = useState(false);
  
  // Auto-rotate through elements when not hovering
  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setActiveElement(prev => {
          if (prev === "gather") return "mentor";
          if (prev === "mentor") return "serve";
          return "gather";
        });
      }, 6000);
      
      return () => clearInterval(timer);
    }
  }, [isHovering]);

  const ecosystemElements = {
    gather: {
      title: "Gathering Together",
      description: [
        "People in Ecclesia gather together weekly to grow together. We do this around the table because we believe that food not only brings people together but is biblical (Acts 2:46, Luke 22:14-20, Acts 20:7).",
        "We share food, brainstorm ways we can help those around us, and enjoy each other's company. Currently, we meet every Friday night in Midtown and are constantly looking for additional opportunities to hang out."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      image: "/assets/family_gathering_nw_f63ba1cb.jpg",
      linkText: "Learn more about our gatherings",
      linkHref: "/who-we-are",
      position: 0
    },
    mentor: {
      title: "Mentorship & Discipleship",
      description: [
        "Each gathering creates an environment for mentorship through micro-bands of people (no larger than six) that meet together regularly. These meetings are designed to help people grow deeper in their relationship with Jesus and the power of the Holy Spirit.",
        "Our mentorship meetings include prayer, confession, Bible study, mutual support, and fellowship—creating space for authentic spiritual growth and community."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 19a6 6 0 0 0-12 0" />
          <circle cx="8" cy="9" r="4" />
          <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
        </svg>
      ),
      image: "/assets/prayer_circle_nw_96b2ff2b.jpg",
      linkText: "Learn more about discipleship",
      linkHref: "/who-we-are",
      position: 1
    },
    serve: {
      title: "Serving Our Community",
      description: [
        "We strive to serve as Jesus served. We encourage everyone to identify needs in the community and invite their friends and neighbors along for the journey. We have multiple ways to serve every month and are continually looking for more opportunities.",
        "You do not need to attend a gathering to serve with us. If you would like to serve alongside us, please reach out and let us know how to get plugged in."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11.5V14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.5" />
          <path d="M12 16v4" />
          <path d="M10 2v7.5" />
          <path d="M14 2v7.5" />
          <path d="M2 11.5h20" />
          <path d="M21.12 6.4l.67.67a1 1 0 0 1 0 1.41l-.67.67M2.88 6.4l-.67.67a1 1 0 0 0 0 1.41l.67.67" />
        </svg>
      ),
      image: "/assets/baptism_nw_f24fce58.jpg",
      linkText: "Contact us to serve together",
      linkHref: "/contact",
      position: 2
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

  // Function to render the circular indicator with the proper angle
  const getCirclePosition = (position: number) => {
    // Calculate angle based on position (0, 1, 2)
    const angle = position * (2 * Math.PI / 3) - Math.PI / 2; // Start at top position
    const radius = 140; // Distance from center
    
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`
    };
  };
  
  return (
    <section className="w-full py-24 bg-primary-50">
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
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-center">
            {/* Circular Navigation */}
            <div className="relative w-full max-w-3xl aspect-square mx-auto mb-12"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Center circle with active content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white rounded-full shadow-lg flex flex-col items-center justify-center p-4 z-20">
                <div className="mb-4 w-16 h-16 p-3 rounded-full bg-primary-100 text-primary-600">
                  {ecosystemElements[activeElement].icon}
                </div>
                <h3 className="text-xl font-display font-medium text-primary-800 mb-2 text-center">
                  {ecosystemElements[activeElement].title}
                </h3>
                <p className="text-primary-600 text-sm text-center line-clamp-3 mb-2">
                  {ecosystemElements[activeElement].description[0].substring(0, 100)}...
                </p>
                <a 
                  href={ecosystemElements[activeElement].linkHref} 
                  className="inline-flex items-center text-accent-600 text-sm font-medium hover:text-accent-700 transition-colors mt-2"
                >
                  {ecosystemElements[activeElement].linkText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* Orbital elements */}
              {Object.entries(ecosystemElements).map(([key, element]) => {
                const isActive = activeElement === key;
                
                return (
                  <div 
                    key={key}
                    className="absolute top-1/2 left-1/2"
                    style={getCirclePosition(element.position)}
                  >
                    <button
                      onClick={() => setActiveElement(key)}
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 z-10
                        ${isActive ? colorClasses.active.background + ' ' + colorClasses.active.shadow : colorClasses.inactive.background + ' ' + colorClasses.inactive.shadow}
                        ${!isActive && colorClasses.inactive.hover}`}
                    >
                      <div className={`w-10 h-10 ${isActive ? colorClasses.active.text : colorClasses.inactive.text}`}>
                        {element.icon}
                      </div>

                      {/* Label for each element */}
                      <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium ${isActive ? 'text-primary-800' : 'text-primary-600'} whitespace-nowrap`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Circular path */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] rounded-full border-2 border-dashed border-primary-300 z-0"></div>

              {/* Arrows between elements */}
              <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Define the curved arrow path */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                      refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#9CA3AF" />
                  </marker>
                </defs>
                
                {/* Arrow from Gather to Mentor */}
                <path 
                  d="M 200 60 Q 280 120 340 200" 
                  stroke="#9CA3AF" 
                  strokeWidth="2"
                  strokeDasharray={activeElement === "gather" ? "0" : "4 4"}
                  className={activeElement === "gather" ? "stroke-primary-500" : "stroke-gray-400"}
                  markerEnd="url(#arrowhead)" 
                  fill="transparent"
                />
                
                {/* Arrow from Mentor to Serve */}
                <path 
                  d="M 340 200 Q 280 280 200 340" 
                  stroke="#9CA3AF" 
                  strokeWidth="2" 
                  strokeDasharray={activeElement === "mentor" ? "0" : "4 4"}
                  className={activeElement === "mentor" ? "stroke-primary-500" : "stroke-gray-400"}
                  markerEnd="url(#arrowhead)" 
                  fill="transparent"
                />
                
                {/* Arrow from Serve back to Gather */}
                <path 
                  d="M 200 340 Q 120 280 60 200 Q 120 120 200 60" 
                  stroke="#9CA3AF" 
                  strokeWidth="2" 
                  strokeDasharray={activeElement === "serve" ? "0" : "4 4"}
                  className={activeElement === "serve" ? "stroke-primary-500" : "stroke-gray-400"}
                  markerEnd="url(#arrowhead)" 
                  fill="transparent"
                />
              </svg>
            </div>

            {/* Content Area */}
            <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg mt-12">
              <div className="grid grid-cols-2 items-center">
                {/* Text Content */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-display font-medium mb-6 text-primary-800">
                    {ecosystemElements[activeElement].title}
                  </h3>
                  <div className="text-primary-700 space-y-4">
                    {ecosystemElements[activeElement].description.map((paragraph, idx) => (
                      <p key={idx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a 
                      href={ecosystemElements[activeElement].linkHref} 
                      className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 hover:underline transition-colors"
                    >
                      {ecosystemElements[activeElement].linkText}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div 
                    className="aspect-[4/3] w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
                    style={{ backgroundImage: `url('${ecosystemElements[activeElement].image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-700/20 to-transparent mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-8">
              {/* Mobile Circular Navigation */}
              <div className="relative mx-auto w-64 h-64">
                {/* Center circle */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300"></div>
                
                {/* Elements positioned around the circle */}
                {Object.entries(ecosystemElements).map(([key, element], idx) => {
                  const isActive = activeElement === key;
                  const angle = (idx * 2 * Math.PI / 3) - Math.PI/2; // Start from top
                  const radius = 90; // Slightly smaller for mobile
                  
                  const x = 32 + Math.cos(angle) * radius;
                  const y = 32 + Math.sin(angle) * radius;
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveElement(key)}
                      className={`absolute w-16 h-16 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300
                        ${isActive ? colorClasses.active.background + ' ' + colorClasses.active.shadow : colorClasses.inactive.background + ' ' + colorClasses.inactive.shadow}
                        ${!isActive && colorClasses.inactive.hover}`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className={`w-8 h-8 ${isActive ? colorClasses.active.text : colorClasses.inactive.text}`}>
                        {element.icon}
                      </div>

                      {/* Label for each element */}
                      <span className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium ${isActive ? 'text-primary-800' : 'text-primary-600'} whitespace-nowrap bg-white px-2 py-0.5 rounded-full`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    </button>
                  );
                })}

                {/* Center content preview */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-center text-xs font-medium text-primary-700 p-2">
                  <span>{ecosystemElements[activeElement].title}</span>
                </div>
              </div>

              {/* Mobile Content */}
              <div className="p-6 rounded-xl bg-white shadow-lg">
                <h3 className="text-xl font-display font-medium mb-4 text-primary-800">
                  {ecosystemElements[activeElement].title}
                </h3>
                <div 
                  className="w-full h-40 mb-4 rounded-lg bg-cover bg-center" 
                  style={{ backgroundImage: `url('${ecosystemElements[activeElement].image}')` }}
                ></div>
                <div className="text-primary-700 space-y-3">
                  {ecosystemElements[activeElement].description.map((paragraph, idx) => (
                    <p key={idx} className="text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-4">
                  <a 
                    href={ecosystemElements[activeElement].linkHref} 
                    className="inline-flex items-center text-sm text-accent-600 font-medium hover:text-accent-700 hover:underline transition-colors"
                  >
                    {ecosystemElements[activeElement].linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-full px-6 py-1.5 bg-primary-100 text-primary-700 font-medium text-sm mb-4">
            Acts 2:42-47
          </div>
          <blockquote className="max-w-3xl mx-auto text-lg md:text-xl italic text-primary-800 font-display">
            "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer. Everyone was filled with awe at the many wonders and signs performed by the apostles. All the believers were together and had everything in common."
          </blockquote>
        </div>
      </div>
    </section>
  );
}