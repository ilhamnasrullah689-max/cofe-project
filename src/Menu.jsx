import React from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-amber-100">
      
      {/* Mini Navigation */}
      <nav className="p-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link to="/" className="text-[10px] font-bold tracking-[0.3em] hover:text-amber-500 transition">← BACK</Link>
        <div className="text-xs font-black tracking-[0.5em] border-b-2 border-black uppercase">ZHICO.</div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header */}
        <header className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-light italic mb-4">Our Menu</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">Freshly Brewed in Malang City</p>
        </header>

        {/* Categories Loop */}
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-amber-500 mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-amber-500"></span>
              {cat.title}
            </h2>
            
            <div className="grid gap-12">
              {cat.items.map((item, i) => (
                <div key={i} className="group relative">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-xl md:text-2xl font-medium group-hover:text-amber-600 transition duration-300">
                      {item.name}
                    </h3>
                    <span className="font-bold text-lg">{item.price}k</span>
                  </div>
                  <p className="text-sm text-zinc-400 font-light italic">{item.desc}</p>
                  
                  {/* Dekorasi Garis saat Hover */}
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-0 bg-amber-400 group-hover:h-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer Text */}
        <footer className="mt-32 mb-16 text-center border-t border-zinc-100 pt-16">
          <p className="max-w-xl mx-auto text-[10px] leading-relaxed uppercase tracking-[0.3em] text-zinc-400 italic">
            "Sejak 2026, Zhico Coffee meramu biji kopi pilihan Jawa Timur dengan teknik sangrai presisi. Sebuah harmoni rasa dalam setiap seduhan."
          </p>
        </footer>
      </div>
    </div>
  );
}