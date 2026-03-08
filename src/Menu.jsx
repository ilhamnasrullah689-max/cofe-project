import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Menu() {
  const categories = [
    {
      title: "Espresso Based",
      items: [
        { name: "Zhico Signature Latte", price: "28", desc: "Our secret blend with organic brown sugar" },
        { name: "Flat White", price: "25", desc: "Velvety steamed milk with double espresso" },
        { name: "Americano", price: "22", desc: "Pure black coffee with local beans" }
      ]
    },
    {
      title: "Main Course",
      items: [
        { name: "Truffle Carbonara", price: "45", desc: "Creamy pasta with truffle oil and beef bacon" },
        { name: "Zhico Fried Rice", price: "38", desc: "Authentic spice mix with sunny side up egg" },
        { name: "Grilled Chicken Pesto", price: "42", desc: "Juicy chicken breast with homemade basil pesto" }
      ]
    },
    {
      title: "Light Bites",
      items: [
        { name: "Classic Glazed Donut", price: "18", desc: "Soft and fluffy donut with vanilla glaze" },
        { name: "Butter Croissant", price: "22", desc: "Flaky, buttery French pastry baked daily" },
        { name: "Tiramisu Slice Cake", price: "25", desc: "Light sponge cake with espresso soak and mascarpone" }
      ]
    },
    {
      title: "Non-Coffee",
      items: [
        { name: "Artisan Matcha Zen", price: "30", desc: "Uji matcha with honey and creamy milk" },
        { name: "Midnight Choco", price: "28", desc: "70% Dark chocolate with hint of vanilla" },
        { name: "Malang Apple Tea", price: "25", desc: "Fresh local apple slices in black tea" }
      ]
    }
  ];

  return (
    <div className="bg-[#FDFCF8] min-h-screen text-zinc-900 font-sans selection:bg-amber-100 relative overflow-x-hidden">
      
      {/* Texture Overlay untuk kesan premium */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[99]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }}></div>

      {/* Mini Navigation */}
      <nav className="p-6 md:p-8 flex justify-between items-center sticky top-0 bg-[#FDFCF8]/90 backdrop-blur-md z-50 border-b border-zinc-100">
        <Link to="/" className="text-[10px] font-bold tracking-[0.3em] hover:text-amber-600 transition group flex items-center gap-2">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK
        </Link>
        <div className="text-xs font-black tracking-[0.5em] uppercase">ZHICO.</div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative">
        
        {/* Header Section */}
        <header className="text-center mb-32 relative">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] text-amber-600 font-bold mb-4 block"
          >
            Taste the Serenity
          </motion.span>
          <h1 className="text-6xl md:text-9xl font-serif italic leading-none mb-4">
            The <span className="font-light text-zinc-400">List</span>
          </h1>
          <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-400">Freshly Brewed in Malang City</p>
          
          {/* Floating Decor Image (Desktop Only) */}
          <div className="hidden lg:block absolute -right-24 top-0 w-44 h-60 rotate-6 shadow-2xl rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
             <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400" className="object-cover w-full h-full" alt="decor" />
          </div>
        </header>

        {/* Categories Loop */}
        {categories.map((cat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            key={idx} className="mb-24"
          >
            {/* Category Title with Line */}
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-lg md:text-xl font-serif italic text-zinc-800 whitespace-nowrap">
                {cat.title}
              </h2>
              <div className="flex-1 h-[1px] bg-zinc-200"></div>
              <span className="text-[10px] text-zinc-300 font-mono">0{idx + 1}</span>
            </div>
            
            {/* Items Grid */}
            <div className="grid gap-14">
              {cat.items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between items-baseline border-b border-zinc-100 pb-4 group-hover:border-amber-200 transition-colors duration-500">
                    <div className="max-w-[75%]">
                      <h3 className="text-xl md:text-2xl font-light tracking-tight group-hover:text-amber-800 transition duration-300">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light mt-2 italic group-hover:text-zinc-600 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-medium text-lg tracking-tighter">{item.price}.0</span>
                      <span className="text-[8px] uppercase tracking-widest text-zinc-300">K</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Closing Image & Text */}
        <footer className="mt-40 mb-16 text-center border-t border-zinc-200 pt-20">
          <div className="inline-block p-3 border border-zinc-200 mb-10 rotate-2 bg-white shadow-sm">
             <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=200" className="w-28 h-28 object-cover grayscale" alt="footer-decor" />
          </div>
          <p className="max-w-md mx-auto text-[10px] leading-relaxed uppercase tracking-[0.4em] text-zinc-400 italic">
            "Sejak 2026, Zhico Coffee meramu biji kopi pilihan Jawa Timur dengan teknik sangrai presisi. Sebuah harmoni rasa dalam setiap seduhan."
          </p>
        </footer>
      </div>
    </div>
  );
}