import React from "react";

export default function AboutSection() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: "url('/family_gathering_nw_f63ba1cb.jpg')" }}
                ></div>
              </div>
              <div className="absolute -z-10 bottom-6 left-6 w-2/3 h-2/3 bg-secondary-200 rounded-2xl"></div>
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
          </div>
        </div>
      </div>
    </div>
  );
}