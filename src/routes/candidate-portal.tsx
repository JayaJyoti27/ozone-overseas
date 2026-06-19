import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { Nav } from "../components/home/Nav";
export const Route = createFileRoute("/candidate-portal")({
  head: () => ({
    meta: [
      { title: "Candidate Portal — Ozone" },
      {
        name: "description",
        content: "Track your applications, manage documents, and keep your profile current.",
      },
      { property: "og:title", content: "Candidate Portal — Ozone" },
      {
        property: "og:description",
        content: "Track your applications, manage documents, and keep your profile current.",
      },
    ],
  }),
  component: CandidatePortal,
});

// ---------- Design tokens (kept here so swap-out is trivial) ----------
const T = {
  bg: "#EEF2F7",
  surface: "#FFFFFF",
  altBg: "#F0F4F9",
  navy: "#0F1C2E",
  teal: "#0BAF8A",
  tealHover: "#09A07F",
  tealLight: "rgba(11,175,138,0.1)",
  textNavy: "#0D1B2A",
  textBody: "#4A5568",
  textMuted: "#94A3B8",
  border: "#DDE3ED",
  shadow: "0 2px 16px rgba(15,28,46,0.07)",
  font: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
};

// ---------- Hardcoded data (swap with real data later) ----------
const candidate = {
  firstName: "Sneha",
  lastInitial: "K.",
  fullName: "Sneha Krishnan",
  email: "sneha.k@example.com",
  phone: "+91 98765 43210",
  location: "Kochi, India",
  role: "ICU Staff Nurse",
  yearsExperience: "5",
  license: "RN — Indian Nursing Council",
  profileCompletion: 80,
  missingItem: "Add your license certificate to reach 100%.",
};

type DocStatus = "UPLOADED" | "PENDING" | "NOT STARTED";
const initialDocuments: { id: string; title: string; status: DocStatus; filename?: string }[] = [
  { id: "cv", title: "Updated CV", status: "UPLOADED", filename: "sneha-cv-2024.pdf" },
  { id: "passport", title: "Passport Copy", status: "UPLOADED", filename: "passport.pdf" },
  { id: "license", title: "License Certificate", status: "PENDING" },
  { id: "medical", title: "Medical Fitness Certificate", status: "NOT STARTED" },
];

type AppStatus =
  | "SHORTLISTED"
  | "IN REVIEW"
  | "DOCS SENT"
  | "VISA APPROVED"
  | "INTERVIEW SCHEDULED"
  | "PLACED";

const applications: {
  id: string;
  flag: string;
  role: string;
  hospital: string;
  status: AppStatus;
  progress: number;
  history: { stage: string; date: string }[];
}[] = [
  {
    id: "saudi",
    flag: "🇸🇦",
    role: "ICU Staff Nurse",
    hospital: "Al Hammadi Hospital, Saudi Arabia",
    status: "INTERVIEW SCHEDULED",
    progress: 60,
    history: [
      { stage: "Applied", date: "Mar 4" },
      { stage: "Reviewed", date: "Mar 9" },
      { stage: "Shortlisted", date: "Mar 14" },
      { stage: "Interview scheduled", date: "Mar 21" },
    ],
  },
  {
    id: "uae",
    flag: "🇦🇪",
    role: "OT Nurse",
    hospital: "NMC Healthcare, Dubai",
    status: "IN REVIEW",
    progress: 30,
    history: [
      { stage: "Applied", date: "Mar 18" },
      { stage: "Reviewed", date: "Mar 22" },
    ],
  },
  {
    id: "qatar",
    flag: "🇶🇦",
    role: "Biomedical Tech",
    hospital: "Hamad Medical Corporation, Qatar",
    status: "PLACED",
    progress: 100,
    history: [
      { stage: "Applied", date: "Nov 12" },
      { stage: "Shortlisted", date: "Nov 25" },
      { stage: "Docs sent", date: "Dec 9" },
      { stage: "Visa approved", date: "Jan 18" },
      { stage: "Placed", date: "Feb 4" },
    ],
  },
];

// ---------- Status tag styles ----------
const statusTagStyle: Record<AppStatus, React.CSSProperties> = {
  SHORTLISTED: { background: "#F0FDF4", border: "1px solid #86EFAC", color: "#16A34A" },
  "IN REVIEW": { background: "#FFFBEB", border: "1px solid #FCD34D", color: "#B45309" },
  "DOCS SENT": { background: "#EFF6FF", border: "1px solid #93C5FD", color: "#1D4ED8" },
  "VISA APPROVED": { background: "#F0FDF4", border: "1px solid #4ADE80", color: "#15803D" },
  "INTERVIEW SCHEDULED": { background: T.tealLight, border: `1px solid ${T.teal}`, color: T.teal },
  PLACED: { background: T.navy, border: `1px solid ${T.navy}`, color: "#FFFFFF", fontWeight: 700 },
};

function StatusTag({ status }: { status: AppStatus }) {
  return (
    <span
      style={{
        ...statusTagStyle[status],
        fontSize: 11,
        fontWeight: status === "PLACED" ? 700 : 600,
        letterSpacing: "0.06em",
        padding: "5px 10px",
        borderRadius: 999,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

function DocStatusTag({ status }: { status: DocStatus }) {
  if (status === "UPLOADED") {
    return (
      <span
        style={{
          background: "#F0FDF4",
          border: "1px solid #86EFAC",
          color: "#16A34A",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.06em",
          padding: "5px 10px",
          borderRadius: 999,
        }}
      >
        UPLOADED
      </span>
    );
  }
  if (status === "PENDING") {
    return (
      <span
        style={{
          background: "#FFFBEB",
          border: "1px solid #FCD34D",
          color: "#B45309",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.06em",
          padding: "5px 10px",
          borderRadius: 999,
        }}
      >
        PENDING
      </span>
    );
  }
  return (
    <span
      style={{
        background: "transparent",
        border: `1px solid ${T.border}`,
        color: T.textMuted,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        padding: "5px 10px",
        borderRadius: 999,
      }}
    >
      NOT STARTED
    </span>
  );
}

// ---------- Eyebrow components ----------
function EyebrowLeft({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "inline-block", width: 28, height: 2, background: T.teal }} />
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: T.textMuted,
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function EyebrowCenter({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
      <span
        style={{ display: "inline-block", width: 32, height: 0, borderTop: `2px solid ${T.teal}` }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: T.textMuted,
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
      <span
        style={{ display: "inline-block", width: 32, height: 0, borderTop: `2px solid ${T.teal}` }}
      />
    </div>
  );
}

// ---------- Fade-in-on-view hook ----------
function useFadeIn() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(14px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
    } as React.CSSProperties,
  };
}

// ---------- Nav ----------
function Progress({ value, width = "100%" }: { value: number; width?: number | string }) {
  return (
    <div
      style={{
        width,
        height: 8,
        background: T.border,
        borderRadius: 999,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: T.teal,
          borderRadius: 999,
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}
// ---------- Section 1: Welcome ----------
function WelcomeSection() {
  const h = useFadeIn();
  return (
    <section style={{ background: T.bg, padding: "140px 24px 60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EyebrowLeft>Your Portal</EyebrowLeft>
        <h1
          ref={h.ref}
          style={{
            ...h.style,
            marginTop: 18,
            fontSize: 44,
            fontWeight: 800,
            color: T.textNavy,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Welcome back, <span style={{ color: T.teal }}>{candidate.firstName}.</span>
        </h1>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 15, color: T.textBody, fontWeight: 500 }}>
              Profile {candidate.profileCompletion}% complete
            </span>
            <Progress value={candidate.profileCompletion} width={120} />
          </div>
          <span style={{ width: 1, height: 16, background: T.border }} />
          <span style={{ fontSize: 15, color: T.textBody, fontWeight: 500 }}>
            3 active applications
          </span>
        </div>
      </div>
    </section>
  );
}

// ---------- Section 2: Applications ----------
function ApplicationsSection() {
  const h = useFadeIn();
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section style={{ background: T.surface, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EyebrowCenter>Your Applications</EyebrowCenter>
        <h2
          ref={h.ref}
          style={{
            ...h.style,
            marginTop: 18,
            textAlign: "center",
            fontSize: 36,
            fontWeight: 800,
            color: T.textNavy,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Where things stand right now.
        </h2>
        <div style={{ maxWidth: 760, margin: "48px auto 0" }}>
          {applications.map((app) => {
            const isOpen = expanded === app.id;
            return (
              <div
                key={app.id}
                style={{
                  border: `1px solid ${T.border}`,
                  borderRadius: 10,
                  background: T.surface,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : app.id)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "18px 24px",
                    fontFamily: T.font,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
                      <span style={{ fontSize: 20, lineHeight: 1 }}>{app.flag}</span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 600, color: T.textNavy }}>
                          {app.role}
                        </div>
                        <div style={{ fontSize: 14, color: T.textBody, marginTop: 2 }}>
                          {app.hospital}
                        </div>
                      </div>
                    </div>
                    <StatusTag status={app.status} />
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <Progress value={app.progress} />
                  </div>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    transition: "max-height 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: "0 24px 18px 24px" }}>
                    <div style={{ borderLeft: `2px solid ${T.border}`, paddingLeft: 14 }}>
                      {app.history.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: 13,
                            color: T.textMuted,
                            padding: "5px 0",
                          }}
                        >
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
      </div>
    </section>
  );
}

// ---------- Section 3: Documents ----------
function DocumentIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.textNavy}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </svg>
  );
}

function DocumentsSection() {
  const h = useFadeIn();
  const [docs, setDocs] = useState(initialDocuments);

  const handleUpload = (id: string, file: File) => {
    setDocs((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, status: "UPLOADED" as DocStatus, filename: file.name } : d,
      ),
    );
  };

  return (
    <section style={{ background: T.altBg, padding: "90px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EyebrowLeft>Your Documents</EyebrowLeft>
        <h2
          ref={h.ref}
          style={{
            ...h.style,
            marginTop: 18,
            fontSize: 40,
            fontWeight: 800,
            color: T.textNavy,
            lineHeight: 1.2,
            maxWidth: 480,
            letterSpacing: "-0.01em",
          }}
        >
          Everything we need to move you forward.
        </h2>
        <p
          style={{
            marginTop: 14,
            fontSize: 16,
            color: T.textBody,
            maxWidth: 440,
            lineHeight: 1.55,
          }}
        >
          Upload your CV and supporting documents here. We'll review and let you know if anything
          else is needed.
        </p>
        <div style={{ marginTop: 36, maxWidth: 680 }}>
          {docs.map((doc) => (
            <DocRow key={doc.id} doc={doc} onUpload={(file) => handleUpload(doc.id, file)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DocRow({
  doc,
  onUpload,
}: {
  doc: { id: string; title: string; status: DocStatus; filename?: string };
  onUpload: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hover, setHover] = useState(false);
  const buttonLabel = doc.status === "UPLOADED" ? "Replace" : "Upload";

  return (
    <div
      style={{
        border: `1px solid ${T.border}`,
        borderRadius: 10,
        background: T.surface,
        padding: "18px 20px",
        marginBottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          background: T.altBg,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <DocumentIcon />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: T.textNavy }}>{doc.title}</div>
        {doc.filename && (
          <div style={{ fontSize: 13, color: T.textMuted, marginTop: 3 }}>{doc.filename}</div>
        )}
      </div>
      <DocStatusTag status={doc.status} />
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx,image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onUpload(f);
          e.target.value = "";
        }}
      />
      <button
        onClick={() => inputRef.current?.click()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          border: `1.5px solid ${T.textNavy}`,
          background: hover ? T.textNavy : "transparent",
          color: hover ? "#FFFFFF" : T.textNavy,
          borderRadius: 6,
          padding: "8px 16px",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: T.font,
          transition: "background 0.15s ease, color 0.15s ease",
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

// ---------- Section 4: Profile ----------
function ProfileSection() {
  const h = useFadeIn();
  const [form, setForm] = useState({
    fullName: candidate.fullName,
    email: candidate.email,
    phone: candidate.phone,
    location: candidate.location,
    role: candidate.role,
    yearsExperience: candidate.yearsExperience,
    license: candidate.license,
  });
  const [saved, setSaved] = useState(false);
  const [hoverSave, setHoverSave] = useState(false);

  const handleSave = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3500);
  };

  return (
    <section style={{ background: T.surface, padding: "90px 24px 110px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <EyebrowCenter>Your Profile</EyebrowCenter>
        <h2
          ref={h.ref}
          style={{
            ...h.style,
            marginTop: 18,
            textAlign: "center",
            fontSize: 36,
            fontWeight: 800,
            color: T.textNavy,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Keep your details current.
        </h2>
        <p
          style={{
            textAlign: "center",
            margin: "12px auto 0",
            fontSize: 15,
            color: T.textBody,
            maxWidth: 460,
            lineHeight: 1.55,
          }}
        >
          This is what employers and our team see when reviewing your applications.
        </p>
        <div style={{ maxWidth: 600, margin: "48px auto 0" }}>
          <div style={{ display: "grid", gap: 20 }}>
            <Field
              label="Full Name"
              value={form.fullName}
              onChange={(v) => setForm({ ...form, fullName: v })}
            />
            <div
              className="cp-row-2"
              style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 1fr" }}
            >
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                type="email"
              />
              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                type="tel"
              />
            </div>
            <Field
              label="Current Location"
              value={form.location}
              onChange={(v) => setForm({ ...form, location: v })}
            />
            <Field
              label="Role / Specialty"
              value={form.role}
              onChange={(v) => setForm({ ...form, role: v })}
            />
            <div
              className="cp-row-2"
              style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 1fr" }}
            >
              <Field
                label="Years of Experience"
                value={form.yearsExperience}
                onChange={(v) => setForm({ ...form, yearsExperience: v })}
              />
              <Field
                label="License / Certification Type"
                value={form.license}
                onChange={(v) => setForm({ ...form, license: v })}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 15, color: T.textBody, fontWeight: 500 }}>
              Profile {candidate.profileCompletion}% complete
            </span>
            <Progress value={candidate.profileCompletion} width={120} />
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color: T.textMuted }}>
            {candidate.missingItem}
          </div>

          <button
            onClick={handleSave}
            onMouseEnter={() => setHoverSave(true)}
            onMouseLeave={() => setHoverSave(false)}
            style={{
              marginTop: 28,
              background: hoverSave ? T.tealHover : T.teal,
              color: "#FFFFFF",
              border: "none",
              borderRadius: 10,
              padding: "16px 32px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: T.font,
              transition: "background 0.15s ease",
            }}
          >
            Save Changes
          </button>

          <div
            style={{
              marginTop: 14,
              opacity: saved ? 1 : 0,
              transform: saved ? "translateY(0)" : "translateY(-4px)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
              pointerEvents: saved ? "auto" : "none",
            }}
          >
            <div
              style={{
                background: "#F0FDF4",
                border: "1px solid #86EFAC",
                color: "#16A34A",
                borderRadius: 8,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              Saved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block" }}>
      <span
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 700,
          color: T.textNavy,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: 6,
        }}
      >
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          border: `1px solid ${focus ? T.teal : T.border}`,
          borderRadius: 8,
          padding: "12px 16px",
          fontSize: 15,
          color: T.textNavy,
          background: T.surface,
          outline: "none",
          fontFamily: T.font,
          transition: "border-color 0.15s ease",
        }}
      />
    </label>
  );
}

// ---------- Page ----------
function CandidatePortal() {
  return (
    <div style={{ fontFamily: T.font, background: T.bg, color: T.textNavy, minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 768px) {
          .cp-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Nav />
      <main>
        <WelcomeSection />
        <ApplicationsSection />
        <DocumentsSection />
        <ProfileSection />
      </main>
    </div>
  );
}
