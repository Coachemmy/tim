import { CheckCircle, BookOpen, Heart, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Biblical Foundation",
      description: "We believe the Bible is the inspired, authoritative Word of God and the foundation for all teaching and life."
    },
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Following Christ's example, we serve our community with genuine love, meeting both spiritual and practical needs."
    },
    {
      icon: Users,
      title: "Authentic Community",
      description: "We believe in the power of fellowship—growing together, supporting one another, and building lasting relationships."
    },
    {
      icon: CheckCircle,
      title: "Transformation",
      description: "Our mission is to see lives transformed by the Gospel, empowering believers to fulfill their God-given purpose."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Ministry" },
    { number: "500+", label: "Active Members" },
    { number: "10+", label: "Ministry Programs" },
    { number: "3", label: "Community Locations" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Growing in Faith, <br />
              <span className="text-primary-600">Serving in Love</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Total Invasion Ministries is a Christ-centered community dedicated to 
              spreading the Gospel, nurturing believers, and making a difference 
              in Malawi and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 bg-accent-cream rounded-2xl">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} className="text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To fulfill the Great Commission by making disciples of all nations, 
                teaching them to observe all that Christ commanded, and empowering 
                believers to live out their faith in every sphere of life.
              </p>
            </div>
            
            <div className="p-8 bg-accent-cream rounded-2xl">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To see a generation of Spirit-filled believers who are transformed 
                by the Gospel, equipped for service, and impacting their communities 
                with the love and truth of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide everything we do as a church community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <value.icon size={24} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Leadership</h2>
            <p className="section-subtitle">
              Dedicated servants committed to shepherding God`s people with wisdom and love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Pastor John Doe", role: "Senior Pastor", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop" },
              { name: "Pastor Mary Smith", role: "Associate Pastor", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop" },
              { name: "Elder David Brown", role: "Youth Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop" }
            ].map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="font-serif text-xl font-semibold text-gray-900 mb-1">
                  {leader.name}
                </h4>
                <p className="text-primary-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;