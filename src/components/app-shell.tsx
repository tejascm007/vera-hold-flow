import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarDays, Compass, Menu, Radar, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/" as const, label: "Explore", icon: Compass },
  { to: "/bookings" as const, label: "My bookings", icon: CalendarDays },
  { to: "/visualizer" as const, label: "System Visualizer", icon: Radar },
];

export function AppShell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  const ops = path === "/visualizer";
  return (
    <div className={ops ? "min-h-screen bg-ops text-primary-foreground" : "min-h-screen bg-background text-foreground"}>
      <header className={ops ? "border-b border-primary-foreground/10 bg-ops" : "border-b border-border bg-background"}>
        <div className={`mx-auto flex h-20 items-center justify-between px-5 ${wide ? "max-w-[1500px]" : "max-w-7xl"}`}>
          <Link to="/" className="flex items-center gap-3 font-bold text-primary">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><span className="text-lg">V</span></span>
            <span className="text-base tracking-normal">VERA HOLIDAYS</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ to, label, icon: Icon }) => <Link key={to} to={to} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${path === to ? "bg-brand-soft text-primary" : ops ? "text-ops-muted hover:text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}><Icon className="size-4" />{label}</Link>)}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="grid gap-1 border-t border-border px-5 py-3 md:hidden">{links.map(({to,label,icon:Icon}) => <Link key={to} to={to} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm"><Icon className="size-4" />{label}</Link>)}</nav>}
      </header>
      {children}
    </div>
  );
}