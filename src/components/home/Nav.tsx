import { useState } from "react";
<<<<<<< HEAD
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="text-[24px] font-black tracking-tight">
            <span className="text-slate-900">Ozone</span>
            <span className="text-emerald-500"> Overseas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            {/* Countries */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition hover:text-emerald-600">
                Countries
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                   <Link
                    to="/countries"
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    Home
                  </Link>
                  <Link
                    to="/country-pages/Saudi"
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    🇸🇦 Saudi Arabia
                  </Link>

                  <Link
                    to="/country-pages/USA"
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    🇺🇸 USA
                  </Link>

                  <Link
                    to="/country-pages/Oman"
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    🇴🇲 Oman
                  </Link>

                  <Link
                    to="/country-pages/Australia"
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    🇦🇺 Australia
                  </Link>

                  <div className="my-2 border-t border-slate-100" />

                  <Link
                    to="/"
                    className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
                  >
                    View All →
                  </Link>
                </div>
              </div>
            </div>
            {/* Candidates */}
            <div className="relative group">
  <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition hover:text-emerald-600">
    Candidates
    <ChevronDown
      size={16}
      className="transition-transform duration-200 group-hover:rotate-180"
    />
  </button>

  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100">
    <div className="w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">

      <Link
        to="/candidates"
        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
      >
        Home
      </Link>



      <Link
        to="/candidate-portal"
        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
      >
        Dashboard
      </Link>

      <div className="my-2 border-t border-slate-100" />

      <Link
        to="/jobs"
        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
      >
        Find Jobs →
      </Link>

    </div>
  </div>
</div>

            {/* Employers */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition hover:text-slate-900">
                Employers
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 top-full pt-3">
                <div className="invisible w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <Link to="/employers" className="block border-b px-5 py-3 hover:bg-slate-50">
                    Home
                  </Link>

                  <Link to="/hire" className="block border-b px-5 py-3 hover:bg-slate-50">
                    Hire Talent
                  </Link>

                  <Link to="/employer-portal" className="block px-5 py-3 hover:bg-slate-50">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/hire">
              <button className="rounded-xl border border-slate-900 px-5 py-2.5 font-semibold transition hover:bg-slate-900 hover:text-white">
                Hire Talent
              </button>
            </Link>

            <Link to="/jobs">
              <button className="rounded-xl bg-slate-900 px-5 py-2.5 font-semibold text-white transition hover:bg-slate-800">
                Find Jobs
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          <aside className="absolute right-0 top-0 h-full w-[320px] overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>

              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {/* Countries */}
              <div>
                <h3 className="mb-3 font-semibold">Countries</h3>

                <Link to="/countries" onClick={() => setOpen(false)} className="block py-2">
                  Home
                </Link>

                <Link
                  to="/country-pages/Saudi"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  Saudi Arabia
                </Link>

                <Link to="/country-pages/USA" onClick={() => setOpen(false)} className="block py-2">
                  USA
                </Link>

                <Link
                  to="/country-pages/Oman"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  Oman
                </Link>

                <Link
                  to="/country-pages/Australia"
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  Australia
                </Link>
              </div>

              {/* Candidates */}
              <div>
                <h3 className="mb-3 font-semibold">Candidates</h3>

                <Link to="/candidates" onClick={() => setOpen(false)} className="block py-2">
                  Home
                </Link>

                <Link to="/jobs" onClick={() => setOpen(false)} className="block py-2">
                  Jobs
                </Link>

                <Link to="/candidate-portal" onClick={() => setOpen(false)} className="block py-2">
                  Dashboard
                </Link>
              </div>

              {/* Employers */}
              <div>
                <h3 className="mb-3 font-semibold">Employers</h3>

                <Link to="/employers" onClick={() => setOpen(false)} className="block py-2">
                  Home
                </Link>

                <Link to="/hire" onClick={() => setOpen(false)} className="block py-2">
                  Hire Talent
                </Link>

                <Link to="/employer-portal" onClick={() => setOpen(false)} className="block py-2">
                  Dashboard
                </Link>
              </div>

              <div className="border-t pt-6">
                <Link to="/hire" onClick={() => setOpen(false)} className="mb-3 block">
                  <button className="w-full rounded-xl border border-slate-900 py-3 font-semibold">
                    Hire Talent
                  </button>
                </Link>

                <Link to="/jobs" onClick={() => setOpen(false)} className="block">
                  <button className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white">
                    Find Jobs
                  </button>
                </Link>
              </div>
            </div>
=======
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
>>>>>>> 67589509f35f39894a5900b3fb234793f5968eb9
          </aside>
        </div>
      )}
    </>
  );
}
