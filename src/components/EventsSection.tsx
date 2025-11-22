import React, { useState } from "react";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
};

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Sample events
  const events: Event[] = [
    {
      id: "1",
      title: "Summer Baptism Celebration",
      date: "July 23, 2024",
      time: "10:00 AM",
      location: "Keystone Lake",
      description: "Join us for a day of celebration as we baptize new believers at Keystone Lake. We'll have food, worship, and community time afterward.",
      image: "/assets/baptism_nw_f24fce58.jpg"
    },
    {
      id: "2",
      title: "All-Church Cookout",
      date: "August 12, 2024",
      time: "6:30 PM",
      location: "Woodward Park",
      description: "Our monthly all-church gathering bringing together all Ecclesia communities. Bring a dish to share and lawn chairs!",
      image: "/assets/1763402076513-27_nw_21514e97.jpg"
    },
    {
      id: "3",
      title: "Prayer & Worship Night",
      date: "June 30, 2024",
      time: "7:00 PM",
      location: "Midtown Home",
      description: "An evening dedicated to prayer and worship as we seek God's presence together. Open to all Ecclesia members and guests.",
      image: "/assets/1763402076513-29_nw_72ed5df2.jpg"
    }
  ];

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div className="w-full py-16 bg-primary-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us for these upcoming gatherings and events as we build community together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group relative">
              <div 
                className="rounded-xl overflow-hidden bg-white shadow-md cursor-pointer transition-all duration-300 group-hover:shadow-xl"
                onClick={() => openModal(event)}
              >
                <div className="h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="w-full h-full flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="text-white">
                        <div className="inline-block rounded-full px-3 py-1 bg-accent/90 text-white text-xs font-medium mb-2">
                          {event.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-display font-medium text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 bg-primary-200 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/events" 
            className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors"
          >
            View all events
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={closeModal}>
          <div 
            className="bg-white rounded-xl overflow-hidden max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-56 relative">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedEvent.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="inline-block rounded-full px-3 py-1 bg-accent text-white text-xs font-medium mb-2">
                    {selectedEvent.date}
                  </div>
                  <h3 className="text-2xl font-display font-medium text-white">
                    {selectedEvent.title}
                  </h3>
                </div>
              </div>
              <button 
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-muted-foreground text-sm mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {selectedEvent.time}
              </div>
              <div className="flex items-center text-muted-foreground text-sm mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {selectedEvent.location}
              </div>
              
              <p className="text-foreground mb-6">
                {selectedEvent.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  I'm interested
                </a>
                <button 
                  className="inline-flex items-center justify-center rounded-full bg-primary-100 px-5 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() => {
                    // Share functionality would go here
                    alert("Share functionality would be implemented here");
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" x2="12" y1="2" y2="15"></line>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}