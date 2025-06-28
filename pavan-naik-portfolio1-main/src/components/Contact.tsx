
import React from 'react';
import { Mail, Phone, ExternalLink, Code, Trophy } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "pj964346@gmail.com",
      href: "mailto:pj964346@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 6304098413",
      href: "tel:+916304098413",
      color: "from-green-500 to-teal-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jadhav-pavan-naik-94772a227",
      icon: "🔗",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/pavanjadhav18",
      icon: "💻",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CodeChef",
      url: "https://codechef.com/users/pavanjadhav18",
      icon: "🏆",
      color: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Ready to start your next project or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-medium">{contact.label}</p>
                    <p className="text-lg font-semibold">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Coding Profiles</h4>
              <div className="grid gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{link.icon}</span>
                      <span className="font-semibold">{link.name}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form / Call to Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Ready to Work Together?</h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-white/20">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 mr-3 text-purple-400" />
                  <h4 className="text-lg font-semibold">Development Projects</h4>
                </div>
                <p className="text-gray-300">
                  Need help with web development, problem-solving, or technical consultation? Let's discuss your project requirements.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-xl border border-white/20">
                <div className="flex items-center mb-4">
                  <Trophy className="w-6 h-6 mr-3 text-orange-400" />
                  <h4 className="text-lg font-semibold">Tutoring & Mentoring</h4>
                </div>
                <p className="text-gray-300">
                  Looking for guidance on data structures, algorithms, or coding interview preparation? I'm here to help!
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:pj964346@gmail.com"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Send me an Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="mr-2">✨</span>
            <span className="font-medium">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
