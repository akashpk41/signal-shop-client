import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  CreditCard, 
  Download, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  PlayCircle,
  Users,
  Award,
  Sparkles,
  MousePointer
} from 'lucide-react';

const HowToOrder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Browse & Select',
      subtitle: 'Find Your Perfect Service',
      description: 'Explore our extensive catalog of premium services. Use filters and categories to find exactly what you need.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      glowColor: 'shadow-blue-500/20',
      features: ['1000+ Premium Services', 'Smart Search Filters', 'Category Navigation', 'Price Comparison'],
      time: '1-2 minutes'
    },
    {
      id: 2,
      title: 'Add to Cart',
      subtitle: 'Secure Your Selection',
      description: 'Add your chosen services to cart. Review details, quantities, and enjoy automatic discounts on bulk orders.',
      icon: ShoppingCart,
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      glowColor: 'shadow-emerald-500/20',
      features: ['Bulk Discounts Available', 'Price Protection', 'Cart Save Feature', 'Real-time Availability'],
      time: '30 seconds'
    },
    {
      id: 3,
      title: 'Secure Payment',
      subtitle: 'Safe & Encrypted Checkout',
      description: 'Complete your purchase with our secure payment system. Multiple payment methods accepted with buyer protection.',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      glowColor: 'shadow-purple-500/20',
      features: ['256-bit SSL Encryption', 'Multiple Payment Methods', 'Buyer Protection', 'Instant Confirmation'],
      time: '1 minute'
    },
    {
      id: 4,
      title: 'Instant Delivery',
      subtitle: 'Get Access Immediately',
      description: 'Receive your premium account details instantly via email and dashboard. Start enjoying your services right away.',
      icon: Download,
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      glowColor: 'shadow-orange-500/20',
      features: ['Instant Email Delivery', 'Dashboard Access', '24/7 Support', 'Lifetime Warranty'],
      time: 'Instant'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Marketer',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Incredibly smooth process! Got my Netflix premium in seconds.',
      service: 'Netflix Premium'
    },
    {
      name: 'Mike Chen',
      role: 'Developer',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Best prices for ChatGPT Plus. Quick delivery and great support!',
      service: 'ChatGPT Plus'
    },
    {
      name: 'Emma Wilson',
      role: 'Designer',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Love the variety of design tools available. Adobe suite works perfectly!',
      service: 'Adobe Creative Suite'
    }
  ];

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
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
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold text-lg">Simple Process</span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
          </div>

          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                HOW TO
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                ORDER
              </span>
            </h2>
          </div>

          <p className="text-white/90 text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-8">
            Get your premium services in just 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold"> 4 simple steps</span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { icon: Clock, text: 'Under 5 Minutes', color: 'text-blue-400' },
              { icon: Shield, text: '100% Secure', color: 'text-green-400' },
              { icon: Zap, text: 'Instant Delivery', color: 'text-yellow-400' }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-white/90 font-semibold">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="mb-20">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div 
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      index <= activeStep ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-white/20'
                    }`}
                  />
                  {index < steps.length - 1 && (
                    <div className="w-20 lg:w-32 h-1 mx-2">
                      <div className="w-full h-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-1000 ${
                            index < activeStep ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === activeStep;
              const isHovered = hoveredStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`group relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-2xl border-2 rounded-3xl p-8 transition-all duration-700 cursor-pointer ${
                    isActive || isHovered 
                      ? `border-white/50 scale-105 ${step.glowColor} shadow-2xl -translate-y-2` 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(index)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-xl ${
                      isActive ? 'animate-pulse' : ''
                    }`}>
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`bg-gradient-to-r ${step.color} p-4 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-2">
                        {step.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-white/80 text-base leading-relaxed">
                      {step.description}
                    </p>

                    {/* Time Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <Clock className="w-4 h-4 text-white/60" />
                      <span className="text-white/80 text-sm font-medium">{step.time}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mt-4">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-12 mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <PlayCircle className="w-10 h-10 text-purple-400" />
              Try Our Demo
            </h3>
            <p className="text-white/80 text-xl">Experience the ordering process yourself</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MousePointer, title: 'Interactive Demo', desc: 'Click through our actual interface' },
              { icon: Users, title: 'Live Chat Support', desc: 'Get help from our team anytime' },
              { icon: Award, title: 'Money-Back Guarantee', desc: '30-day satisfaction guarantee' }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h3>
            <p className="text-white/80 text-xl">Join thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-white/60">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-white/80 text-base mb-4 italic">"{testimonial.text}"</p>
                
                <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-3 py-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white/80 text-sm">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-2xl border-2 border-white/30 rounded-3xl p-12">
            <h3 className="text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Join over 500,000 satisfied customers who trust Signal-Shop for their premium service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105 text-lg shadow-2xl shadow-purple-500/30">
                <span>Browse Premium Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105 text-lg hover:bg-white/20">
                <PlayCircle className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;