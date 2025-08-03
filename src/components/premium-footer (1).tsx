import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Shield,
  Zap,
  Star,
  Crown,
  Gamepad2,
  Key,
  Package,
  ArrowRight,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    setTimeout(() => {
      setIsSubscribing(false);
      alert('Successfully subscribed to our newsletter!');
      setEmail('');
    }, 2000);
  };

  const quickLinks = [
    { name: 'Home', href: '#', icon: null },
    { name: 'Packages', href: '#', icon: Package },
    { name: 'Aviator Signals', href: '#', icon: Zap },
    { name: 'Gaming IDs', href: '#', icon: Gamepad2 },
    { name: 'License Keys', href: '#', icon: Key },
    { name: 'Digital Packs', href: '#', icon: Crown },
    { name: 'Support', href: '#', icon: Shield },
    { name: 'Contact', href: '#', icon: Mail }
  ];

  const services = [
    { name: 'Premium Aviator Signals', description: '99.9% Accuracy' },
    { name: 'Elite Gaming Accounts', description: 'Premium Access' },
    { name: 'Software License Keys', description: 'Instant Delivery' },
    { name: 'Digital Asset Packs', description: 'Exclusive Content' },
    { name: 'VIP Support', description: '24/7 Available' },
    { name: 'Custom Solutions', description: 'Tailored Services' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Refund Policy',
    'DMCA',
    'Disclaimer'
  ];

  const stats = [
    { label: 'Happy Customers', value: '50K+', icon: Star },
    { label: 'Success Rate', value: '99.9%', icon: Shield },
    { label: 'Digital Products', value: '1000+', icon: Package },
    { label: 'Countries Served', value: '150+', icon: MapPin }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-12 h-12 border-2 border-purple-400/20 rotate-45"></div>
      <div className="absolute bottom-40 left-16 w-8 h-8 border-2 border-pink-400/20 rotate-12"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40"></div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-purple-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Signal-Shop</span>
              </div>
              
              <p className="text-purple-200 leading-relaxed">
                The future of digital excellence. Unleash premium 
                <span className="text-cyan-400 font-semibold"> Aviator Signals</span>, elite 
                <span className="text-purple-400 font-semibold"> Gaming IDs</span>, and exclusive 
                <span className="text-pink-400 font-semibold"> Digital Assets</span>.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-purple-200">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>support@signal-shop.com</span>
                </div>
                <div className="flex items-center gap-3 text-purple-200">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3 text-purple-200">
                  <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                  <span>123 Innovation Drive<br />Digital City, DC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-purple-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors duration-300 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Our Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="group">
                    <div className="text-purple-200 group-hover:text-white transition-colors duration-300">
                      {service.name}
                    </div>
                    <div className="text-sm text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {service.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Stay Updated</h3>
              <p className="text-purple-200">
                Subscribe to get the latest updates on premium signals and exclusive offers.
              </p>
              
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 pr-12"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    disabled={isSubscribing || !email}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <Shield className="w-4 h-4" />
                  <span>We respect your privacy. Unsubscribe anytime.</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-sm font-medium">SSL Secured</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2">
                  <Star className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-300 text-sm font-medium">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-purple-300 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1"
                  >
                    {link}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <span>© 2025 Signal-Shop. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>for digital excellence.</span>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Ready to unlock digital excellence?</span>
                <ArrowRight className="w-4 h-4 text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;