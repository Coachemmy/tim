import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Take the Next Step?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you`re seeking faith, community, or a place to serve, 
          we`d love to connect with you and walk this journey together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link to="/ministries" className="btn-secondary">
            Explore Ministries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;