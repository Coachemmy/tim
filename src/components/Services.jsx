import { 
  BookOpen, Users, GraduationCap, Music, Coffee, HandHeart, 
} from 'lucide-react';

const Services = () => {
  const ministries = [
    {
      icon: BookOpen,  // ✅ Replaced "Bible" with "BookOpen"
      title: "Bible Study",
      description: "Deep dive into God's Word with our comprehensive Bible study programs for all ages."
    },
    {
      icon: Users,
      title: "Youth Ministry",
      description: "Empowering the next generation of believers through dynamic youth programs."
    },
    {
      icon: HandHeart,  // ✅ Replaced "Heart" with more specific "HandHeart"
      title: "Community Outreach",
      description: "Serving our community with love and compassion through various outreach initiatives."
    },
    {
      icon: GraduationCap,  // ✅ Better icon for discipleship/learning
      title: "Discipleship",
      description: "Growing in faith through structured discipleship and mentorship programs."
    },
    {
      icon: Music,
      title: "Worship & Praise",
      description: "Experiencing God's presence through powerful worship and praise sessions."
    },
    {
      icon: Coffee,
      title: "Fellowship",
      description: "Building lasting relationships and community through regular fellowship gatherings."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Ministries</h2>
          <p className="section-subtitle">
            Discover various ways to get involved and grow in your faith journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div 
              key={index}
              className="group p-8 bg-accent-cream border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <ministry.icon size={28} className="text-primary-600  transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                {ministry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;