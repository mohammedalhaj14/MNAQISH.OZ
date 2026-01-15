// src/components/Navbar.jsx
export default function Navbar({ setPage, cartCount, currentPage }) {
  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'menu', label: 'المنيو' },
    { id: 'flavors', label: 'النكهات' },
    { id: 'offers', label: 'العروض 🔥' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 h-20 px-6 flex justify-between items-center shadow-sm">
      <div onClick={() => setPage('home')} className="text-2xl font-black text-orange-600 cursor-pointer">
        MNAQISH<span className="text-green-800">.OZ</span>
      </div>
      <div className="hidden md:flex gap-8 font-bold text-gray-700">
        {navItems.map(item => (
          <button 
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`transition ${currentPage === item.id ? 'text-orange-600 underline' : 'hover:text-orange-600'}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-black shadow-sm">
        🛒 {cartCount}
      </div>
    </nav>
  );
}