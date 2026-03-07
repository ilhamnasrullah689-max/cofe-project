import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function LandingPage() {
  // Data Ruangan (Space & Ambience)
  const spaces = [
    { name: "The Work Oasis", img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814" },
    { name: "The Cozy Corner", img: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
    { name: "Idea Forge", img: "https://images.unsplash.com/photo-1517502884422-41eaadeff171" },
    { name: "Comfort Cove", img: "https://images.unsplash.com/photo-1559925393-8be0ec418cd9" },
  ];

  return (
    <div className="bg-[#FDFCF8] text-gray-900 font-sans selection:bg-amber-200 overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <nav className="absolute top-0 w-full flex justify-between items-center p-8 z-20 text-white">
          <div className="text-xl font-bold tracking-[0.2em]">NAKA COFFEE</div>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-amber-400 transition">Home</a>
            <a href="#story" className="hover:text-amber-400 transition">Story</a>
            <a href="#menu" className="hover:text-amber-400 transition">Menu</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-white">
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
            Brewing <br />
            <span className="ml-12 md:ml-24 text-amber-400 italic font-light">Peace</span> <br />
            In Every Cup.
          </h1>
          <div className="flex flex-wrap gap-5">
            <a href="#contact" className="px-8 py-4 border border-white uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Book a Table
            </a>
            <a href="https://wa.me/6281234567890" className="px-8 py-4 bg-white text-black uppercase text-xs tracking-[0.2em] hover:bg-amber-400 transition-all">
              Order Delivery
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. STORY SECTION --- */}
      <section id="story" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6">The Art of Our Roasting</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Sejak 2026, kami memadukan biji kopi pilihan dengan teknik sangrai teliti. 
            Naka Coffee hadir di jantung Kota Malang untuk memberikan aroma dan rasa autentik 
            bagi setiap penikmatnya.
          </p>
          <button className="border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-amber-600 hover:border-amber-600 transition-all">
            Explore Our Story →
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80" 
            alt="Roasting" 
            className="w-full h-[450px] object-cover rounded-sm shadow-xl" 
          />
        </div>
      </section>

      {/* --- 3. AMBIENCE SECTION (GRID FIXED) --- */}
      <section className="py-24 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-12">
            A Unique Room to <br/> Work and Chill
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaces.map((space, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-zinc-200">
                  <img 
                    src={`${space.img}?auto=format&fit=crop&w=600&q=80`} 
                    alt={space.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white border border-white p-2 rounded-full">↗</span>
                  </div>
                </div>
                <h3 className="text-sm uppercase tracking-widest font-semibold">{space.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SIGNATURE MENU --- */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative group overflow-hidden h-[600px]">
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80" alt="Latte" className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-10">
              <h3 className="text-white text-3xl font-bold">Signature Creamy Latte</h3>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80" alt="Cold Brew" className="w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1572286258217-40142c1c6a70?auto=format&fit=crop&q=80" alt="Gula Aren" className="w-full h-64 object-cover" />
            </div>
            <div className="bg-zinc-900 text-white p-10 mt-6">
              <h4 className="text-xl font-bold mb-4">Indulge in Culinary Excellence</h4>
              <p className="text-gray-400 mb-8 text-sm">Nikmati pilihan menu terbaik kami dari biji kopi pilihan Malang.</p>
              <button className="w-full py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition">See All Menu</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER (MALANG ADDRESS) --- */}
      <footer id="contact" className="bg-[#121212] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-tighter">NAKA COFFEE.</h3>
              <p className="text-gray-500 italic text-sm">"Finding serenity in every roasted bean."</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-6">Alamat Kami</h4>
              <div className="space-y-4 text-sm text-gray-400">
                <p>Jl. Merbabu No. 123, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur</p>
                <p>+62 812 3456 7890</p>
                <div className="flex gap-4 pt-4 text-xl">
                  <a href="#" className="hover:text-white transition"><FaInstagram /></a>
                  <a href="#" className="hover:text-white transition"><FaWhatsapp /></a>
                  <a href="#" className="hover:text-white transition"><FaEnvelope /></a>
                </div>
              </div>
            </div>
            <div className="grayscale opacity-50 hover:grayscale-0 transition duration-500 overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.213824343118!2d112.62477431477811!3d-7.976824994254884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788283a0555555%3A0x1234567890abcdef!2sJl.%20Merbabu%2C%20Malang!5e0!3m2!1sid!2sid!4v1646650000000!5m2!1sid!2sid"
                width="100%" height="180" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-gray-600 border-t border-white/10 pt-8">
            © 2026 Naka Coffee Project. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}