import React, { useState } from "react";

export default function EcosystemSection() {
  const [activeElement, setActiveElement] = useState("gather");

  const ecosystemElements = {
    gather: {
      title: "Gathering Together",
      description: [
        "People in Ecclesia gather together weekly to grow together. We do this around the table because we believe that food not only brings people together but is biblical (Acts 2:46, Luke 22:14-20, Acts 20:7).",
        "We share food, brainstorm ways we can help those around us, and enjoy each other's company. Currently, we meet every Friday night in Midtown and are constantly looking for additional opportunities to hang out."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      image: "/family_gathering_nw_f63ba1cb.jpg",
      linkText: "Learn more about our gatherings",
      linkHref: "/who-we-are"
    },
    mentor: {
      title: "Mentorship & Discipleship",
      description: [
        "Each gathering creates an environment for mentorship through micro-bands of people (no larger than six) that meet together regularly. These meetings are designed to help people grow deeper in their relationship with Jesus and the power of the Holy Spirit.",
        "Our mentorship meetings include prayer, confession, Bible study, mutual support, and fellowship—creating space for authentic spiritual growth and community."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
          <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
          <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
          <path d="M4 15V5a1 1 0 0 1 1-1h4"></path>
          <path d="M14 15V5a1 1 0 0 1 1-1h4"></path>
        </svg>
      ),
      image: "/prayer_circle_nw_96b2ff2b.jpg",
      linkText: "Learn more about discipleship",
      linkHref: "/who-we-are"
    },
    serve: {
      title: "Serving Our Community",
      description: [
        "We strive to serve as Jesus served. We encourage everyone to identify needs in the community and invite their friends and neighbors along for the journey. We have multiple ways to serve every month and are continually looking for more opportunities.",
        "You do not need to attend a gathering to serve with us. If you would like to serve alongside us, please reach out and let us know how to get plugged in."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
        </svg>
      ),
      image: "/baptism_nw_f24fce58.jpg",
      linkText: "Contact us to serve together",
      linkHref: "/contact"
    }
  };

  // Helper function to get position in the cycle
  const getPosition = (type, isMobile = false) => {
    const positions = {
      gather: { main: "top-0 left-1/2 -translate-x-1/2", mobile: "left-0" },
      mentor: { main: "bottom-0 right-0", mobile: "left-1/2 -translate-x-1/2" },
      serve: { main: "bottom-0 left-0", mobile: "right-0" }
    };
    return isMobile ? positions[type].mobile : positions[type].main;
  };

  const getRotation = () => {
    if (activeElement === "gather") return "rotate-0";
    if (activeElement === "mentor") return "rotate-[240deg]";
    return "rotate-[120deg]";
  };

  return (
    <div className="w-full py-24 bg-primary-50">
      <div className="container px-4 sm:px-6 md:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-800 mb-4">
            Our Ecosystem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The vision of Ecclesia, Greek for "gathering," follows the precepts outlined in 
            Acts 2:42. Our ecosystem is built on three foundational elements that guide 
            everything we do.
          </p>
        </div>

        {/* Desktop Cycle Version */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="relative h-[600px] w-full">
            {/* Cycle outer ring with connection lines */}
            <div className="absolute inset-0 mx-auto my-auto rounded-full border-2 border-dashed border-primary-300 h-[450px] w-[450px] transition-all duration-700">
              {/* Connection lines */}
              <div className="absolute inset-0 m-auto w-3/4 h-3/4">
                <svg viewBox="0 0 100 100" className={`w-full h-full transition-transform duration-700 ${getRotation()}`}>
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-primary-300" />
                  <line x1="13.4" y1="75" x2="86.6" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-primary-300" />
                  <line x1="13.4" y1="75" x2="50" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-primary-300" />
                  <line x1="86.6" y1="75" x2="50" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-primary-300" />
                </svg>
              </div>
            </div>

            {/* Interactive elements */}
            {Object.entries(ecosystemElements).map(([key, element]) => {
              const isActive = activeElement === key;
              const positionClass = getPosition(key);

              return (
                <div 
                  key={key}
                  className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
                >
                  <div 
                    className={`relative flex items-center justify-center rounded-full cursor-pointer transition-all duration-300
                      ${isActive 
                        ? 'h-32 w-32 bg-primary-800 text-white shadow-xl z-20 scale-110' 
                        : 'h-24 w-24 bg-white text-primary-700 shadow-md hover:shadow-lg hover:scale-105 z-10'}`}
                    onClick={() => setActiveElement(key)}
                  >
                    <div className="w-12 h-12">
                      {element.icon}
                    </div>
                    <div className={`absolute bottom-0 w-full text-center font-medium transition-all ${isActive ? 'text-white' : 'text-primary-700'}`}>
                      <span className="text-sm">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Center content based on active element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] text-center opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-display font-medium text-primary-800 mb-3">
                {ecosystemElements[activeElement].title}
              </h3>
              <div className="text-muted-foreground space-y-3">
                {ecosystemElements[activeElement].description.map((paragraph, idx) => (
                  <p key={idx} className="text-sm">
                    {paragraph}
                  </p>
                ))}
                <div className="pt-3">
                  <a 
                    href={ecosystemElements[activeElement].linkHref} 
                    className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors text-sm"
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

        {/* Mobile Version */}
        <div className="md:hidden relative max-w-xs mx-auto">
          <div className="relative flex flex-col items-center">
            {/* Mobile ecosystem visualization */}
            <div className="relative h-52 w-52 mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300"></div>
              
              {/* Mobile interactive elements */}
              {Object.entries(ecosystemElements).map(([key, element]) => {
                const isActive = activeElement === key;
                const positionClass = `absolute top-1/2 transform -translate-y-1/2 ${getPosition(key, true)}`;

                return (
                  <div 
                    key={key}
                    className={positionClass}
                  >
                    <div 
                      className={`relative flex items-center justify-center rounded-full cursor-pointer transition-all duration-300
                        ${isActive 
                          ? 'h-20 w-20 bg-primary-800 text-white shadow-xl z-20' 
                          : 'h-16 w-16 bg-white text-primary-700 shadow-md hover:shadow-lg hover:scale-105 z-10'}`}
                      onClick={() => setActiveElement(key)}
                    >
                      <div className="w-8 h-8">
                        {element.icon}
                      </div>
                      <div className={`absolute -bottom-6 w-full text-center font-medium ${isActive ? 'text-primary-800' : 'text-primary-700'}`}>
                        <span className="text-xs">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile content */}
            <div className="bg-white rounded-xl shadow-md p-4 text-center w-full mt-8">
              <h3 className="text-xl font-display font-medium text-primary-800 mb-2">
                {ecosystemElements[activeElement].title}
              </h3>
              <div className="text-muted-foreground space-y-2">
                {ecosystemElements[activeElement].description.map((paragraph, idx) => (
                  <p key={idx} className="text-xs">
                    {paragraph}
                  </p>
                ))}
                <div className="pt-2">
                  <a 
                    href={ecosystemElements[activeElement].linkHref} 
                    className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors text-xs"
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
    </div>
  );
}