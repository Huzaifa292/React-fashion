import React from 'react'
import { motion } from 'framer-motion'
import MannequinCanvas from './components/MannequinCanvas'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="page">
      <Navbar />

      <main className="hero">
        <div className="hero-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Luxe Fashion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="subtitle"
          >
            Redefining modern luxury — collections crafted for bold expression.
          </motion.p>

          <motion.div
            className="cta-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a className="btn primary" href="#shop">Shop Collection</a>
            <a className="btn ghost" href="#about">About</a>
          </motion.div>
        </div>

        <div className="hero-right">
          <div className="canvas-wrap">
            <MannequinCanvas />
          </div>
        </div>
      </main>

      <section id="shop" className="products">
        <h2>Featured</h2>
        <div className="grid">
          <div className="card">New Coat — Rs. 12,500</div>
          <div className="card">Signature Blazer — Rs. 18,900</div>
          <div className="card">Limited Sneaker — Rs. 9,300</div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Luxe</h2>
        <p>
          We design with attention to detail and an eye for silhouette. Our
          collections combine timeless tailoring with contemporary materials.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Luxe Fashion — All rights reserved</p>
      </footer>
    </div>
  )
}
