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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      image: "/family_gathering_nw_f63ba1cb.jpg",
      linkText: "Learn more about our gatherings",
      linkHref: "/who-we-are",
      color: "amber"
    },
    mentor: {
      title: "Mentorship & Discipleship",
      description: [
        "Each gathering creates an environment for mentorship through micro-bands of people (no larger than six) that meet together regularly. These meetings are designed to help people grow deeper in their relationship with Jesus and the power of the Holy Spirit.",
        "Our mentorship meetings include prayer, confession, Bible study, mutual support, and fellowship—creating space for authentic spiritual growth and community."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
          <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
          <path d="M4 15V5a1 1 0 0 1 1-1h4"></path>
          <path d="M14 15V5a1 1 0 0 1 1-1h4"></path>
        </svg>
      ),
      image: "/prayer_circle_nw_96b2ff2b.jpg",
      linkText: "Learn more about discipleship",
      linkHref: "/who-we-are",
      color: "teal"
    },
    serve: {
      title: "Serving Our Community",
      description: [
        "We strive to serve as Jesus served. We encourage everyone to identify needs in the community and invite their friends and neighbors along for the journey. We have multiple ways to serve every month and are continually looking for more opportunities.",
        "You do not need to attend a gathering to serve with us. If you would like to serve alongside us, please reach out and let us know how to get plugged in."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
        </svg>
      ),
      image: "/baptism_nw_f24fce58.jpg",
      linkText: "Contact us to serve together",
      linkHref: "/contact",
      color: "orange"
    }
  };

  // Color mappings
  const colorClasses = {
    amber: {
      light: "bg-amber-100", 
      medium: "bg-amber-200",
      dark: "bg-amber-800",
      text: "text-amber-800",
      border: "border-amber-300",
      shadow: "shadow-amber-100",
      hover: "group-hover:text-amber-800"
    },
    teal: {
      light: "bg-teal-100", 
      medium: "bg-teal-200",
      dark: "bg-teal-800",
      text: "text-teal-800",
      border: "border-teal-300",
      shadow: "shadow-teal-100",
      hover: "group-hover:text-teal-800"
    },
    orange: {
      light: "bg-orange-100", 
      medium: "bg-orange-200",
      dark: "bg-orange-800",
      text: "text-orange-800",
      border: "border-orange-300",
      shadow: "shadow-orange-100",
      hover: "group-hover:text-orange-800"
    }
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
          <div className="hidden md:block">
            <div className="flex flex-col items-center">
              {/* Navigation Tabs */}
              <div className="flex gap-8 mb-8 border-b border-primary-200 w-full max-w-3xl mx-auto">
                {Object.entries(ecosystemElements).map(([key, element]) => {
                  const isActive = activeElement === key;
                  const color = colorClasses[element.color];
                  
                  return (
                    <button 
                      key={key}
                      onClick={() => setActiveElement(key)}
                      className={`group relative px-6 py-4 flex-1 flex flex-col items-center transition-all duration-300 ${isActive ? '-mb-px' : 'opacity-80 hover:opacity-100'}`}
                    >
                      <div className={`w-16 h-16 p-4 rounded-full mb-3 transition-all duration-300 ${isActive ? color.medium : 'bg-white'} ${isActive ? '' : 'group-hover:bg-gray-50'}`}>
                        <div className={`w-full h-full transition-colors duration-300 ${isActive ? color.text : 'text-primary-400'} ${color.hover}`}>
                          {element.icon}
                        </div>
                      </div>
                      <span className={`font-medium transition-colors duration-300 ${isActive ? color.text : 'text-primary-400'} ${color.hover}`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      {isActive && (
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 ${color.medium} rounded-t-full`}></div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Content Area */}
              <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="grid grid-cols-2 items-center">
                  {/* Text Content */}
                  <div className="p-8 md:p-12">
                    <h3 className={`text-2xl font-display font-medium mb-6 ${colorClasses[ecosystemElements[activeElement].color].text}`}>
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
                        className={`inline-flex items-center ${colorClasses[ecosystemElements[activeElement].color].text} font-medium hover:underline transition-colors`}
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
                      className="aspect-[4/3] w-full h-full bg-cover bg-center transition-opacity duration-500"
                      style={{ backgroundImage: `url('${ecosystemElements[activeElement].image}')` }}
                    ></div>
                    <div className={`absolute inset-0 opacity-30 ${colorClasses[ecosystemElements[activeElement].color].light} mix-blend-multiply`}></div>
                  </div>
                </div>
              </div>
              
              {/* Visual Connector */}
              <div className="relative w-full max-w-xl mx-auto mt-16 h-16">
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-px bg-primary-300"></div>
                <div className="absolute left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-px h-12 bg-primary-300"></div>
                <div className="absolute left-3/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-px h-12 bg-primary-300"></div>
                <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${colorClasses[ecosystemElements[activeElement].color].medium} flex items-center justify-center`}>
                  <div className={`w-4 h-4 ${colorClasses[ecosystemElements[activeElement].color].text}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary-200"></div>
                <div className="absolute left-3/4 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary-200"></div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-8">
              {/* Mobile Navigation */}
              <div className="grid grid-cols-3 gap-2 w-full">
                {Object.entries(ecosystemElements).map(([key, element]) => {
                  const isActive = activeElement === key;
                  const color = colorClasses[element.color];
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveElement(key)}
                      className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 
                        ${isActive ? color.light : 'bg-white'}
                        ${isActive ? 'ring-2 ' + color.border : ''}`}
                    >
                      <div className={`w-10 h-10 p-2 mb-2 ${isActive ? color.text : 'text-primary-400'}`}>
                        {element.icon}
                      </div>
                      <span className={`text-xs font-medium ${isActive ? color.text : 'text-primary-600'}`}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Content */}
              <div className={`p-6 rounded-xl bg-white shadow-lg border-l-4 ${colorClasses[ecosystemElements[activeElement].color].border}`}>
                <h3 className={`text-xl font-display font-medium mb-4 ${colorClasses[ecosystemElements[activeElement].color].text}`}>
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
                    className={`inline-flex items-center text-sm ${colorClasses[ecosystemElements[activeElement].color].text} font-medium hover:underline transition-colors`}
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