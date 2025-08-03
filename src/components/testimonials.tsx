import React, { useState, useEffect } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Verified,
  Trophy,
  Heart,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  Crown,
  Shield,
  Zap,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Digital Marketing Director',
      company: 'TechCorp Inc.',
      location: 'New York, USA',
      avatar: '👩‍💼',
      rating: 5,
      date: '2 days ago',
      service: 'Netflix Premium + Disney Plus',
      text: 'Absolutely incredible service! Got my Netflix and Disney Plus accounts instantly. The quality is outstanding and the prices are unbeatable. Customer support responded within minutes when I had a question.',
      verified: true,
      featured: true,
      purchases: 15,
      bgGradient: 'from-pink-500/10 via-rose-500/5 to-red-500/10',
      accentColor: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      role: 'Software Engineer',
      company: 'Google',
      location: 'California, USA',
      avatar: '👨‍💻',
      rating: 5,
      date: '1 week ago',
      service: 'ChatGPT Plus + GitHub Copilot',
      text: 'As a developer, these AI tools are essential for my work. Signal-Shop delivered both accounts perfectly, and they work flawlessly. Saved me hundreds of dollars compared to buying directly!',
      verified: true,
      featured: true,
      purchases: 8,
      bgGradient: 'from-blue-500/10 via-cyan-500/5 to-teal-500/10',
      accentColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'Creative Designer',
      company: 'Design Studio Pro',
      location: 'London, UK',
      avatar: '👩‍🎨',
      rating: 5,
      date: '3 days ago',
      service: 'Adobe Creative Suite + Canva Pro',
      text: 'The entire Adobe Creative Suite for this price is mind-blowing! Everything works perfectly, and I love having access to all the premium design tools. The delivery was instant!',
      verified: true,
      featured: true,
      purchases: 12,
      bgGradient: 'from-purple-500/10 via-violet-500/5 to-indigo-500/10',
      accentColor: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Content Creator',
      company: 'YouTube Channel',
      location: 'Singapore',
      avatar: '👨‍🎬',
      rating: 5,
      date: '5 days ago',
      service: 'CapCut Pro + Final Cut Pro',
      text: 'Perfect for content creation! Both video editing tools work amazing. The accounts are genuine and I\'ve been using them for months without any issues. Highly recommend!',
      verified: true,
      featured: false,
      purchases: 6,
      bgGradient: 'from-orange-500/10 via-amber-500/5 to-yellow-500/10',
      accentColor: 'from-orange-500 to-amber-500'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Business Owner',
      company: 'StartUp Ventures',
      location: 'Toronto, Canada',
      avatar: '👩‍💼',
      rating: 5,
      date: '1 week ago',
      service: 'Microsoft Office 365 + Notion Pro',
      text: 'Running a business requires the best tools. Signal-Shop provided everything I needed at incredible prices. The accounts are premium quality and work perfectly across all devices.',
      verified: true,
      featured: false,
      purchases: 20,
      bgGradient: 'from-emerald-500/10 via-green-500/5 to-teal-500/10',
      accentColor: 'from-emerald-500 to-green-500'
    },
    {
      id: 6,
      name: 'David Kumar',
      role: 'Data Scientist',
      company: 'AI Research Lab',
      location: 'Mumbai, India',
      avatar: '👨‍🔬',
      rating: 5,
      date: '4 days ago',
      service: 'Jupyter Notebook Pro + Tableau',
      text: 'Essential tools for data analysis! The professional versions have all the advanced features I need. Delivery was instant and the accounts have been stable for months.',
      verified: true,
      featured: false,
      purchases: 9,
      bgGradient: 'from-cyan-500/10 via-blue-500/5 to-indigo-500/10',
      accentColor: 'from-cyan-500 to-blue-500'
    },
    {
      id: 7,
      name: 'Sofia Rodriguez',
      role: 'UX Designer',
      company: 'Meta',
      location: 'Barcelona, Spain',
      avatar: '👩‍💻',
      rating: 5,
      date: '6 days ago',
      service: 'Figma Professional + Sketch',
      text: 'Perfect design tools combo! Both accounts work flawlessly and have all premium features unlocked. The collaborative features in Figma Pro are exactly what our team needed.',
      verified: true,
      featured: true,
      purchases: 11,
      bgGradient: 'from-pink-500/10 via-purple-500/5 to-violet-500/10',
      accentColor: 'from-pink-500 to-purple-500'
    },
    {
      id: 8,
      name: 'James Wilson',
      role: 'Marketing Manager',
      company: 'Fortune 500',
      location: 'Sydney, Australia',
      avatar: '👨‍💼',
      rating: 5,
      date: '2 weeks ago',
      service: 'HubSpot Premium + Mailchimp Pro',
      text: 'Outstanding service for marketing tools! Both platforms work perfectly and have saved our company thousands in software costs. The accounts are genuine and fully functional.',
      verified: true,
      featured: false,
      purchases: 17,
      bgGradient: 'from-red-500/10 via-pink-500/5 to-rose-500/10',
      accentColor: 'from-red-500 to-pink-500'
    },
    {
      id: 9,
      name: 'Rachel Green',
      role: 'Freelance Writer',
      company: 'Independent',
      location: 'Berlin, Germany',
      avatar: '👩‍📝',
      rating: 5,
      date: '1 week ago',
      service: 'Grammarly Premium + Jasper AI',
      text: 'These writing tools are game-changers! Grammarly catches everything and Jasper AI helps with creative content. Both accounts work perfectly and the pricing is unbelievable!',
      verified: true,
      featured: false,
      purchases: 7,
      bgGradient: 'from-violet-500/10 via-purple-500/5 to-fuchsia-500/10',
      accentColor: 'from-violet-500 to-purple-500'
    }
  ];

  const stats = [
    { icon: Users, number: '500K+', label: 'Happy Customers', color: 'text-blue-400' },
    { icon: Star, number: '4.9/5', label: 'Average Rating', color: 'text-yellow-400' },
    { icon: Award, number: '99.8%', label: 'Success Rate', color: 'text-green-400' },
    { icon: Trophy, number: '#1', label: 'Rated Platform', color: 'text-purple-400' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          {i % 4 === 0 && <Star className="w-3 h-3 text-yellow-400/20" />}
          {i % 4 === 1 && <Heart className="w-3 h-3 text-pink-400/20" />}
          {i % 4 === 2 && <Trophy className="w-3 h-3 text-purple-400/20" />}
          {i % 4 === 3 && <Crown className="w-3 h-3 text-blue-400/20" />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10" />
      <FloatingElements />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-full px-8 py-3 mb-10 shadow-2xl shadow-purple-500/20">
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            <span className="text-white font-semibold text-lg">Customer Love</span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
          </div>

          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                WHAT OUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                CUSTOMERS SAY
              </span>
            </h2>
          </div>

          <p className="text-white/90 text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-12">
            Join over <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">500,000 satisfied customers</span> who trust Signal-Shop
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-black ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-20">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white p-4 rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:border-white/40"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white p-4 rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:border-white/40"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIdx) => (
                <div key={slideIdx} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {testimonials.slice(slideIdx * 3, slideIdx * 3 + 3).map((testimonial, idx) => (
                      <div
                        key={testimonial.id}
                        className={`group relative bg-gradient-to-br ${testimonial.bgGradient} backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-700 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer ${
                          testimonial.featured ? 'ring-2 ring-yellow-400/50' : ''
                        }`}
                        onMouseEnter={() => setHoveredCard(testimonial.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{ animationDelay: `${idx * 200}ms` }}
                      >
                        {/* Featured Badge */}
                        {testimonial.featured && (
                          <div className="absolute -top-3 -right-3 z-10">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-full shadow-xl animate-pulse">
                              <Crown className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        )}

                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 opacity-20">
                          <Quote className="w-12 h-12 text-white" />
                        </div>

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-5xl flex-shrink-0">{testimonial.avatar}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                              {testimonial.verified && (
                                <Verified className="w-5 h-5 text-blue-400" />
                              )}
                            </div>
                            <p className="text-white/70 font-medium">{testimonial.role}</p>
                            <p className="text-white/50 text-sm">{testimonial.company}</p>
                            <div className="flex items-center gap-1 mt-2 text-white/50 text-sm">
                              <MapPin className="w-3 h-3" />
                              <span>{testimonial.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-white/50 text-sm">
                            <Calendar className="w-3 h-3" />
                            <span>{testimonial.date}</span>
                          </div>
                        </div>

                        {/* Review Text */}
                        <p className="text-white/80 text-base leading-relaxed mb-6 italic">
                          "{testimonial.text}"
                        </p>

                        {/* Service Badge */}
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${testimonial.accentColor} bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-4`}>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-white/90 text-sm font-medium">{testimonial.service}</span>
                        </div>

                        {/* Footer Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 text-white/60 text-sm">
                            <TrendingUp className="w-4 h-4" />
                            <span>{testimonial.purchases} purchases</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Shield className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 text-sm font-medium">Verified</span>
                          </div>
                        </div>

                        {/* Hover Effects */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.accentColor} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-12 mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Shield className="w-10 h-10 text-green-400" />
              Why Customers Trust Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Instant Delivery',
                desc: 'Get your accounts within seconds of purchase',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Shield,
                title: 'Guaranteed Quality',
                desc: '100% authentic accounts with warranty',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Users,
                title: '24/7 Support',
                desc: 'Round-the-clock customer service',
                color: 'from-blue-500 to-cyan-500'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className={`bg-gradient-to-r ${item.color} p-4 rounded-3xl shadow-xl`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-2xl mb-4">{item.title}</h4>
                <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-2xl border-2 border-white/30 rounded-3xl p-12">
            <h3 className="text-5xl font-bold text-white mb-6">
              Join Our Happy Customers
            </h3>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the premium service that over 500,000 customers love and trust
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105 text-xl shadow-2xl shadow-purple-500/30 mx-auto">
              <span>Start Shopping Now</span>
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;