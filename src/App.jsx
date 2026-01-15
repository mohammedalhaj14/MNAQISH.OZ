import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // استيراد الفوتر هنا
import { products, flavors, offers, reviews } from "./data";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const email = "mohammedalhaj14@gmail.com";

  useEffect(() => {
    window.scrollTo(0, 0);
    if (page === 'home') {
      const timer = setInterval(() => {
        setActiveSlide(prev => (prev === products.length - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [page]);

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col text-right font-['Tajawal']" dir="rtl">
      {/* الرأس (المكون المنفصل) */}
      <Navbar setPage={setPage} cartCount={cart.length} currentPage={page} />

      <main className="flex-grow">
        {/* --- الصفحة الرئيسية (سلايدر + آراء) --- */}
        {page === "home" && (
          <>
            <section className="bg-green-900 text-white py-24 text-center px-6">
              <h1 className="text-6xl font-black mb-6">دفء الفرن الأصيل</h1>
              <p className="text-xl opacity-80 mb-10 italic">"نخبز السعادة يومياً بمكونات بلدية طازجة"</p>
              <button onClick={() => setPage('menu')} className="bg-orange-600 px-10 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition">اطلب الآن</button>
            </section>

            {/* سلايدر المخبوزات المختارة */}
            <section className="max-w-6xl mx-auto py-20 px-6">
              <h2 className="text-3xl font-black text-green-900 mb-12">أشهر مخبوزاتنا ✨</h2>
              <div className="relative h-[450px] rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row bg-white">
                <div className="w-full md:w-1/2 h-full">
                  <img src={products[activeSlide].img} className="w-full h-full object-cover transition-all duration-1000" alt="slide" />
                </div>
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                  <h3 className="text-4xl font-black text-green-900 mb-4">{products[activeSlide].name}</h3>
                  <p className="text-gray-500 text-lg mb-8">{products[activeSlide].desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-orange-600">{products[activeSlide].price}$</span>
                    <button onClick={() => addToCart(products[activeSlide])} className="bg-green-900 text-white px-8 py-4 rounded-2xl font-black">إضافة للطلب +</button>
                  </div>
                </div>
              </div>
            </section>

            {/* قسم الآراء */}
            <section className="bg-gray-100 py-20 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-black mb-12">آراء عشاق MNAQISH.OZ</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {reviews.map(r => (
                    <div key={r.id} className="bg-white p-8 rounded-3xl shadow-sm italic text-gray-600">
                      "{r.text}" <br/> <span className="text-orange-600 font-black not-italic block mt-4">- {r.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* --- صفحة المنيو الكاملة --- */}
        {page === "menu" && (
          <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map(p => (
              <div key={p.id} className="bg-white rounded-[40px] shadow-sm overflow-hidden border border-gray-100 group">
                <img src={p.img} className="h-64 w-full object-cover group-hover:scale-105 transition duration-500" alt={p.name} />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-green-900">{p.name}</h3>
                  <p className="text-orange-600 font-black my-4">{p.price}$</p>
                  <button onClick={() => addToCart(p)} className="w-full bg-green-900 text-white py-4 rounded-2xl font-black shadow-lg">إضافة للسلة +</button>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* --- صفحة النكهات والعروض --- */}
        {page === "flavors" && (
          <section className="max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-black text-green-900 mb-12 text-center">النكهات والإضافات</h2>
            <div className="grid gap-6">
              {flavors.map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-md border-r-8 border-orange-600 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-black text-green-900">{f.name}</h3>
                    <p className="text-gray-500">{f.info}</p>
                  </div>
                  <span className="text-2xl font-black text-orange-600">{f.price}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {page === "offers" && (
          <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-black text-red-600 mb-12 text-center">عروضنا القوية 🔥</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {offers.map(o => (
                <div key={o.id} className="bg-white p-12 rounded-[50px] border-4 border-dashed border-orange-600 text-center shadow-2xl">
                  <h3 className="text-3xl font-black text-green-900 mb-4">{o.title}</h3>
                  <p className="text-gray-500 mb-8 italic">{o.desc}</p>
                  <div className="text-5xl font-black text-orange-600">{o.price}$</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- تواصل معنا --- */}
        {page === "contact" && (
          <section className="max-w-2xl mx-auto py-20 px-6 text-center">
            <h2 className="text-4xl font-black text-green-900 mb-10">تواصل معنا</h2>
            <div className="bg-white p-12 rounded-[40px] shadow-2xl">
              <p className="text-xl mb-6">نحن هنا لخدمتكم دائماً</p>
              <a href={`mailto:${email}`} className="text-orange-600 font-black text-2xl block mb-6 underline">{email}</a>
              <p className="text-gray-500 font-bold">هاتف/واتساب: 961 76 724 1776+</p>
            </div>
          </section>
        )}
      </main>

      {/* الفوتر (المكون المنفصل المطور) */}
      <Footer setPage={setPage} email={email} />

      {/* شريط الواتساب العائم */}
      {cart.length > 0 && (
        <div className="fixed bottom-8 inset-x-6 z-50 flex justify-center">
          <button 
            onClick={() => window.open(`https://wa.me/961767241776?text=أود طلب: ${cart.map(c => c.name).join(', ')}`)}
            className="bg-green-600 text-white px-10 py-5 rounded-full font-black shadow-2xl flex items-center gap-4 hover:scale-105 transition"
          >
            تأكيد الطلب عبر واتساب ({total}$) 📱
          </button>
        </div>
      )}
    </div>
  );
}