import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState("gather");

  return (
    <div className="w-full py-16 bg-primary-50">
      <div className="container">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-white shadow-xl">
              <Tabs defaultValue="gather" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full grid grid-cols-3 bg-primary-100/50 rounded-t-xl rounded-b-none p-1">
                  <TabsTrigger 
                    value="gather"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary-700 rounded-lg py-3"
                  >
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                      <span className="text-sm font-medium">Gather</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="mentor"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary-700 rounded-lg py-3"
                  >
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
                        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
                        <path d="M4 15V5a1 1 0 0 1 1-1h4"></path>
                        <path d="M14 15V5a1 1 0 0 1 1-1h4"></path>
                      </svg>
                      <span className="text-sm font-medium">Mentor</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="serve"
                    className="data-[state=active]:bg-white data-[state=active]:text-primary-700 rounded-lg py-3"
                  >
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                      </svg>
                      <span className="text-sm font-medium">Serve</span>
                    </div>
                  </TabsTrigger>
                </TabsList>
                <div className="p-6 md:p-8">
                  <TabsContent value="gather" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-display font-medium text-primary-800">
                        Gathering Together
                      </h3>
                      <p className="text-muted-foreground">
                        People in Ecclesia gather together weekly to grow together. We do this around the table because we believe that food not only brings people together but is biblical (Acts 2:46, Luke 22:14-20, Acts 20:7).
                      </p>
                      <p className="text-muted-foreground">
                        We share food, brainstorm ways we can help those around us, and enjoy each other's company. Currently, we meet every Friday night in Midtown and are constantly looking for additional opportunities to hang out.
                      </p>
                      <div className="pt-4">
                        <a href="/who-we-are" className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors">
                          Learn more about our gatherings
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="mentor" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-display font-medium text-primary-800">
                        Mentorship & Discipleship
                      </h3>
                      <p className="text-muted-foreground">
                        Each gathering creates an environment for mentorship through micro-bands of people (no larger than six) that meet together regularly. These meetings are designed to help people grow deeper in their relationship with Jesus and the power of the Holy Spirit.
                      </p>
                      <p className="text-muted-foreground">
                        Our mentorship meetings include prayer, confession, Bible study, mutual support, and fellowship—creating space for authentic spiritual growth and community.
                      </p>
                      <div className="pt-4">
                        <a href="/who-we-are" className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors">
                          Learn more about discipleship
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="serve" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-display font-medium text-primary-800">
                        Serving Our Community
                      </h3>
                      <p className="text-muted-foreground">
                        We strive to serve as Jesus served. We encourage everyone to identify needs in the community and invite their friends and neighbors along for the journey. We have multiple ways to serve every month and are continually looking for more opportunities.
                      </p>
                      <p className="text-muted-foreground">
                        You do not need to attend a gathering to serve with us. If you would like to serve alongside us, please reach out and let us know how to get plugged in.
                      </p>
                      <div className="pt-4">
                        <a href="/contact" className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors">
                          Contact us to serve together
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 bg-secondary-200 rounded-2xl"></div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              {activeTab === "gather" && (
                <div className="w-full h-full bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: "url('/family_gathering_nw_f63ba1cb.jpg')" }}></div>
              )}
              {activeTab === "mentor" && (
                <div className="w-full h-full bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: "url('/prayer_circle_nw_96b2ff2b.jpg')" }}></div>
              )}
              {activeTab === "serve" && (
                <div className="w-full h-full bg-cover bg-center transition-opacity duration-500" style={{ backgroundImage: "url('/baptism_nw_f24fce58.jpg')" }}></div>
              )}
            </div>
            <div className="absolute -z-10 inset-0 -translate-x-4 translate-y-4 bg-accent-200 rounded-2xl"></div>
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