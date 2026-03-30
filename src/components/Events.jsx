import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "9:00 AM - 11:00 AM",
      location: "Main Sanctuary, Namon Katengeza",
      description: "Join us for powerful worship, inspiring teaching, and community fellowship."
    },
    {
      title: "Midweek Bible Study",
      date: "Every Wednesday",
      time: "6:00 PM - 7:30 PM",
      location: "Fellowship Hall",
      description: "Deepen your understanding of Scripture in an interactive group setting."
    },
    {
      title: "Youth Fellowship",
      date: "Every Saturday",
      time: "4:00 PM - 6:00 PM",
      location: "Youth Center",
      description: "A dynamic gathering for young believers to connect, learn, and grow."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join us for these special gatherings designed to strengthen your faith and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group p-6 bg-accent-cream rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-2 text-primary-600 mb-4">
                <Calendar size={18} />
                <span className="text-sm font-medium">{event.date}</span>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {event.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {event.description}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Clock size={14} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;