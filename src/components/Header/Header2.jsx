import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, Star, Zap, Shield, Gamepad2, Key, Package, Play, Sparkles, Crown, Diamond } from 'lucide-react';

const SignalShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const Navbar = () => (
    <nav className="fixed mb-8 top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Signal-Shop
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#packages" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Packages
            </a>
            <a href="#gaming" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Gaming IDs
            </a>
            <a href="#signals" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Aviator Signals
            </a>
            <a href="#support" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Support
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors duration-200 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <a href="#home" className="block text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#packages" className="block text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Packages
            </a>
            <a href="#gaming" className="block text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Gaming IDs
            </a>
            <a href="#signals" className="block text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Aviator Signals
            </a>
            <a href="#support" className="block text-white/90 hover:text-white transition-colors duration-200 font-medium">
              Support
            </a>
            <div className="pt-4 border-t border-white/10">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-full font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => (
    <section className="relative  min-h-screen flex items-center justify-center overflow-hidden">
      {/* Revolutionary Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            animation: 'pulse 4s infinite'
          }} />
        </div>

        {/* Flowing Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-40 left-40 w-80 h-80 bg-gradient-to-r from-pink-600 to-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Interactive Light Beam */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
                        rgba(59, 130, 246, 0.3) 0%,
                        rgba(147, 51, 234, 0.2) 25%,
                        transparent 50%)`
          }}
        />
      </div>

      {/* Holographic Interface Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Corner Holo Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rotate-45 animate-spin-slow">
          <div className="absolute inset-4 border border-cyan-400/50 animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 w-24 h-24 border-l-2 border-t-2 border-purple-400/40 animate-pulse" />

        {/* Bottom Corner Holo Elements */}
        <div className="absolute bottom-20 left-20 w-28 h-28 border-r-2 border-b-2 border-pink-400/40 animate-pulse animation-delay-1000" />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rotate-45 animate-bounce animation-delay-2000" />

        {/* Center Floating Diamonds */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Diamond className="w-8 h-8 text-cyan-400/60 animate-spin animation-delay-500" />
        </div>
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <Diamond className="w-6 h-6 text-purple-400/60 animate-bounce animation-delay-1500" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Premium Live Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-red-400/30 mb-8 group hover:scale-105 transition-all duration-300">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse" />
          <span className="text-red-300 text-sm font-bold">LIVE</span>
          <span className="text-white/90 text-sm font-medium ml-2">• Premium Digital Marketplace</span>
          <Crown className="w-4 h-4 text-yellow-400 ml-2 group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Revolutionary Main Title */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-4 leading-none">
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 cursor-default">
              SIGNAL
            </span>
          </h1>
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none">
            <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 cursor-default">
              SHOP
            </span>
          </h1>
        </div>

        {/* Revolutionary Subtitle with Typing Effect */}
        <div className="mb-16">
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
            The Future of Digital Excellence
          </p>
          <p className="text-lg md:text-xl text-cyan-300/80 max-w-4xl mx-auto leading-relaxed">
            Unleash the power of premium <span className="text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded">Aviator Signals</span>,
            elite <span className="text-purple-400 font-bold bg-purple-400/10 px-2 py-1 rounded">Gaming IDs</span>,
            and exclusive <span className="text-pink-400 font-bold bg-pink-400/10 px-2 py-1 rounded">Digital Assets</span>
          </p>
        </div>

        {/* Revolutionary Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {[
            { icon: Zap, title: "Aviator Signals", subtitle: "99.9% Accuracy", color: "from-cyan-500 to-blue-600", glow: "shadow-cyan-500/25" },
            { icon: Gamepad2, title: "Gaming IDs", subtitle: "Premium Accounts", color: "from-purple-500 to-violet-600", glow: "shadow-purple-500/25" },
            { icon: Key, title: "License Keys", subtitle: "Instant Delivery", color: "from-pink-500 to-rose-600", glow: "shadow-pink-500/25" },
            { icon: Package, title: "Digital Packs", subtitle: "Exclusive Content", color: "from-orange-500 to-red-600", glow: "shadow-orange-500/25" }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 ${item.glow}`} />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-500`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Revolutionary CTA Section */}
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white font-bold rounded-2xl text-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>Start Your Journey</span>
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </button>

            <button className="px-12 py-5 bg-white/10 backdrop-blur-xl text-white font-bold rounded-2xl text-xl border border-white/20 hover:bg-white/20 transition-all duration-500 flex items-center gap-3 hover:scale-105 transform group">
              <div className="relative">
                <Shield className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span>Secure & Verified</span>
            </button>
          </div>

          {/* Live Stats Counter */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "15,247", label: "Active Users", icon: "👥" },
              { value: "99.9%", label: "Success Rate", icon: "⚡" },
              { value: currentTime.toLocaleTimeString(), label: "Live Now", icon: "🔴" },
              { value: "24/7", label: "Support", icon: "💬" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-white/60 text-sm mb-2 animate-pulse">Scroll to Explore</div>
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-bounce" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg) ; }
          to { transform: rotate(360deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default SignalShop;