
import React from 'react';
import { ArrowDown, Sparkles, Code, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-8 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Available for work
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white/90">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Jadhav Pavan Naik
            </span>
          </h1>
          
          {/* Subtitle with icons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="flex items-center gap-2 text-lg sm:text-xl text-purple-300">
              <Code className="w-5 h-5" />
              <span>Application Developer</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2 text-lg sm:text-xl text-cyan-300">
              <Sparkles className="w-5 h-5" />
              <span>Problem Solver</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
            Passionate about creating <span className="text-purple-300 font-semibold">interactive</span> and <span className="text-orange-300 font-semibold">responsive</span> websites with strong expertise in modern web technologies. I love solving complex problems and building digital experiences that matter.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                View My Work
              </div>
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <div className="animate-bounce">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Modern Profile Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main Profile Circle */}
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/26FCtWq3/pavan-img.jpg" 
                  alt="Jadhav Pavan Naik"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold shadow-2xl backdrop-blur-md border border-white/20 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                B.Tech CSE
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl font-semibold shadow-2xl backdrop-blur-md border border-white/20 animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Data Science
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-12 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
