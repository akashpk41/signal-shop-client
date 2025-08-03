import React from 'react';
import { ShoppingCart, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Aviator Signals",
      price: "$49.99",
      originalPrice: "$79.99",
      badge: "Sale",
      badgeType: "sale",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      description: "99.9% Accuracy Trading Signals"
    },
    {
      id: 2,
      name: "Elite Gaming Package",
      price: "$129.99",
      badge: "New",
      badgeType: "new",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      description: "Premium Gaming IDs & Assets"
    },
    {
      id: 3,
      name: "Digital Asset Bundle",
      price: "$89.99",
      originalPrice: "$149.99",
      badge: "Hot",
      badgeType: "hot",
      image: "/api/placeholder/300/200",
      rating: 5.0,
      description: "Exclusive Digital Content Pack"
    },
    {
      id: 4,
      name: "License Key Collection",
      price: "$39.99",
      badge: "Popular",
      badgeType: "popular",
      image: "/api/placeholder/300/200",
      rating: 4.7,
      description: "Instant Delivery Guaranteed"
    }
  ];

  const getBadgeStyles = (type) => {
    switch(type) {
      case 'sale':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'new':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'hot':
        return 'bg-gradient-to-r from-orange-500 to-red-500 text-white';
      case 'popular':
        return 'bg-gradient-to-r from-purple-500 to-blue-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16 px-4">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-purple-200 font-medium">LIVE • Featured Products</span>
          <Zap className="w-4 h-4 text-yellow-400" />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            FEATURED
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            PRODUCTS
          </span>
        </h2>

        <p className="text-purple-200 text-xl max-w-3xl mx-auto leading-relaxed">
          Discover our premium collection of <span className="text-cyan-400 font-semibold">Aviator Signals</span>,
          elite <span className="text-purple-400 font-semibold">Gaming IDs</span>, and exclusive
          <span className="text-pink-400 font-semibold"> Digital Assets</span>
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-6 hover:scale-105 transition-all duration-500 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Product Image Container */}
            <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 aspect-video">
              {/* Placeholder for actual image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                <div className="text-6xl font-bold text-white/20">
                  {product.name.charAt(0)}
                </div>
              </div>

              {/* Price Overlay */}
              <div className="absolute top-4 left-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-lg">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Badge Overlay */}
              <div className="absolute top-4 right-4">
                <div className={`${getBadgeStyles(product.badgeType)} px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                  {product.badge}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-purple-200 text-sm opacity-80">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">{product.rating}</span>
              </div>

              {/* Buy Button */}
              <Link to="/product" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/30 transform hover:scale-105">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </Link>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <div className="bg-gradient-to-r from-purple-800/40 to-blue-800/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Digital Excellence?
          </h3>
          <p className="text-purple-200 mb-6">
            Join thousands of satisfied customers who trust Signal-Shop for premium digital solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <span>View All Products</span>
            </button>
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="font-semibold">Secure & Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;