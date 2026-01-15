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
          <div className="relative group gathering-card">
            <div className="rounded-xl overflow-hidden bg-white shadow-md h-full transition-all duration-300 group-hover:shadow-xl">
              <div className="h-48 bg-primary-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    backgroundImage: "url('/assets/1763402076513-35_nw_c6a83dff.jpg')",
                    backgroundPosition: "center top -150px" 
                  }}
                ></div>
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full px-4 py-1 bg-primary-100 text-primary-700 font-medium text-xs mb-4">
                  Sundays at 5:00 PM
                </div>
                <h3 className="text-xl font-display font-medium text-primary-800 mb-2">
                  Midtown Gathering
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our original gathering located in the heart of Midtown Tulsa. We share a meal together, study Scripture, pray, and build deep connections.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 bg-primary-200 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
          
          {/* Southwest Gathering */}
          <div className="relative group gathering-card">
            <div className="rounded-xl overflow-hidden bg-white shadow-md h-full transition-all duration-300 group-hover:shadow-xl">
              <div className="h-48 bg-secondary-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-[center_bottom_75px] transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: "url('/assets/1763402076513-9_nw_0ef47423.jpg')" }}
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
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 bg-secondary-200 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
          
          {/* Youth Gathering */}
          <div className="relative group gathering-card">
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
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 bg-accent-200 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-primary-800 max-w-2xl mx-auto mb-6">
            We believe in growth by division. As our gatherings grow, we encourage them to multiply and form new communities.
          </p>
          <button 
            id="join-gathering-btn"
            type="button" 
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Join a Gathering
          </button>
        </div>
        
      </div>
    </div>
  );
}
