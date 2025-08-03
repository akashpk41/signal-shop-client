import React, { useState } from 'react';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Shield, 
  Zap, 
  Download, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Plus,
  Minus,
  Eye,
  TrendingUp,
  Award,
  Gamepad2,
  Key,
  Package,
  Crown,
  Play
} from 'lucide-react';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState('1-month');
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Premium Aviator Signals Pro",
    category: "Aviator Signals",
    originalPrice: 149.99,
    salePrice: 89.99,
    discount: 40,
    rating: 4.9,
    reviews: 2847,
    sold: 15420,
    badge: "Best Seller",
    badgeColor: "from-red-500 to-pink-500",
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500", 
      "/api/placeholder/500/500",
      "/api/placeholder/500/500"
    ],
    features: [
      "99.9% Accuracy Rate",
      "Real-time Signal Alerts",
      "24/7 Premium Support",
      "Multi-platform Access",
      "Advanced Analytics",
      "Risk Management Tools"
    ],
    description: "Transform your trading experience with our Premium Aviator Signals Pro. Designed for professionals and serious traders, this ultimate tool provides real-time signals with 99.9% accuracy rate. Get instant access to premium features and advanced analytics to elevate your trading game.",
    specifications: [
      { label: "Accuracy Rate", value: "99.9%" },
      { label: "Signal Frequency", value: "24/7 Live" },
      { label: "Platform Support", value: "All Major Platforms" },
      { label: "Response Time", value: "< 1 second" },
      { label: "Success Rate", value: "97.8%" },
      { label: "Users Supported", value: "Unlimited" }
    ]
  };

  const durations = [
    { id: '1-week', label: '1 Week', price: 29.99, originalPrice: 49.99, popular: false },
    { id: '1-month', label: '1 Month', price: 89.99, originalPrice: 149.99, popular: true },
    { id: '3-months', label: '3 Months', price: 199.99, originalPrice: 349.99, popular: false },
    { id: '1-year', label: '1 Year', price: 599.99, originalPrice: 999.99, popular: false }
  ];

  const relatedProducts = [
    { id: 2, name: "Elite Gaming Package", price: 129.99, image: "/api/placeholder/200/200", rating: 4.8, badge: "New" },
    { id: 3, name: "Digital Asset Bundle", price: 199.99, image: "/api/placeholder/200/200", rating: 5.0, badge: "Hot" },
    { id: 4, name: "Gaming ID Premium", price: 79.99, image: "/api/placeholder/200/200", rating: 4.7, badge: "" },
    { id: 5, name: "License Key Pro", price: 159.99, image: "/api/placeholder/200/200", rating: 4.9, badge: "Sale" }
  ];

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} (${selectedDuration}) to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout with ${quantity} x ${product.name} (${selectedDuration})`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-purple-300 mb-8">
          <span className="hover:text-white cursor-pointer">Home</span>
          <ArrowRight className="w-4 h-4" />
          <span className="hover:text-white cursor-pointer">Products</span>
          <ArrowRight className="w-4 h-4" />
          <span className="hover:text-white cursor-pointer">{product.category}</span>
          <ArrowRight className="w-4 h-4" />
          <span className="text-white">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Sale Badge */}
            <div className="absolute z-20 top-4 left-4">
              <div className={`bg-gradient-to-r ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                {product.discount}% OFF
              </div>
            </div>

            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-sm"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-24 h-24 text-white mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white">AVIATOR</div>
                    <div className="text-xl text-purple-200">PRO SIGNALS</div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Eye className="w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-purple-400 bg-purple-400/20' 
                      : 'border-white/20 bg-white/5 hover:border-purple-400/50'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-8 h-8 text-purple-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`bg-gradient-to-r ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {product.badge}
                </span>
                <div className="flex items-center gap-1 text-purple-300">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{product.sold.toLocaleString()} sold</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">{product.rating}</span>
                  <span className="text-purple-300">({product.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-white">
                  ${durations.find(d => d.id === selectedDuration)?.price}
                </span>
                <span className="text-2xl text-purple-400 line-through">
                  ${durations.find(d => d.id === selectedDuration)?.originalPrice}
                </span>
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${(durations.find(d => d.id === selectedDuration)?.originalPrice - durations.find(d => d.id === selectedDuration)?.price).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Duration Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Select Duration:</h3>
              <div className="grid grid-cols-2 gap-3">
                {durations.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => setSelectedDuration(duration.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 relative ${
                      selectedDuration === duration.id
                        ? 'border-purple-400 bg-purple-400/20'
                        : 'border-white/20 bg-white/5 hover:border-purple-400/50'
                    }`}
                  >
                    {duration.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-white font-semibold">{duration.label}</div>
                    <div className="text-purple-300 text-sm">${duration.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Key Features:</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-purple-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-white font-medium">Quantity:</span>
                  <div className="flex items-center gap-2 bg-white/10 rounded-lg border border-white/20">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-white/10 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-white" />
                    </button>
                    <span className="px-4 py-2 text-white font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-white/10 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5" />
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>

              {/* Secondary Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 ${
                    isWishlisted
                      ? 'bg-red-500/20 border-red-500/50 text-red-300'
                      : 'bg-white/5 border-white/20 text-purple-300 hover:border-red-500/50 hover:text-red-300'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
                <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/20 text-purple-300 py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-white font-medium">Secure Payment</div>
                <div className="text-xs text-purple-300">SSL Protected</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-white font-medium">Instant Delivery</div>
                <div className="text-xs text-purple-300">Within Minutes</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-white font-medium">24/7 Support</div>
                <div className="text-xs text-purple-300">Premium Help</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-16">
          <div className="flex gap-6 border-b border-white/10 mb-8">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-purple-400'
                    : 'text-purple-300 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Product Description</h3>
                <p className="text-purple-200 leading-relaxed text-lg">{product.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">What You'll Get:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-purple-200">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Perfect For:</h4>
                    <ul className="space-y-2 text-purple-200">
                      <li>• Professional Traders</li>
                      <li>• Serious Investors</li>
                      <li>• Trading Enthusiasts</li>
                      <li>• Risk Managers</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-purple-200 font-medium">{spec.label}:</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Customer Reviews</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-semibold">{product.rating}</span>
                    <span className="text-purple-300">({product.reviews.toLocaleString()} reviews)</span>
                  </div>
                </div>
                <div className="text-purple-200">
                  Customer reviews and ratings will be displayed here. Our premium products consistently receive excellent feedback from satisfied customers worldwide.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Related Products</h2>
            <button className="text-purple-300 hover:text-white transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div key={item.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                  {item.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                        item.badge === 'New' ? 'bg-green-500' :
                        item.badge === 'Hot' ? 'bg-red-500' :
                        item.badge === 'Sale' ? 'bg-orange-500' : 'bg-purple-500'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center">
                    <Package className="w-12 h-12 text-purple-300" />
                  </div>
                  
                  <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.floor(item.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                    <span className="text-purple-300 text-sm ml-1">{item.rating}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-white">${item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;