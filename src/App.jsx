// App.jsx
import { Routes, Route } from 'react-router-dom'

import CategorySection from './components/category-section'
import FeaturedProducts from './components/featured-products'
import Header2 from './components/Header/Header2'
import HowToOrder from './components/how-to-order'
import Footer from './components/premium-footer (1)'
import Testimonials from './components/testimonials'
import SingleProduct from './components/single-product-section'


function App() {
  return (
    <Routes>
      {/* Home route */}
      <Route
        path="/"
        element={
          <>
            <Header2 />
            <FeaturedProducts />
            <CategorySection />
            <HowToOrder />
            <Testimonials />
            <Footer />
          </>
        }
      />

      {/* Single Product route */}
      <Route path="/product/" element={<SingleProduct />} />
    </Routes>
  )
}

export default App
