import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Services", "Countries", "For Employers", "For Candidates", "About"];
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] border-b border-[#DDE3ED]" style={{ background: "rgba(238,242,247,0.96)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-[1240px] mx-auto h-full px-6 flex items-center justify-between">
          <a href="#" className="text-[20px] font-extrabold tracking-tight">
            <span className="text-[#0D1B2A]">Ozone</span>
            <span className="text-[#0BAF8A]"> Overseas</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l} href="#" className="text-[14px] font-medium text-[#4A5568] hover:text-[#0D1B2A] transition-colors duration-200">{l}</a>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button className="border-[1.5px] border-[#0D1B2A] text-[#0D1B2A] bg-transparent rounded-md px-5 py-2.5 text-[14px] font-semibold hover:bg-[#0D1B2A] hover:text-white transition-colors">Post a Requirement</button>
            <button className="bg-[#0F1C2E] text-white rounded-md px-5 py-2.5 text-[14px] font-semibold hover:bg-[#162840] transition-colors">Apply Now</button>
          </div>
          <button className="lg:hidden text-[#0D1B2A]" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu strokeWidth={2} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 bottom-0 w-[300px] bg-white p-6 shadow-xl flex flex-col gap-4 animate-[slide-in-right_0.25s_ease-out]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[18px] font-extrabold"><span className="text-[#0D1B2A]">Ozone</span><span className="text-[#0BAF8A]"> Overseas</span></span>
              <button onClick={() => setOpen(false)}><X /></button>
            </div>
            {links.map((l) => (
              <a key={l} href="#" className="text-[15px] font-medium text-[#0D1B2A] py-2 border-b border-[#EEF2F7]">{l}</a>
            ))}
            <button className="mt-4 border-[1.5px] border-[#0D1B2A] text-[#0D1B2A] rounded-md py-2.5 text-[14px] font-semibold">Post a Requirement</button>
            <button className="bg-[#0F1C2E] text-white rounded-md py-2.5 text-[14px] font-semibold">Apply Now</button>
          </aside>
        </div>
      )}
    </>
  );
}
