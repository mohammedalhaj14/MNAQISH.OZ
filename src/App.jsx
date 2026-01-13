import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Star, Phone, Mail, Menu, X, ChevronDown, ArrowRight, Filter, ShieldCheck, FileText, HelpCircle } from 'lucide-react';

// --- HELPER: SCROLL TO TOP & ANCHORS ---
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);
  return null;
};

// --- DATA ---
const ALL_PRODUCTS = [
  { id: 1, cat: "Apparel", n: "Nitro-Runner Pro", p: "$189", img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600", tag: "Best Seller" },
  { id: 2, cat: "Fitness", n: "Apex Weight Set", p: "$299", img: "https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=600", tag: "Limited" },
  { id: 3, cat: "Tech", n: "Velocity Smartwatch", p: "$450", img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600", tag: "New" },
  { id: 4, cat: "Fitness", n: "Carbon Fiber Bat", p: "$320", img: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=600", tag: "Pro Gear" },
  { id: 5, cat: "Fitness", n: "Hydro-Flask Elite", p: "$45", img: "https://images.pexels.com/photos/1189257/pexels-photo-1189257.jpeg?auto=compress&cs=tinysrgb&w=600", tag: "Essential" },
  { id: 6, cat: "Apparel", n: "Compression Suit", p: "$120", img: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600", tag: "Sale" }
];

const handleWhatsApp = (productName) => {
  const phone = "96176724176";
  const message = encodeURIComponent(`Can I know more info about ${productName}?`);
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

// --- NAVIGATION ---
const Navbar = ({ toggleMenu }) => (
  <nav className="fixed w-full z-50 bg-[#1E3A8A] text-white px-6 py-4 flex justify-between items-center shadow-xl">
    <Link to="/" className="text-2xl font-black italic tracking-tighter">
      NITRO<span className="text-[#22C55E]">GEAR</span>
    </Link>
    <div className="hidden md:flex gap-8 font-bold uppercase text-xs tracking-widest">
      <Link to="/" className="hover:text-[#22C55E] transition-colors">Home</Link>
      <Link to="/products" className="hover:text-[#22C55E] transition-colors">Products</Link>
      <a href="/#faq" className="hover:text-[#22C55E] transition-colors">FAQ</a>
      <Link to="/contact" className="hover:text-[#22C55E] transition-colors">Contact</Link>
    </div>
    <div className="flex items-center gap-4">
      <Link to="/products" className="bg-[#22C55E] text-[#1E3A8A] px-6 py-2 rounded-full font-black text-xs hidden md:block hover:bg-white transition-all">STORE</Link>
      <Menu className="md:hidden text-[#22C55E] cursor-pointer" onClick={toggleMenu} />
    </div>
  </nav>
);

// --- HOME PAGE (WITH FAQ & REVIEWS) ---
const Home = () => {
  const [slide, setSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const slides = [
    { title: "ELITE PERFORMANCE", img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { title: "ULTIMATE SPEED", img: "https://images.pexels.com/photos/2261166/pexels-photo-2261166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ];

  const faqs = [
    { q: "How long does shipping take?", a: "Locally in Lebanon, it takes 2-3 business days. International shipping takes 7-10 days." },
    { q: "Is there a warranty on the gear?", a: "Yes! All NitroGear professional equipment comes with a 1-year limited warranty." },
    { q: "Can I return a product?", a: "We offer a 14-day return policy for unused gear in its original packaging." },
    { q: "How do I track my order?", a: "Once your order is processed, we will send you a tracking number via WhatsApp or Email." }
  ];

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s === 0 ? 1 : 0)), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <img src={slides[slide].img} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000" alt="Banner" />
        <div className="relative text-center px-6 z-10">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 italic tracking-tighter uppercase">{slides[slide].title}</h1>
          <Link to="/products" className="bg-[#22C55E] text-[#1E3A8A] px-10 py-4 rounded-full font-black text-lg inline-block hover:scale-110 transition-all shadow-lg uppercase">View Store</Link>
        </div>
      </section>

      {/* PRODUCT SLIDE LINE */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-end">
          <h2 className="text-4xl font-black text-[#1E3A8A] uppercase tracking-tighter">Elite Gear</h2>
          <Link to="/products" className="flex items-center gap-2 text-[#22C55E] font-black uppercase text-sm">See All <ArrowRight size={18}/></Link>
        </div>
        <div className="flex overflow-x-auto gap-8 px-6 pb-10 no-scrollbar snap-x snap-mandatory">
          {ALL_PRODUCTS.map((prod, i) => (
            <div key={i} className="min-w-[300px] bg-slate-50 rounded-[2.5rem] shadow-lg overflow-hidden snap-center flex-shrink-0">
              <div className="h-64 overflow-hidden"><img src={prod.img} className="w-full h-full object-cover" alt={prod.n}/></div>
              <div className="p-8 flex justify-between items-center">
                <div><h3 className="text-xl font-black text-[#1E3A8A]">{prod.n}</h3><span className="text-2xl font-black text-[#1E3A8A]">{prod.p}</span></div>
                <button onClick={() => handleWhatsApp(prod.n)} className="bg-[#1E3A8A] text-white p-4 rounded-2xl hover:bg-[#22C55E] transition-all"><ShoppingCart size={20}/></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-black mb-16 text-[#22C55E] tracking-tighter uppercase">Athlete Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                <div className="flex text-yellow-400 mb-4"><Star size={14} fill="currentColor"/></div>
                <p className="text-blue-100 mb-6 italic text-sm">"NitroGear provides the edge I need for professional competition. Reliable and high-quality."</p>
                <div className="font-bold text-xs uppercase tracking-widest">Verified Champ #{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-center text-5xl font-black text-[#1E3A8A] mb-12 tracking-tighter uppercase">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left font-black text-[#1E3A8A] text-lg uppercase tracking-tighter"
              >
                {faq.q} <ChevronDown className={`transition-transform ${activeFaq === i ? 'rotate-180 text-[#22C55E]' : ''}`} />
              </button>
              {activeFaq === i && (
                <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

// --- PRODUCT PAGE, LEGAL, CONTACT, FOOTER ---
// (Kept consistent with previous versions but ensuring links are correct)

const ProductPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.cat === filter);
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-slate-50 py-12 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto"><h1 className="text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">Catalog</h1></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64">
          <div className="sticky top-32 flex flex-col gap-2">
            {["All", "Apparel", "Fitness", "Tech"].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`text-left px-6 py-3 rounded-xl font-bold ${filter === cat ? 'bg-[#1E3A8A] text-white' : 'text-slate-400'}`}>{cat}</button>
            ))}
          </div>
        </aside>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
          {filtered.map(p => (
            <div key={p.id} className="group">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden mb-4 relative">
                <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={p.n}/>
                <button onClick={() => handleWhatsApp(p.n)} className="absolute bottom-4 right-4 bg-white p-4 rounded-full shadow-xl"><ShoppingCart size={20}/></button>
              </div>
              <h4 className="font-black text-[#1E3A8A] text-lg uppercase tracking-tighter">{p.n}</h4>
              <p className="text-xl font-black text-[#22C55E]">{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LegalPage = ({ title, icon: Icon }) => (
  <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50 flex justify-center">
    <div className="max-w-3xl w-full bg-white p-12 rounded-[3rem] shadow-2xl">
      <div className="flex items-center gap-4 mb-8 text-[#1E3A8A]">
        <Icon size={40} className="text-[#22C55E]"/>
        <h1 className="text-4xl font-black uppercase tracking-tighter">{title}</h1>
      </div>
      <p className="text-slate-600 leading-loose">Official {title} for NitroGear Performance. We ensure the highest standards of data protection and athletic safety for our global community of champions.</p>
    </div>
  </div>
);

const Contact = () => (
  <section className="pt-40 text-center min-h-screen px-6">
    <h1 className="text-6xl font-black text-[#1E3A8A] uppercase italic mb-8">Contact Us</h1>
    <div className="text-xl space-y-4 font-bold">
      <p className="flex justify-center items-center gap-2"><Mail className="text-[#22C55E]"/> mohammedalhaj14@gmail.com</p>
      <p className="flex justify-center items-center gap-2"><Phone className="text-[#22C55E]"/> +961 76 724 176</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-20 px-6 text-center">
    <div className="text-3xl font-black italic text-white mb-8">NITRO<span className="text-[#22C55E]">GEAR</span></div>
    <div className="flex justify-center gap-8 mb-8 font-bold text-xs uppercase tracking-widest">
      <Link to="/" className="hover:text-white">Home</Link>
      <Link to="/products" className="hover:text-white">Store</Link>
      <a href="/#faq" className="hover:text-white">FAQ</a>
      <Link to="/terms" className="hover:text-white">Terms</Link>
      <Link to="/privacy" className="hover:text-white">Privacy</Link>
    </div>
    <p className="text-[10px] opacity-85">© 2026 NITROGEAR PERFORMANCE. LEBANON.</p>
  </footer>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-[#22C55E] selection:text-[#1E3A8A]">
        <Navbar toggleMenu={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <div className="fixed inset-0 z-[60] bg-[#1E3A8A] text-white flex flex-col items-center justify-center gap-10 text-3xl font-black uppercase italic tracking-tighter transition-all">
            <X className="absolute top-8 right-8 text-[#22C55E]" size={40} onClick={() => setMenuOpen(false)} />
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>PRODUCTS</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<LegalPage title="Terms of Service" icon={FileText}/>} />
          <Route path="/privacy" element={<LegalPage title="Privacy Policy" icon={ShieldCheck}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}