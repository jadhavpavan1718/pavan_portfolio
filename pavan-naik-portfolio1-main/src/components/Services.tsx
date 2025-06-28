
import React from 'react';
import { Code, Users, Zap, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Coding Problem Solutions",
      description: "Help solve complex algorithmic problems and provide optimized solutions with detailed explanations.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Algorithm optimization",
        "Code review and debugging",
        "Problem-solving strategies",
        "Best practices guidance"
      ]
    },
    {
      title: "Data Structure & Algorithm Tutoring",
      description: "Comprehensive tutoring on fundamental CS concepts with practical examples and hands-on practice.",
      icon: <BookOpen className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Concept explanation",
        "Implementation guidance",
        "Practice problem sets",
        "Interview preparation"
      ]
    },
    {
      title: "Frontend Interface Optimization",
      description: "Enhance user experience through responsive design and performance optimization techniques.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-orange-500 to-yellow-500",
      features: [
        "Responsive design",
        "Performance optimization",
        "User experience improvements",
        "Modern web standards"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Can Help With</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            I offer specialized services to help you succeed in your development journey and solve technical challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's work together to bring your ideas to life and solve your technical challenges
            </p>
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
