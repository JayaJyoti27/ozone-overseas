import { Linkedin, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const services = ["Healthcare Recruitment", "Technical Recruitment", "Visa & Immigration", "Documentation", "Prometric Coaching", "Pre-departure Grooming"];
  const destinations = ["Saudi Arabia", "UAE", "Qatar", "Oman", "Kuwait", "Canada", "United Kingdom", "Australia"];
  const company = ["About", "Contact", "Careers"];

  return (
    <footer className="bg-[#0D1B2A] pt-[72px] pb-10 text-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div>
            <div className="text-[22px] font-extrabold">
              <span className="text-white">Ozone</span><span className="text-[#0BAF8A]"> Overseas</span>
            </div>
            <div className="mt-2 text-[14px] text-[#64748B]">MEA Licensed International Recruitment Since 2009</div>
          </div>
          <div className="flex items-center gap-3">
            {[Linkedin, Instagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/15" style={{ background: "rgba(255,255,255,0.06)" }}>
                <Icon size={16} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[40fr_30fr_30fr] gap-10 py-10">
          <div className="text-[14px] text-[#94A3B8] leading-[1.8]">
            <div className="text-white font-semibold mb-2">Ozone Overseas Consultants Pvt. Ltd.</div>
            123 Recruitment House, MG Road<br />
            Kochi, Kerala 682016, India<br />
            +91 484 000 0000<br />
            hello@ozoneoverseas.com
          </div>
          <div>
            <div className="text-[12px] font-bold text-white tracking-[0.08em] uppercase mb-4">Services</div>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}><a href="#" className="text-[14px] text-[#64748B] hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[12px] font-bold text-white tracking-[0.08em] uppercase mb-4">Destinations</div>
            <ul className="space-y-2 mb-6">
              {destinations.map((s) => (
                <li key={s}><a href="#" className="text-[14px] text-[#64748B] hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
            <div className="text-[12px] font-bold text-white tracking-[0.08em] uppercase mb-4">Company</div>
            <ul className="space-y-2">
              {company.map((s) => (
                <li key={s}><a href="#" className="text-[14px] text-[#64748B] hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <span className="text-[13px] text-[#475569]">© 2025 Ozone Overseas Consultants Pvt. Ltd. All rights reserved.</span>
          <span className="text-[13px] text-[#475569]">MEA License No. B-0123/KER/PER/1000+/5/8888/2009 · Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href="#" className="group fixed bottom-6 right-6 z-[9999] flex items-center bg-[#25D366] rounded-full text-white overflow-hidden h-[52px] pl-[14px] pr-[14px] hover:pr-5 transition-all duration-300" style={{ boxShadow: "0 8px 24px rgba(37,211,102,0.4)" }}>
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="max-w-0 group-hover:max-w-[200px] overflow-hidden whitespace-nowrap text-[13px] font-semibold transition-all duration-300 group-hover:ml-3">Chat with us</span>
    </a>
  );
}

export function ScrollProgress() {
  return <div className="scroll-progress-bar fixed top-0 left-0 h-[3px] bg-[#0BAF8A] z-[10000] w-0" />;
}
