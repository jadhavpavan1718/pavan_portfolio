
import React from 'react';
import { ExternalLink, Github, Brain, Home } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Performance Prediction",
      description: "Used ML algorithms like Naive Bayes, SVM, ANN, and Decision Tree to predict grades and pass/fail status with high accuracy.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Multiple ML algorithm implementation",
        "Performance comparison analysis",
        "Data preprocessing and feature engineering",
        "Predictive modeling for academic outcomes"
      ]
    },
    {
      title: "Furniture Rental Website",
      description: "A functional web application for browsing and renting furniture built with modern web technologies.",
      icon: <Home className="w-8 h-8" />,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Interactive furniture catalog",
        "Responsive design for all devices",
        "User-friendly interface",
        "Modern web development practices"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300 font-semibold">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <span className="mr-2">🔗</span>
            More projects on GitHub
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
