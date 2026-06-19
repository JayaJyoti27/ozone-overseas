import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "../components/home/Nav";
export const Route = createFileRoute("/employer-portal")({
  head: () => ({
    meta: [
      { title: "Employer Portal — Ozone" },
      { name: "description", content: "Manage your hiring requirements and organization profile." },
    ],
  }),
  component: EmployerPortal,
});

// ---------- Hardcoded data (clean swap-in points) ----------

const employerProfile = {
  orgName: "Al Hammadi Hospital",
  contactName: "Faisal Al-Otaibi",
  email: "f.alotaibi@alhammadi.sa",
  phoneCode: "+966",
  phone: "55 412 9082",
  orgType: "Hospital/Healthcare",
  hq: "Riyadh, Saudi Arabia",
};

type Status = "SOURCING" | "CANDIDATES SHARED" | "INTERVIEWING" | "OFFER STAGE" | "CLOSED";

interface Listing {
  id: string;
  role: string;
  positions: number;
  location: string;
  postedAgo: string;
  status: Status;
  progress: number;
  history: { stage: string; date: string }[];
}

const initialListings: Listing[] = [
  {
    id: "REQ-2026-0512",
    role: "ICU Staff Nurse",
    positions: 4,
    location: "Riyadh, Saudi Arabia",
    postedAgo: "12 days ago",
    status: "INTERVIEWING",
    progress: 60,
    history: [
      { stage: "Submitted", date: "Jun 06" },
      { stage: "Sourcing", date: "Jun 07" },
      { stage: "Candidates Shared", date: "Jun 11" },
      { stage: "Interviewing", date: "Jun 16" },
    ],
  },
  {
    id: "REQ-2026-0518",
    role: "OT Nurse",
    positions: 2,
    location: "Dubai, UAE",
    postedAgo: "8 days ago",
    status: "CANDIDATES SHARED",
    progress: 40,
    history: [
      { stage: "Submitted", date: "Jun 10" },
      { stage: "Sourcing", date: "Jun 11" },
      { stage: "Candidates Shared", date: "Jun 15" },
    ],
  },
  {
    id: "REQ-2026-0421",
    role: "Biomedical Technician",
    positions: 1,
    location: "Doha, Qatar",
    postedAgo: "30 days ago",
    status: "CLOSED",
    progress: 100,
    history: [
      { stage: "Submitted", date: "May 19" },
      { stage: "Candidates Shared", date: "May 24" },
      { stage: "Offer Stage", date: "Jun 02" },
      { stage: "Closed", date: "Jun 12" },
    ],
  },
  {
    id: "REQ-2026-0610",
    role: "Civil Site Engineer",
    positions: 3,
    location: "Muscat, Oman",
    postedAgo: "3 days ago",
    status: "SOURCING",
    progress: 15,
    history: [
      { stage: "Submitted", date: "Jun 15" },
      { stage: "Sourcing", date: "Jun 16" },
    ],
  },
];

// ---------- Hooks / helpers ----------

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function statusStyle(s: Status): React.CSSProperties {
  switch (s) {
    case "SOURCING":
      return { background: "#EFF6FF", border: "1px solid #93C5FD", color: "#1D4ED8" };
    case "CANDIDATES SHARED":
      return { background: "#FFFBEB", border: "1px solid #FCD34D", color: "#B45309" };
    case "INTERVIEWING":
      return { background: "rgba(11,175,138,0.1)", border: "1px solid #0BAF8A", color: "#0BAF8A" };
    case "OFFER STAGE":
      return { background: "#F0FDF4", border: "1px solid #86EFAC", color: "#16A34A" };
    case "CLOSED":
      return {
        background: "#0F1C2E",
        border: "1px solid #0F1C2E",
        color: "#FFFFFF",
        fontWeight: 700,
      };
  }
}

// ---------- Component ----------

function EmployerPortal() {
  const [listings, setListings] = useState<Listing[]>(initialListings);
  const [openRow, setOpenRow] = useState<string | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const [refNum, setRefNum] = useState("REQ-2026-0618");

  // form state
  const [role, setRole] = useState("");
  const [positions, setPositions] = useState(1);
  const [country, setCountry] = useState("");
  const [exp, setExp] = useState("");
  const [orgType, setOrgType] = useState("");
  const [notes, setNotes] = useState("");

  const canSubmit = role && country;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const nextRef = `REQ-2026-${String(Math.floor(Math.random() * 900) + 700)}`;
    setRefNum(nextRef);
    const newListing: Listing = {
      id: nextRef,
      role,
      positions,
      location: country,
      postedAgo: "just now",
      status: "SOURCING",
      progress: 10,
      history: [{ stage: "Submitted", date: "Today" }],
    };
    setListings((prev) => [newListing, ...prev]);
    setSubmitted(true);
  };

  const resetForm = () => {
    setRole("");
    setPositions(1);
    setCountry("");
    setExp("");
    setOrgType("");
    setNotes("");
    setSubmitted(false);
  };

  const [profile, setProfile] = useState(employerProfile);
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2400);
  };

  return (
    <div
      style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        background: "#EEF2F7",
        color: "#0D1B2A",
      }}
    >
      <Nav />

      {/* ===== SECTION 1: WELCOME ===== */}
      <Section1 orgName={profile.orgName} listings={listings} onCta={() => scrollTo("post")} />

      {/* ===== SECTION 2: LISTINGS ===== */}
      <section style={{ background: "#FFFFFF", padding: "90px 24px" }}>
        <Eyebrow>YOUR REQUIREMENTS</Eyebrow>
        <Headline>What you've posted with us.</Headline>
        <Subtext>Every requirement you've submitted, and where it stands.</Subtext>
        <div style={{ maxWidth: 760, margin: "48px auto 0" }}>
          {listings.map((l) => {
            const open = openRow === l.id;
            return (
              <div
                key={l.id}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DDE3ED",
                  borderRadius: 10,
                  marginBottom: 10,
                  overflow: "hidden",
                  transition: "box-shadow 0.2s",
                  boxShadow: open ? "0 2px 16px rgba(15,28,46,0.07)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenRow(open ? null : l.id)}
                  className="w-full text-left"
                  style={{ padding: "18px 24px", background: "transparent" }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "#0D1B2A" }}>
                        {l.role}
                      </div>
                      <div style={{ fontSize: 13, color: "#4A5568", marginTop: 4 }}>
                        {l.positions} {l.positions === 1 ? "position" : "positions"} · {l.location}{" "}
                        · Posted {l.postedAgo}
                      </div>
                    </div>
                    <span
                      style={{
                        ...statusStyle(l.status),
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        padding: "5px 10px",
                        borderRadius: 6,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {l.status}
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      height: 4,
                      background: "#DDE3ED",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${l.progress}%`,
                        height: "100%",
                        background: "#0BAF8A",
                        transition: "width 0.4s",
                      }}
                    />
                  </div>
                </button>
                <div
                  style={{
                    maxHeight: open ? 240 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div style={{ padding: "0 24px 20px 24px" }}>
                    <div style={{ borderLeft: "2px solid #DDE3ED", paddingLeft: 14 }}>
                      {l.history.map((h, i) => (
                        <div key={i} style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.9 }}>
                          {h.stage} — {h.date}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== SECTION 3: POST A REQUIREMENT ===== */}
      <section id="post" style={{ background: "#F0F4F9", padding: "90px 24px" }}>
        <Eyebrow>POST A REQUIREMENT</Eyebrow>
        <Headline>Tell us who you're looking for.</Headline>
        <Subtext>Free to submit. No obligation. Takes about three minutes.</Subtext>

        <div
          style={{
            maxWidth: 600,
            margin: "48px auto 0",
            background: "#FFFFFF",
            border: "1px solid #DDE3ED",
            borderRadius: 14,
            padding: 40,
            boxShadow: "0 2px 16px rgba(15,28,46,0.07)",
            transition: "all 0.3s ease",
          }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 24 }}>
                We'll use the contact details on your profile.
              </p>

              <Field label="Role / Category">
                <Select value={role} onChange={(v) => setRole(v)}>
                  <option value="">Select a role</option>
                  {[
                    "ICU Nurse",
                    "OT Nurse",
                    "Staff Nurse",
                    "Biomedical Technician",
                    "Civil Engineer",
                    "Mechanical Technician",
                    "Electrical Supervisor",
                    "Other",
                  ].map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Number of Positions">
                <div className="flex items-center gap-2">
                  <Stepper onClick={() => setPositions(Math.max(1, positions - 1))}>−</Stepper>
                  <input
                    type="number"
                    value={positions}
                    onChange={(e) => setPositions(Math.max(1, parseInt(e.target.value) || 1))}
                    style={inputStyle}
                    className="w-24 text-center"
                  />
                  <Stepper onClick={() => setPositions(positions + 1)}>+</Stepper>
                </div>
              </Field>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Preferred Country">
                  <Select value={country} onChange={(v) => setCountry(v)}>
                    <option value="">Select country</option>
                    {[
                      "Saudi Arabia",
                      "UAE",
                      "Qatar",
                      "Oman",
                      "Kuwait",
                      "Malaysia",
                      "Singapore",
                      "Canada",
                    ].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Field label="Experience Required">
                  <RadioRow
                    name="exp"
                    value={exp}
                    onChange={setExp}
                    options={["Fresher", "1–3 yrs", "3–5 yrs", "5+ yrs"]}
                  />
                </Field>
              </div>

              <Field label="Organization Type">
                <RadioRow
                  name="orgtype"
                  value={orgType}
                  onChange={setOrgType}
                  options={[
                    "Hospital/Healthcare",
                    "Construction/Engineering",
                    "Oil & Gas",
                    "Other",
                  ]}
                />
              </Field>

              <Field label="Additional Notes">
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Anything else we should know about this requirement?"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </Field>

              <button
                type="submit"
                disabled={!canSubmit}
                style={{
                  marginTop: 32,
                  width: "100%",
                  padding: "16px 32px",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 15,
                  background: canSubmit ? "#0F1C2E" : "#DDE3ED",
                  color: canSubmit ? "#FFFFFF" : "#94A3B8",
                  cursor: canSubmit ? "pointer" : "not-allowed",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (canSubmit) e.currentTarget.style.background = "#162840";
                }}
                onMouseLeave={(e) => {
                  if (canSubmit) e.currentTarget.style.background = "#0F1C2E";
                }}
              >
                Submit Requirement →
              </button>
            </form>
          ) : (
            <div className="text-center" style={{ animation: "fadeIn 0.4s ease" }}>
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: "1.5px solid #0BAF8A",
                  background: "transparent",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0BAF8A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0D1B2A", marginTop: 20 }}>
                Requirement received.
              </h3>
              <p style={{ fontSize: 14, color: "#4A5568", marginTop: 10, lineHeight: 1.7 }}>
                Our team is reviewing your requirement now. Expect your first pre-screened candidate
                profile within 48 hours.
              </p>
              <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 14 }}>Reference: {refNum}</p>
              <button
                onClick={resetForm}
                style={{
                  marginTop: 24,
                  border: "1.5px solid #0D1B2A",
                  color: "#0D1B2A",
                  background: "transparent",
                  borderRadius: 10,
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Submit Another
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== SECTION 4: PROFILE ===== */}
      <section id="profile" style={{ background: "#FFFFFF", padding: "90px 24px" }}>
        <Eyebrow>YOUR PROFILE</Eyebrow>
        <Headline>Keep your organization's details current.</Headline>
        <Subtext>This is what our team uses to reach you and verify your account.</Subtext>

        <form onSubmit={handleSave} style={{ maxWidth: 600, margin: "48px auto 0" }}>
          <Field label="Organization Name">
            <input
              value={profile.orgName}
              onChange={(e) => setProfile({ ...profile, orgName: e.target.value })}
              style={inputStyle}
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Contact Person Name">
              <input
                value={profile.contactName}
                onChange={(e) => setProfile({ ...profile, contactName: e.target.value })}
                style={inputStyle}
              />
            </Field>
            <Field label="Work Email">
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                style={inputStyle}
              />
            </Field>
          </div>

          <Field label="Phone / WhatsApp Number">
            <div className="flex gap-2">
              <select
                value={profile.phoneCode}
                onChange={(e) => setProfile({ ...profile, phoneCode: e.target.value })}
                style={{ ...inputStyle, width: 110 }}
              >
                {["+91", "+971", "+966", "+974"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <input
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </Field>

          <Field label="Organization Type">
            <RadioRow
              name="profileOrg"
              value={profile.orgType}
              onChange={(v) => setProfile({ ...profile, orgType: v })}
              options={["Hospital/Healthcare", "Construction/Engineering", "Oil & Gas", "Other"]}
            />
          </Field>

          <Field label="HQ Location">
            <input
              value={profile.hq}
              onChange={(e) => setProfile({ ...profile, hq: e.target.value })}
              style={inputStyle}
            />
          </Field>

          <button
            type="submit"
            style={{
              marginTop: 28,
              padding: "16px 32px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 15,
              background: "#0BAF8A",
              color: "#FFFFFF",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#09A07F")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0BAF8A")}
          >
            Save Changes
          </button>

          {savedFlash && (
            <div
              style={{
                marginTop: 14,
                background: "#F0FDF4",
                border: "1px solid #86EFAC",
                color: "#16A34A",
                borderRadius: 8,
                padding: "10px 16px",
                fontSize: 13,
                animation: "fadeIn 0.3s ease",
              }}
            >
              Saved.
            </div>
          )}
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#0F1C2E", color: "#FFFFFF", padding: "60px 24px 40px" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="text-[20px] font-extrabold">
              ozone<span style={{ color: "#0BAF8A" }}>.</span>
            </div>
            <p style={{ color: "#94A3B8", fontSize: 13, marginTop: 12, lineHeight: 1.7 }}>
              International recruitment, done with care.
            </p>
          </div>
          <FooterCol title="Company" links={["About", "Careers", "Contact"]} />
          <FooterCol
            title="For Employers"
            links={["Post a Requirement", "How it Works", "Pricing"]}
          />
          <FooterCol title="Legal" links={["Privacy", "Terms", "Cookies"]} />
        </div>
        <div
          className="max-w-6xl mx-auto mt-12 pt-6 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8", fontSize: 13 }}
        >
          <span>© 2026 Ozone Recruitment. All rights reserved.</span>
          <span>Made with care.</span>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.in { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
}

// ---------- Subcomponents ----------

function Section1({
  orgName,
  listings,
  onCta,
}: {
  orgName: string;
  listings: Listing[];
  onCta: () => void;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const open = listings.filter((l) => l.status !== "CLOSED").length;
  return (
    <section style={{ background: "#EEF2F7", padding: "140px 24px 60px" }}>
      <div
        ref={ref}
        className={`reveal ${shown ? "in" : ""}`}
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        <div className="flex items-center gap-3">
          <span style={{ display: "inline-block", width: 28, height: 2, background: "#0BAF8A" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#94A3B8" }}>
            YOUR PORTAL
          </span>
        </div>
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: "#0D1B2A",
            lineHeight: 1.15,
            marginTop: 18,
            letterSpacing: "-0.02em",
          }}
        >
          Welcome back, <span style={{ color: "#0BAF8A" }}>{orgName.split(" ")[0]}.</span>
        </h1>
        <div className="flex items-center gap-4 flex-wrap" style={{ marginTop: 20 }}>
          <span style={{ fontSize: 15, color: "#4A5568", fontWeight: 500 }}>
            {open} open requirements
          </span>
          <span style={{ width: 1, height: 16, background: "#DDE3ED" }} />
          <span style={{ fontSize: 15, color: "#4A5568", fontWeight: 500 }}>
            18 candidates shared
          </span>
        </div>
        <button
          onClick={onCta}
          style={{
            marginTop: 28,
            background: "#0F1C2E",
            color: "#FFFFFF",
            borderRadius: 10,
            padding: "16px 28px",
            fontWeight: 600,
            fontSize: 15,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#162840")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#0F1C2E")}
        >
          Post a New Requirement →
        </button>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3" style={{ marginBottom: 14 }}>
      <span style={{ width: 32, height: 1, background: "#0BAF8A", display: "inline-block" }} />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#94A3B8" }}>
        {children}
      </span>
      <span style={{ width: 32, height: 1, background: "#0BAF8A", display: "inline-block" }} />
    </div>
  );
}

function Headline({ children }: { children: React.ReactNode }) {
  const { ref, shown } = useReveal<HTMLHeadingElement>();
  return (
    <h2
      ref={ref}
      className={`reveal ${shown ? "in" : ""} text-center`}
      style={{
        fontSize: 36,
        fontWeight: 800,
        color: "#0D1B2A",
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
  );
}

function Subtext({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-center"
      style={{
        fontSize: 15,
        color: "#4A5568",
        maxWidth: 460,
        margin: "12px auto 0",
        lineHeight: 1.6,
      }}
    >
      {children}
    </p>
  );
}

const inputStyle: React.CSSProperties = {
  border: "1px solid #DDE3ED",
  borderRadius: 8,
  padding: "12px 16px",
  fontSize: 15,
  color: "#0D1B2A",
  outline: "none",
  width: "100%",
  background: "#FFFFFF",
  fontFamily: "inherit",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#0D1B2A",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          display: "block",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} style={inputStyle}>
      {children}
    </select>
  );
}

function Stepper({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: 32,
        height: 32,
        border: "1px solid #DDE3ED",
        borderRadius: 6,
        background: "#FFFFFF",
        color: "#0D1B2A",
        fontSize: 16,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
}

function RadioRow({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o;
        return (
          <label
            key={o}
            style={{
              border: active ? "1px solid #0BAF8A" : "1px solid #DDE3ED",
              background: active ? "rgba(11,175,138,0.1)" : "#FFFFFF",
              color: active ? "#0BAF8A" : "#0D1B2A",
              borderRadius: 8,
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            <input
              type="radio"
              name={name}
              value={o}
              checked={active}
              onChange={() => onChange(o)}
              style={{ display: "none" }}
            />
            {o}
          </label>
        );
      })}
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      <ul style={{ marginTop: 14 }}>
        {links.map((l) => (
          <li key={l} style={{ marginBottom: 8 }}>
            <a href="#" style={{ color: "#94A3B8", fontSize: 14 }}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
