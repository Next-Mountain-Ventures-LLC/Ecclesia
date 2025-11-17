import React from "react";

export default function GatheringsSection() {
  return (
    <div className="w-full py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-800 mb-4">
            Our Gatherings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We currently have three gatherings in different parts of Tulsa. Each gathering 
            is a unique expression of our shared vision to create authentic community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Midtown Gathering */}
          <div className="relative group">
            <div className="rounded-xl overflow-hidden bg-white shadow-md h-full transition-all duration-300 group-hover:shadow-xl">
              <div className="h-48 bg-primary-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/assets/1763402076513-48_nw_a493105e.jpg')" }}
                ></div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full px-4 py-1 bg-primary-100 text-primary-700 font-medium text-xs mb-4">
                  Fridays at 6:30 PM
                </div>
                <h3 className="text-xl font-display font-medium text-primary-800 mb-2">
                  Midtown Gathering
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our original gathering located in the heart of Midtown Tulsa. We share a meal together, study Scripture, pray, and build deep connections.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-primary-100">
                  <span className="text-sm text-primary-600 font-medium">Midtown Tulsa</span>
                  <a href="/contact" className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors text-sm font-medium">
                    Join us
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 bg-primary-200 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
          
          {/* Southwest Gathering */}
          <div className="relative group">
            <div className="rounded-xl overflow-hidden bg-white shadow-md h-full transition-all duration-300 group-hover:shadow-xl">
              <div className="h-48 bg-secondary-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/assets/1763402076513-45_nw_b079c0f0.jpg')" }}
                ></div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full px-4 py-1 bg-secondary-100 text-secondary-700 font-medium text-xs mb-4">
                  Thursdays at 6:00 PM
                </div>
                <h3 className="text-xl font-display font-medium text-primary-800 mb-2">
                  Southwest Gathering
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our Southwest Tulsa gathering is a family-focused community that emphasizes fellowship and practical applications of faith.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-primary-100">
                  <span className="text-sm text-primary-600 font-medium">Southwest Tulsa</span>
                  <a href="/contact" className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors text-sm font-medium">
                    Join us
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 bg-secondary-200 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
          
          {/* Youth Gathering */}
          <div className="relative group">
            <div className="rounded-xl overflow-hidden bg-white shadow-md h-full transition-all duration-300 group-hover:shadow-xl">
              <div className="h-48 bg-accent-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/assets/1763402076513-36_nw_0f8529a4.jpg')" }}
                ></div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full px-4 py-1 bg-accent-100 text-accent-700 font-medium text-xs mb-4">
                  Wednesdays at 7:00 PM
                </div>
                <h3 className="text-xl font-display font-medium text-primary-800 mb-2">
                  Youth Gathering
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our youth-focused gathering creates space for teens and young adults to connect, ask questions, and grow in their faith together.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-primary-100">
                  <span className="text-sm text-primary-600 font-medium">Rotating Locations</span>
                  <a href="/contact" className="inline-flex items-center text-accent-600 hover:text-accent-700 transition-colors text-sm font-medium">
                    Join us
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 bg-accent-200 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block rounded-full px-6 py-1.5 bg-primary-100 text-primary-700 font-medium text-sm mb-4">
            Want to start a gathering?
          </div>
          <p className="text-lg text-primary-800 max-w-2xl mx-auto mb-6">
            We believe in growth by division. As our gatherings grow, we encourage them to multiply and form new communities.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Contact us to get started
          </a>
        </div>
      </div>
    </div>
  );
}