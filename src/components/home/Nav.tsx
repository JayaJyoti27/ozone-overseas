import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-slate-200 bg-white/95 backdrop-blur-md">
        {" "}
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Link to="/" className="text-[24px] font-black tracking-tight">
            <span className="text-slate-900">Ozone</span>
            <span className="text-emerald-500"> Overseas</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/countries"
              className="flex items-center gap-1 text-[15px] font-medium text-slate-700 hover:text-emerald-600"
            >
              Countries
              <ChevronDown size={16} />
            </Link>

            <Link
              to="/candidates"
              className="flex items-center gap-1 text-[15px] font-medium text-slate-700 hover:text-emerald-600"
            >
              Candidates
              <ChevronDown size={16} />
            </Link>

            <Link
              to="/employers"
              className="flex items-center gap-1 text-[15px] font-medium text-slate-700 hover:text-emerald-600"
            >
              Employers
              <ChevronDown size={16} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/hire">
              <button className="rounded-xl border border-slate-900 px-5 py-2.5 font-semibold hover:bg-slate-900 hover:text-white">
                Hire Talent
              </button>
            </Link>

            <Link to="/jobs">
              <button className="rounded-xl bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-slate-800">
                Find Jobs
              </button>
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          <aside className="absolute right-0 top-0 h-full w-[320px] bg-white p-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-5">
              <Link to="/countries">Countries</Link>
              <Link to="/candidates">Candidates</Link>
              <Link to="/employers">Employers</Link>
              <Link to="/jobs">Jobs</Link>
              <Link to="/hire">Hire Talent</Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
