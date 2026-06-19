import { useState } from "react";
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
          </aside>
        </div>
      )}
    </>
  );
}
