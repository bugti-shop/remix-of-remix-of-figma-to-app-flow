import TopBar from "@/components/TopBar";
import { Crown, Heart, Clock, Settings, LogOut, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { icon: Heart, label: "My Favorites", to: "/favorites" },
  { icon: Clock, label: "History", to: "/history" },
  { icon: Settings, label: "Settings", to: "/profile" },
  { icon: LogOut, label: "Log out", to: "/profile" },
];

const Profile = () => (
  <div>
    <TopBar title="Profile" />
    <div className="px-4">
      <div
        className="relative overflow-hidden rounded-3xl p-5 text-primary-foreground"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      >
        <p className="text-xs uppercase tracking-widest opacity-80">Pro Plan</p>
        <h2 className="mt-1 flex items-center gap-2 text-2xl font-bold">
          <Crown className="h-6 w-6" /> Promptly Pro
        </h2>
        <p className="mt-1 text-xs opacity-90">Unlimited prompts & exports</p>
      </div>
      <ul className="mt-6 divide-y divide-border rounded-2xl bg-card">
        {items.map(({ icon: Icon, label, to }) => (
          <li key={label}>
            <Link to={to} className="flex items-center justify-between px-4 py-4 text-sm hover:bg-secondary/40">
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Profile;