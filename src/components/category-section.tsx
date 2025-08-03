import React, { useState, useEffect } from 'react';
import { Play, Crown, Palette, Video, MessageSquare, Sparkles, ChevronRight, Star, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom'

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState('streaming');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = {
    streaming: {
      title: 'Premium Streaming',
      gradient: 'from-slate-900 via-gray-900 to-zinc-900',
      overlayGradient: 'from-red-500/20 via-pink-500/10 to-orange-500/20',
      accentColor: 'from-red-500 via-pink-500 to-orange-500',
      glowColor: 'shadow-red-500/20',
      icon: Play,
      particleColor: 'bg-red-400',
      items: [
        {
          name: 'Netflix Premium UHD',
          price: '$15.99',
          period: '/month',
          originalPrice: '$25.99',
          features: ['4K Ultra HD Streaming', '4 Simultaneous Screens', 'Offline Downloads', 'Premium Audio'],
          rating: 4.9,
          reviews: '2.1M',
          badge: 'Most Popular',
          bgGradient: 'from-red-500/10 via-red-600/5 to-red-700/10',
          iconBg: 'bg-gradient-to-br from-red-500 to-red-600',
          discount: '38% OFF'
        },
        {
          name: 'Amazon Prime Video',
          price: '$12.99',
          period: '/month',
          originalPrice: '$18.99',
          features: ['Prime Video + Benefits', 'Original Exclusive Series', 'Free Same-Day Shipping', 'Prime Music'],
          rating: 4.8,
          reviews: '1.8M',
          badge: 'Best Value',
          bgGradient: 'from-blue-500/10 via-blue-600/5 to-blue-700/10',
          iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
          discount: '32% OFF'
        },
        {
          name: 'Disney+ Premium',
          price: '$10.99',
          period: '/month',
          originalPrice: '$15.99',
          features: ['Marvel & Star Wars Content', 'Pixar Exclusives', '4K HDR Streaming', 'Family Profiles'],
          rating: 4.7,
          reviews: '1.5M',
          badge: 'Family Favorite',
          bgGradient: 'from-indigo-500/10 via-indigo-600/5 to-indigo-700/10',
          iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
          discount: '31% OFF'
        },
        {
          name: 'HBO Max Premium',
          price: '$14.99',
          period: '/month',
          originalPrice: '$19.99',
          features: ['Same-Day Movie Releases', 'HBO Original Series', 'Ad-Free Experience', 'Max Originals'],
          rating: 4.6,
          reviews: '980K',
          badge: 'Premium Quality',
          bgGradient: 'from-purple-500/10 via-purple-600/5 to-purple-700/10',
          iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
          discount: '25% OFF'
        }
      ]
    },
    productivity: {
      title: 'AI & Productivity',
      gradient: 'from-slate-900 via-emerald-950 to-teal-950',
      overlayGradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
      accentColor: 'from-emerald-400 via-teal-400 to-cyan-400',
      glowColor: 'shadow-emerald-500/20',
      icon: Sparkles,
      particleColor: 'bg-emerald-400',
      items: [
        {
          name: 'ChatGPT Plus Pro',
          price: '$20.00',
          period: '/month',
          originalPrice: '$29.99',
          features: ['GPT-4 Turbo Access', 'Priority Response Time', 'Advanced Data Analysis', 'Custom GPTs'],
          rating: 5.0,
          reviews: '3.2M',
          badge: 'AI Powered',
          bgGradient: 'from-emerald-500/10 via-emerald-600/5 to-emerald-700/10',
          iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
          discount: '33% OFF'
        },
        {
          name: 'Notion Pro Unlimited',
          price: '$8.99',
          period: '/month',
          originalPrice: '$12.99',
          features: ['Unlimited File Uploads', 'Advanced Permissions', 'API Integration', 'Version History'],
          rating: 4.8,
          reviews: '1.1M',
          badge: 'Team Essential',
          bgGradient: 'from-teal-500/10 via-teal-600/5 to-teal-700/10',
          iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
          discount: '31% OFF'
        },
        {
          name: 'Grammarly Premium+',
          price: '$11.66',
          period: '/month',
          originalPrice: '$15.99',
          features: ['Advanced Grammar Checking', 'Plagiarism Detection', 'Style & Tone Suggestions', 'Brand Voice'],
          rating: 4.7,
          reviews: '890K',
          badge: 'Writer\'s Choice',
          bgGradient: 'from-cyan-500/10 via-cyan-600/5 to-cyan-700/10',
          iconBg: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
          discount: '27% OFF'
        }
      ]
    },
    design: {
      title: 'Design & Creative',
      gradient: 'from-slate-900 via-orange-950 to-amber-950',
      overlayGradient: 'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
      accentColor: 'from-orange-400 via-amber-400 to-yellow-400',
      glowColor: 'shadow-orange-500/20',
      icon: Palette,
      particleColor: 'bg-orange-400',
      items: [
        {
          name: 'Canva Pro Ultimate',
          price: '$12.99',
          period: '/month',
          originalPrice: '$19.99',
          features: ['100M+ Premium Photos', 'Brand Kit & Templates', 'Magic Resize & Eraser', 'Team Collaboration'],
          rating: 4.9,
          reviews: '2.5M',
          badge: 'Designer\'s Pick',
          bgGradient: 'from-orange-500/10 via-orange-600/5 to-orange-700/10',
          iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
          discount: '35% OFF'
        },
        {
          name: 'Adobe Creative Suite',
          price: '$52.99',
          period: '/month',
          originalPrice: '$82.99',
          features: ['All 20+ Creative Apps', '100GB Cloud Storage', 'Premium Fonts & Assets', 'Portfolio Website'],
          rating: 4.8,
          reviews: '1.7M',
          badge: 'Professional',
          bgGradient: 'from-amber-500/10 via-amber-600/5 to-amber-700/10',
          iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
          discount: '36% OFF'
        },
        {
          name: 'Figma Professional',
          price: '$15.00',
          period: '/month',
          originalPrice: '$22.99',
          features: ['Unlimited Projects & Files', 'Advanced Prototyping', 'Design System Libraries', 'Developer Handoff'],
          rating: 4.9,
          reviews: '1.3M',
          badge: 'UI/UX Pro',
          bgGradient: 'from-yellow-500/10 via-yellow-600/5 to-yellow-700/10',
          iconBg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
          discount: '35% OFF'
        }
      ]
    },
    video: {
      title: 'Video & Media Pro',
      gradient: 'from-slate-900 via-violet-950 to-fuchsia-950',
      overlayGradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
      accentColor: 'from-violet-400 via-purple-400 to-fuchsia-400',
      glowColor: 'shadow-violet-500/20',
      icon: Video,
      particleColor: 'bg-violet-400',
      items: [
        {
          name: 'CapCut Pro Studio',
          price: '$9.99',
          period: '/month',
          originalPrice: '$14.99',
          features: ['4K 60fps Export', '1000+ Premium Effects', 'AI-Powered Editing', 'Unlimited Cloud Storage'],
          rating: 4.8,
          reviews: '2.8M',
          badge: 'Mobile Pro',
          bgGradient: 'from-violet-500/10 via-violet-600/5 to-violet-700/10',
          iconBg: 'bg-gradient-to-br from-violet-500 to-violet-600',
          discount: '33% OFF'
        },
        {
          name: 'Final Cut Pro X',
          price: '$29.99',
          period: '/month',
          originalPrice: '$39.99',
          features: ['Professional Video Editing', 'Motion Graphics & VFX', 'Multicam Editing', 'ProRes RAW Support'],
          rating: 4.9,
          reviews: '1.2M',
          badge: 'Pro Editor',
          bgGradient: 'from-purple-500/10 via-purple-600/5 to-purple-700/10',
          iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
          discount: '25% OFF'
        },
        {
          name: 'DaVinci Resolve Studio',
          price: '$24.99',
          period: '/month',
          originalPrice: '$34.99',
          features: ['Hollywood-Grade Color', 'Fairlight Audio Post', 'Fusion VFX Compositing', 'Neural Engine AI'],
          rating: 4.7,
          reviews: '850K',
          badge: 'Hollywood Grade',
          bgGradient: 'from-fuchsia-500/10 via-fuchsia-600/5 to-fuchsia-700/10',
          iconBg: 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-600',
          discount: '29% OFF'
        }
      ]
    }
  };

  const categoryKeys = Object.keys(categories);
  const currentCategory = categories[activeCategory];

  // Floating particles animation
  const ParticleSystem = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 ${currentCategory.particleColor} rounded-full opacity-20 animate-pulse`}
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
    <div className={`min-h-screen bg-gradient-to-br ${currentCategory.gradient} relative transition-all duration-1000 py-20 px-4 overflow-hidden`}>
      {/* Animated Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentCategory.overlayGradient} transition-all duration-1000`} />

      {/* Particle System */}
      <ParticleSystem />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10">
        {/* Enhanced Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/30 rounded-full px-8 py-3 mb-10 ${currentCategory.glowColor} shadow-2xl transition-all duration-500`}>
            <Crown className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold text-lg">Premium Categories</span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
          </div>

          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                PREMIUM
              </span>
              <br />
              <span className={`bg-gradient-to-r ${currentCategory.accentColor} bg-clip-text text-transparent drop-shadow-2xl animate-pulse`}>
                {currentCategory.title.toUpperCase()}
              </span>
            </h2>
          </div>

          <p className="text-white/90 text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
            Unlock exclusive access to the world's most coveted premium services with
            <span className={`bg-gradient-to-r ${currentCategory.accentColor} bg-clip-text text-transparent font-bold`}> unbeatable prices</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: Shield, text: 'Secure Payment' },
              { icon: Award, text: 'Verified Accounts' },
              { icon: Zap, text: 'Instant Delivery' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <item.icon className="w-4 h-4 text-green-400" />
                <span className="text-white/80 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {categoryKeys.map((key, index) => {
              const category = categories[key];
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`group flex items-center gap-4 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 ${
                    activeCategory === key
                      ? `bg-gradient-to-r ${category.accentColor} text-white shadow-2xl ${category.glowColor} scale-110 border-2 border-white/30`
                      : 'bg-white/10 backdrop-blur-xl text-white/80 hover:bg-white/20 border-2 border-white/20 hover:border-white/40'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-6 h-6 group-hover:animate-spin" />
                  <span>{category.title}</span>
                  {activeCategory === key && <Sparkles className="w-4 h-4 animate-pulse" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Products Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {currentCategory.items.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${item.bgGradient} backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-700 hover:border-white/50 hover:shadow-2xl ${currentCategory.glowColor} transform hover:-translate-y-2`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 z-10">
                <div className={`bg-gradient-to-r ${currentCategory.accentColor} px-4 py-2 rounded-full text-white text-sm font-bold shadow-xl animate-bounce`}>
                  {item.discount}
                </div>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className={`${item.iconBg} p-4 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <currentCategory.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`bg-gradient-to-r ${currentCategory.accentColor} px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg`}>
                  {item.badge}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-white/90 transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-white font-black text-4xl">{item.price}</span>
                    <span className="text-white/60 text-lg">{item.period}</span>
                    <span className="text-white/40 line-through text-lg font-medium">{item.originalPrice}</span>
                  </div>
                </div>

                {/* Enhanced Rating */}
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                        />
                      ))}
                    </div>
                    <span className="text-white font-bold text-lg">{item.rating}</span>
                  </div>
                  <span className="text-white/60 text-sm font-medium">({item.reviews} reviews)</span>
                </div>

                {/* Enhanced Features */}
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/90 text-base bg-white/5 rounded-xl p-3 backdrop-blur-sm">
                      <div className={`w-2 h-2 bg-gradient-to-r ${currentCategory.accentColor} rounded-full animate-pulse`}></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Action Button */}
                <Link to="/product" className={`w-full bg-gradient-to-r ${currentCategory.accentColor} hover:shadow-2xl ${currentCategory.glowColor} text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 group-hover:scale-105 text-lg border-2 border-transparent hover:border-white/30`}>
                  <span>Get Premium Access</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br ${currentCategory.accentColor} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
              <div className={`absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br ${currentCategory.accentColor} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Stats */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500K+', label: 'Satisfied Customers', icon: Crown },
              { number: '99.9%', label: 'Success Rate', icon: Award },
              { number: '24/7', label: 'Premium Support', icon: Shield },
              { number: '1000+', label: 'Premium Services', icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 group">
                <div className="flex justify-center mb-4">
                  <div className={`${currentCategory.accentColor.replace('from-', 'bg-')} p-4 rounded-2xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-5xl font-black bg-gradient-to-r ${currentCategory.accentColor} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className="text-white/90 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 rounded-3xl p-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Premium Excellence?
            </h3>
            <p className="text-white/80 text-xl mb-8 leading-relaxed">
              Join millions of users who trust Signal-Shop for authentic premium accounts and unbeatable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className={`bg-gradient-to-r ${currentCategory.accentColor} hover:shadow-2xl ${currentCategory.glowColor} text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105 text-lg border-2 border-white/20`}>
                <span>Explore All Premium Services</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;