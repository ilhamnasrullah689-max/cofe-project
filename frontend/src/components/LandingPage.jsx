import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { coffeePhotos } from "../photos"; // Import file foto

export default function LandingPage() {
  return (
    <div className="bg-[#FDFCF8] text-gray-900 font-sans selection:bg-amber-200 overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section 
        className="relative min-h-[90vh] md:h-screen bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url(${coffeePhotos.hero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <nav className="absolute top-0 w-full flex justify-between items-center p-6 md:p-8 z-20 text-white">
          <div className="text-lg md:text-xl font-bold tracking-[0.2em]">ZHICO COFFEE</div>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
            <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            <Link to="/menu" className="hover:text-amber-400 transition">Menu</Link>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-white pt-20">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[1.1] mb-8">
            Brewing <br />
            <span className="text-amber-400 italic font-light block md:inline md:ml-24">Peace</span> <br />
            In Every Cup.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 border border-white uppercase text-[10px] tracking-[0.2em] text-center hover:bg-white hover:text-black transition">
              Book a Table
            </a>
            <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-white text-black uppercase text-[10px] tracking-[0.2em] text-center hover:bg-amber-400 transition">
              See All Menu
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. STORY SECTION --- */}
      <section id="story" className="py-16 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">The Art of Our Roasting</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
            Berawal dari kurasi biji kopi lokal terbaik, kami memanggang dedikasi menjadi segelas pengalaman yang tak terlupakan. Kopi berkualitas, diseduh dengan hati. 
          </p>
          <button className="border-b-2 border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-amber-600 transition">
            Explore Our Story →
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src={coffeePhotos.story} 
            alt="Roasting Process" 
            className="w-full h-[300px] md:h-[500px] object-cover rounded shadow-2xl" 
          />
        </div>
      </section>

      {/* --- 3. AMBIENCE SECTION --- */}
      <section className="py-16 md:py-24 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-10 border-l-4 border-amber-400 pl-4">
            A Unique Room to <br/> Work and Chill
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {coffeePhotos.spaces.map((space, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-3 bg-zinc-200 shadow-md">
                  <img src={space.img} alt={space.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <h3 className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-800">{space.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SIGNATURE MENU SECTION --- */}
      <section id="menu" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden shadow-lg border border-zinc-100">
            <img src={coffeePhotos.signature} className="w-full h-full object-cover" alt="Latte" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl md:text-3xl font-bold">Signature Creamy Latte</h3>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <img src={coffeePhotos.coldBrew} className="w-full h-40 md:h-64 object-cover rounded shadow" alt="Cold Brew" />
              <img src={coffeePhotos.gulaAren} className="w-full h-40 md:h-64 object-cover rounded shadow" alt="Gula Aren" />
            </div>
            <div className="bg-zinc-900 text-white p-6 md:p-10 rounded-lg">
              <h4 className="text-lg md:text-xl font-bold mb-3 uppercase text-amber-400">Our Coffee List</h4>
              <p className="text-gray-400 mb-6 text-xs md:text-sm leading-relaxed">
                Nikmati pilihan menu terbaik kami dari biji kopi pilihan Malang.
              </p>
              <Link to="/menu" className="inline-block w-full py-4 bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] text-center hover:bg-amber-400 transition">
                See All Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER (With Integrated Map) --- */}
      <footer id="contact" className="bg-[#121212] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start border-b border-white/5 pb-12">
            {/* Branding */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-widest">ZHICO COFFEE</h3>
              <p className="text-gray-500 italic text-xs">"Serenity in every cup."</p>
              <div className="flex gap-4 text-xl text-gray-400">
                <FaInstagram className="hover:text-white cursor-pointer" /> 
                <FaWhatsapp className="hover:text-white cursor-pointer" /> 
                <FaEnvelope className="hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Lokasi */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-400 mb-4 font-bold">Lokasi</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Jl. Merbabu No. 123, <br/>Kota Malang, Jawa Timur</p>
            </div>

            {/* Jam Buka */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-400 mb-4 font-bold">Jam Buka</h4>
              <p className="text-xs text-gray-400">Setiap Hari<br/>09:00 — 23:00</p>
            </div>

            {/* Google Maps (Persegi Panjang di Pojok) */}
            <div className="w-full">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-400 mb-4 font-bold">Find Us</h4>
              <div className="w-full h-32 rounded overflow-hidden grayscale contrast-125 invert-[0.05]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2139413645314!2d112.6241168!3d-7.975765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd628236d634289%3A0xc3b5e40639d48b1b!2sMalang%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="pt-8 text-[9px] uppercase tracking-widest text-gray-600">
            © 2026 Zhico Coffee. Malang, East Java.
          </div>
        </div>
      </footer>
    </div>
  );
}