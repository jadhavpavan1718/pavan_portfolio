
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Code2, Trophy, Users, Target, ExternalLink } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech CSE (Data Science)",
      institution: "CMR Technical Campus, Hyderabad",
      period: "2021 - 2025",
      status: "Graduating 2025",
      cgpa: "8.6"
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      period: "2019 - 2021",
      status: "Completed",
      cgpa: "9.7"
    },
    {
      degree: "SSC",
      institution: "Vasavi High School",
      period: "2019",
      status: "Completed",
      percentage: "95%"
    }
  ];

  const achievements = [
    {
      title: "Top 5 in Neo-Codethon CMRTC-2024 contest",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-yellow-600",
      link: "https://i.postimg.cc/qB1BdDfK/neocodethon.png"
    }
  ];

  const certifications = [
    {
      title: "Data Analytics",
      provider: "Aicte Eduskills",
      icon: <Award className="w-5 h-5" />,
      color: "text-blue-600",
      link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=c6fa2cedb38d72defabfd0dc976927d7"
    },
    {
      title: "Foundations of Cybersecurity",
      provider: "Google Coursera",
      icon: <Award className="w-5 h-5" />,
      color: "text-green-600",
      link: "https://coursera.org/verify/UF5RJYRQ87E6"
    },
    {
      title: "Completion of C Training from IIT Bombay",
      provider: "IIT Bombay",
      icon: <Award className="w-5 h-5" />,
      color: "text-purple-600",
      link: "https://i.postimg.cc/GtjJtwCv/COMPLETION-OF-C-TRAINING-FROM-IIT-BOMBAY.jpg"
    }
  ];

  const training = [
    {
      title: "Smart Interviews Training",
      description: "Data Structures and Algorithms",
      status: "Completed",
      icon: <Code2 className="w-5 h-5" />,
      color: "text-indigo-600",
      link: "https://smartinterviews.in/certificate/eeed779c"
    },
    {
      title: "Java Full Stack Training",
      description: "Comprehensive web development",
      status: "Ongoing",
      icon: <BookOpen className="w-5 h-5" />,
      color: "text-orange-600"
    }
  ];

  const workshops = [
    {
      title: "Re-engineering Digital India Hackathon",
      provider: "Swetcha",
      icon: <Users className="w-5 h-5" />,
      color: "text-teal-600",
      link: "https://i.postimg.cc/05zSFwF9/RE-ENGINEERING-DIGITAL-INDIA-HACKATHON.jpg"
    }
  ];

  const internship = {
    title: "Web Development Internship",
    company: "Acmegrade Technologies",
    icon: <Target className="w-5 h-5" />,
    color: "text-red-600",
    link: "https://i.postimg.cc/8PkFRrGR/ACMEGRADE-WEB-DEVELOPMENT.jpg"
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-56 h-56 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm an application developer focused on creating interactive and responsive websites 
                with strong expertise in web technologies. I love solving coding problems and 
                continuously improving my skills.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Currently pursuing my B.Tech in Computer Science Engineering with a specialization 
                in Data Science, I combine theoretical knowledge with practical application to build 
                meaningful digital solutions.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Education Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-purple-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-purple-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-purple-600 font-medium">{edu.institution}</p>
                    <div className="flex items-center text-gray-600 text-sm mt-2 gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.cgpa && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          CGPA: {edu.cgpa}
                        </span>
                      )}
                      {edu.percentage && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {edu.percentage}
                        </span>
                      )}
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-yellow-600" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className={`${achievement.color} mr-4`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-800 font-medium">{achievement.title}</span>
                    </div>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-yellow-600 hover:text-yellow-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Certifications */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-5 h-5 mr-3 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`${cert.color} mr-2`}>
                        {cert.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-3 text-green-600" />
              Training
            </h3>
            <div className="space-y-4">
              {training.map((train, index) => (
                <div key={index} className="border-l-4 border-green-200 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`${train.color} mr-2`}>
                        {train.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">{train.title}</h4>
                    </div>
                    {train.link && (
                      <a
                        href={train.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{train.description}</p>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    train.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {train.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Workshops & Internship */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-5 h-5 mr-3 text-teal-600" />
              Experience
            </h3>
            <div className="space-y-6">
              {/* Internship */}
              <div className="border-l-4 border-red-200 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className={`${internship.color} mr-2`}>
                      {internship.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">{internship.title}</h4>
                  </div>
                  {internship.link && (
                    <a
                      href={internship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-600">{internship.company}</p>
              </div>

              {/* Workshops */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Workshops Attended</h4>
                {workshops.map((workshop, index) => (
                  <div key={index} className="border-l-4 border-teal-200 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`${workshop.color} mr-2`}>
                          {workshop.icon}
                        </div>
                        <h5 className="font-medium text-gray-900">{workshop.title}</h5>
                      </div>
                      {workshop.link && (
                        <a
                          href={workshop.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:text-teal-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{workshop.provider}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
