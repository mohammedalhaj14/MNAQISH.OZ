export default function Footer({ setPage, email }) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-6 mt-20 text-right">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-black text-clay mb-4">MNAQISH.OZ</div>
          <p className="text-gray-400 text-sm">نخبز الأصالة يوماً بعد يوم، لنقدم لكم تجربة مذاق لا تُنسى.</p>
        </div>
        <div>
          <h4 className="font-black text-olive mb-6">روابط هامة</h4>
          <div className="flex flex-col gap-3 text-sm font-bold text-gray-500">
            <button onClick={() => setPage('privacy')} className="hover:text-clay text-right">سياسة الخصوصية</button>
            <button onClick={() => setPage('contact')} className="hover:text-clay text-right">تواصل معنا</button>
          </div>
        </div>
        <div>
          <h4 className="font-black text-olive mb-6">الدعم</h4>
          <p className="text-xs text-gray-400 mb-1">البريد الإلكتروني:</p>
          <a href={`mailto:${email}`} className="text-clay font-black text-xs underline">{email}</a>
        </div>
        <div>
          <h4 className="font-black text-olive mb-6">ساعات العمل</h4>
          <p className="text-gray-500 font-bold text-sm italic">6:00 صباحا - 10:00 مساء</p>
        </div>
      </div>
      <div className="mt-16 text-center text-gray-300 text-[10px] font-black uppercase tracking-[5px]">
        © 2026 MNAQISH OZ - ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}