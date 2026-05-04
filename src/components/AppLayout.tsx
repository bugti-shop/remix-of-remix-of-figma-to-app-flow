import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Home, LayoutGrid, Heart, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", icon: Home, label: "Feed" },
  { to: "/categories", icon: LayoutGrid, label: "Categories" },
  { to: "/generate", icon: Sparkles, label: "Generate", primary: true },
  { to: "/favorites", icon: Heart, label: "Favorites" },
  { to: "/profile", icon: User, label: "Profile" },
];

export const AppLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-md pb-24">
        <Outlet />
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-card/95 backdrop-blur-xl"
        aria-label="Primary"
      >
        <ul className="mx-auto flex w-full max-w-md items-center justify-around px-2 py-2">
          {tabs.map(({ to, icon: Icon, label, primary }) => {
            const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
            if (primary) {
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.6)]"
                    style={{ backgroundImage: "var(--gradient-featured)" }}
                  >
                    <Icon className="h-6 w-6" />
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  aria-label={label}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full transition-colors",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-6 w-6" strokeWidth={active ? 2.5 : 2} />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AppLayout;
