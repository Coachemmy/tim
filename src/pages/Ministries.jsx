import { Link } from 'react-router-dom';
import { 
  BookOpen, Users, Heart, Music, GraduationCap, 
  HandHeart, Globe, Coffee, Baby, ArrowRight 
} from 'lucide-react';

const Ministries = () => {
  const ministries = [
    {
      icon: BookOpen,
      title: "Bible Study & Discipleship",
      description: "Grow deeper in your faith through structured Bible studies, one-on-one discipleship, and small group fellowship designed for spiritual maturity.",
      schedule: "Sundays 7:00 PM | Wednesdays 6:00 PM",
      contact: "discipleship@totalinvasion.org"
    },
    {
      icon: Users,
      title: "Youth Ministry",
      description: "A vibrant community for teens and young adults to connect, worship, learn, and discover their purpose in Christ.",
      schedule: "Saturdays 4:00 PM",
      contact: "youth@totalinvasion.org"
    },
    {
      icon: Baby,
      title: "Children's Ministry",
      description: "Fun, safe, and biblically-based programs that help children ages 0-12 build a strong foundation of faith.",
      schedule: "Sundays 9:00 AM",
      contact: "kids@totalinvasion.org"
    },
    {
      icon: Music,
      title: "Worship & Arts",
      description: "Express your faith through music, dance, drama, and creative arts. All skill levels welcome.",
      schedule: "Rehearsals: Thursdays 6:00 PM",
      contact: "worship@totalinvasion.org"
    },
    {
      icon: HandHeart,
      title: "Community Outreach",
      description: "Serve those in need through food drives, medical camps, education support, and neighborhood transformation projects.",
      schedule: "Monthly events - check calendar",
      contact: "outreach@totalinvasion.org"
    },
    {
      icon: GraduationCap,
      title: "Leadership Training",
      description: "Equip yourself for ministry and life through our biblical leadership development programs and mentorship.",
      schedule: "Quarterly cohorts",
      contact: "training@totalinvasion.org"
    },
    {
      icon: Heart,
      title: "Care & Counseling",
      description: "Confidential pastoral care, prayer support, and biblical counseling for individuals and families.",
      schedule: "By appointment",
      contact: "care@totalinvasion.org"
    },
    {
      icon: Globe,
      title: "Missions",
      description: "Partner with us to reach unreached communities locally and globally with the life-changing message of Jesus.",
      schedule: "Mission trips: June & December",
      contact: "missions@totalinvasion.org"
    },
    {
      icon: Coffee,
      title: "Fellowship Groups",
      description: "Connect with others in home groups, men's/women's gatherings, and special interest fellowships.",
      schedule: "Various times - see directory",
      contact: "fellowship@totalinvasion.org"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,...')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
            Get Involved
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Your Place <br />
            in God`s Family
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Whatever your age, interest, or spiritual journey stage, 
            there`s a ministry where you belong, can grow, and make a difference.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <div 
                key={index}
                className="group border p-8 bg-accent-cream rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <ministry.icon size={28} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {ministry.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {ministry.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">When:</span> {ministry.schedule}
                  </p>
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-700">Contact:</span> {ministry.contact}
                  </p>
                </div>
                
                <button className="mt-6 inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            We`d love to help you find the right ministry for your gifts, interests, 
            and spiritual journey. Reach out and let`s connect.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Talk to Our Team
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ministries;