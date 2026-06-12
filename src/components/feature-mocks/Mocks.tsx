import {
  Phone,
  MessageSquare,
  CheckCircle2,
  CreditCard,
  Calendar,
  Star,
  FileText,
  User,
  BarChart3,
  Bell,
  DollarSign,
  MapPin,
  Camera,
  Image,
} from "lucide-react";

/* Shared base - floating card stack on cream */
const Stage = ({ children }: { children: React.ReactNode }) => (
  <div className="relative aspect-[4/5] w-full">{children}</div>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`absolute rounded-2xl bg-card border border-border shadow-floating p-4 ${className}`}
  >
    {children}
  </div>
);

/* ───────── VOICE AI ───────── */
export const VoiceCallMock = () => (
  <Stage>
    <Card className="top-0 left-0 w-[78%]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center">
          <Phone className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">
            Incoming call
          </div>
          <div className="text-xs text-muted-foreground">(512) 555-0142</div>
        </div>
      </div>
      <div className="space-y-2">
        <Row label="Name" value="Sarah Martinez" />
        <Row label="Issue" value="Water heater leak" />
        <Row label="Urgency" value="Emergency" tone="red" />
      </div>
    </Card>
    <Card className="bottom-0 right-0 w-[60%]">
      <div className="text-xs text-muted-foreground mb-1">Booked visit</div>
      <div className="text-base font-semibold text-foreground">
        Today · 4:30 PM
      </div>
      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Tech assigned
      </div>
    </Card>
  </Stage>
);

/* ───────── MESSAGING ───────── */
export const SmsMock = () => (
  <Stage>
    <Card className="top-0 left-0 w-[80%]">
      <div className="text-xs text-muted-foreground mb-2">From customer</div>
      <div className="rounded-xl bg-surface px-3 py-2 text-sm text-foreground mb-2">
        Hey! Is anyone available to come look at our AC today?
      </div>
      <div className="rounded-xl bg-foreground text-background px-3 py-2 text-sm ml-auto w-fit">
        Yes - 2 windows open: 1 PM or 4 PM. Which works?
      </div>
    </Card>
    <Card className="bottom-0 right-0 w-[55%]">
      <div className="flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-accent" />
        <div className="text-xs font-semibold text-foreground">
          Auto-replied · 3s
        </div>
      </div>
    </Card>
  </Stage>
);

/* ───────── QUOTES & INVOICES ───────── */
export const QuoteMock = () => (
  <Stage>
    <Card className="top-0 left-0 w-[82%]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs text-muted-foreground">Quote #1042</div>
          <div className="text-base font-semibold text-foreground">
            Sarah Martinez
          </div>
        </div>
        <FileText className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="space-y-1.5 mb-3">
        <Row label="Water heater (50 gal)" value="$1,180" />
        <Row label="Permit + haul-away" value="$160" />
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-xs text-muted-foreground">Total</span>
        <span className="text-lg font-bold text-foreground">$1,340</span>
      </div>
    </Card>
    <Card className="bottom-0 right-0 w-[58%]">
      <div className="flex items-center gap-2 mb-1">
        <CreditCard className="w-4 h-4 text-emerald-500" />
        <div className="text-xs font-semibold text-foreground">Paid</div>
      </div>
      <div className="text-base font-bold text-foreground">$1,340.00</div>
      <div className="text-xs text-muted-foreground">Apple Pay · 12s ago</div>
    </Card>
  </Stage>
);

/* ───────── CRM ───────── */
export const CrmMock = () => (
  <Stage>
    <Card className="top-0 left-0 w-[80%]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
          <User className="w-5 h-5 text-foreground" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">
            Sarah Martinez
          </div>
          <div className="text-xs text-muted-foreground">
            512 Oak St · Customer since 2024
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        <Row label="Open jobs" value="1" />
        <Row label="Lifetime value" value="$3,820" />
        <Row label="Last contact" value="Today" />
      </div>
    </Card>
    <Card className="bottom-0 right-0 w-[60%]">
      <div className="text-xs text-muted-foreground mb-1">Next visit</div>
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-accent" />
        <div className="text-sm font-semibold text-foreground">
          Thu, Apr 25 · 9 AM
        </div>
      </div>
    </Card>
  </Stage>
);

/* ───────── DASHBOARD ───────── */
export const DashMock = () => (
  <Stage>
    <Card className="top-0 left-0 w-[86%]">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-muted-foreground">Revenue · this week</div>
        <BarChart3 className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="text-3xl font-bold text-foreground mb-3">$18,420</div>
      <div className="flex items-end gap-1.5 h-16">
        {[40, 60, 35, 75, 90, 55, 80].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 rounded-sm bg-foreground/85"
          />
        ))}
      </div>
    </Card>
    <Card className="bottom-0 right-0 w-[55%]">
      <div className="flex items-center gap-2 mb-1">
        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
        <div className="text-xs font-semibold text-foreground">4.9 avg</div>
      </div>
      <div className="text-xs text-muted-foreground">128 reviews · 30d</div>
    </Card>
  </Stage>
);

/* ───────── FIELD PHOTOS & MAPS ───────── */
export const PhotoMock = () => (
  <Stage>
    <Card className="top-0 left-0 w-[86%]">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xs text-muted-foreground">Job #4823</div>
          <div className="text-sm font-semibold text-foreground">512 Oak St</div>
        </div>
        <Camera className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-square rounded-lg bg-surface flex items-center justify-center">
          <Image className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="aspect-square rounded-lg bg-surface flex items-center justify-center">
          <Image className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="aspect-square rounded-lg bg-surface flex items-center justify-center">
          <Image className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="aspect-square rounded-lg bg-surface flex items-center justify-center">
          <Image className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </Card>
    <Card className="bottom-0 right-0 w-[55%]">
      <div className="flex items-center gap-2 mb-1">
        <MapPin className="w-4 h-4 text-accent" />
        <div className="text-xs font-semibold text-foreground">3 photos · 2 min ago</div>
      </div>
      <div className="text-xs text-muted-foreground">Address-sorted gallery</div>
    </Card>
  </Stage>
);

/* Smaller mocks reused inside rows */
export const NotifMock = () => (
  <div className="rounded-2xl bg-card border border-border shadow-floating p-4 max-w-xs mx-auto">
    <div className="flex items-center gap-2 mb-3">
      <Bell className="w-4 h-4 text-accent" />
      <div className="text-sm font-semibold text-foreground">
        Payment received
      </div>
    </div>
    <div className="rounded-lg bg-surface p-3 mb-2">
      <div className="text-xs text-muted-foreground">Sarah M. · #1042</div>
      <div className="text-base font-bold text-foreground">+$1,340.00</div>
    </div>
    <div className="text-xs text-muted-foreground">2 minutes ago</div>
  </div>
);

export const MapMock = () => (
  <div className="rounded-2xl bg-card border border-border shadow-floating p-4 max-w-xs mx-auto">
    <div className="flex items-center gap-2 mb-3">
      <MapPin className="w-4 h-4 text-accent" />
      <div className="text-sm font-semibold text-foreground">Today's route</div>
    </div>
    <div className="aspect-square rounded-lg bg-surface relative overflow-hidden">
      {[
        { t: "20%", l: "30%" },
        { t: "50%", l: "60%" },
        { t: "75%", l: "40%" },
      ].map((p, i) => (
        <div
          key={i}
          style={{ top: p.t, left: p.l }}
          className="absolute w-3 h-3 rounded-full bg-foreground border-2 border-card"
        />
      ))}
    </div>
    <div className="mt-3 text-xs text-muted-foreground">
      4 jobs · 23 mi total
    </div>
  </div>
);

export const SavingsMock = () => (
  <div className="rounded-2xl bg-card border border-border shadow-floating p-5 max-w-xs mx-auto">
    <div className="flex items-center gap-2 mb-4">
      <DollarSign className="w-4 h-4 text-emerald-500" />
      <div className="text-sm font-semibold text-foreground">
        Annual savings
      </div>
    </div>
    <div className="text-3xl font-bold text-foreground mb-1">$4,860</div>
    <div className="text-xs text-muted-foreground mb-4">vs Jobber + Twilio</div>
    <div className="h-1.5 rounded-full bg-surface overflow-hidden">
      <div className="h-full w-[78%] rounded-full bg-emerald-500" />
    </div>
  </div>
);

/* tiny key-value row */
const Row = ({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "red";
}) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span
      className={`font-semibold ${
        tone === "red" ? "text-destructive" : "text-foreground"
      }`}
    >
      {value}
    </span>
  </div>
);