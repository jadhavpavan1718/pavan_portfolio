
import React from 'react';
import { Code, Database, Cpu, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["C++", "Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend",
      icon: <Database className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools",
      icon: <Settings className="w-8 h-8" />,
      skills: ["Microsoft Office"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Other",
      icon: <Cpu className="w-8 h-8" />,
      skills: ["Data Structures", "Problem Solving"],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Here are the technologies and skills I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-8 text-center relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium group-hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg">
            <span className="mr-2">🚀</span>
            Always learning and growing
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
