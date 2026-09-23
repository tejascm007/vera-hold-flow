import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, CalendarDays, MapPin, Search, Star, Users } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/booking-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "VERA HOLIDAYS — Hotels & Flights" },
    { name: "description", content: "Search and book thoughtful stays and flights across India." },
    { property: "og:title", content: "VERA HOLIDAYS — Hotels & Flights" },
    { property: "og:description", content: "Search and book thoughtful stays and flights across India." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const [tab, setTab] = useState<"hotels" | "flights">("hotels");
  const [natural, setNatural] = useState("");
  const [fallback, setFallback] = useState(false);
  const navigate = Route.useNavigate();
  const search = () => navigate({ to: "/search", search: { type: tab } });
  return (
    <AppShell>
      <main className="overflow-hidden">
        <section className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col items-center justify-center px-5 py-16 text-center">
          <div className="absolute -left-40 top-10 size-96 rounded-full bg-brand-soft blur-3xl" />
          <div className="absolute -right-48 bottom-0 size-80 rounded-full bg-brand-soft blur-3xl" />
          <div className="relative w-full max-w-5xl">
            <p className="mb-4 text-sm font-semibold text-primary">YOUR NEXT JOURNEY, SIMPLIFIED</p>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">Where would you like to go?</h1>
            <div className="mt-9 inline-flex rounded-full bg-secondary p-1.5">
              {(["hotels", "flights"] as const).map((item) => <Button key={item} variant={tab === item ? "default" : "ghost"} className="rounded-full px-7 capitalize" onClick={() => setTab(item)}>{item}</Button>)}
            </div>
            <div className="mt-6 grid overflow-hidden rounded-2xl border border-border bg-background text-left shadow-soft md:grid-cols-[1.3fr_1fr_1fr_auto]">
              {[{icon:MapPin,label:tab === "hotels" ? "Where" : "From / To",value:tab === "hotels" ? "Jaipur, Rajasthan" : "Delhi → Jaipur"},{icon:CalendarDays,label:"When",value:"12–15 Oct"},{icon:Users,label:"Travellers",value:"2 guests"}].map(({icon:Icon,label,value}) => <button type="button" key={label} className="flex min-h-24 items-center gap-3 border-b border-border px-6 text-left hover:bg-secondary md:border-b-0 md:border-r"><Icon className="size-5 text-primary"/><span><span className="block text-xs font-semibold">{label}</span><span className="mt-1 block text-sm text-muted-foreground">{value}</span></span></button>)}
              <Button aria-label="Search" size="icon" className="m-4 size-16 rounded-2xl self-center" onClick={search}><Search className="size-6" /></Button>
            </div>
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-border bg-background p-2 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex min-h-12 flex-1 items-center gap-3 px-3"><Bot className="size-5 text-primary"/><input value={natural} onChange={(e)=>{setNatural(e.target.value);setFallback(false)}} className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Try “cheap heritage hotel near Jaipur next weekend”" /><span className="whitespace-nowrap rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-primary">Powered by AI</span></div>
                <Button className="rounded-xl" onClick={()=>{if(natural.trim().length < 10){setFallback(true)} else search()}}>Search naturally <ArrowRight /></Button>
              </div>
              {fallback && <p className="px-3 pb-2 pt-1 text-left text-xs text-muted-foreground">We couldn’t read every detail, so we’re showing filtered results instead.</p>}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-8">
          <div className="mb-6 flex items-end justify-between"><div><p className="text-sm font-semibold text-primary">POPULAR NOW</p><h2 className="mt-2 text-2xl font-bold">Places worth the journey</h2></div></div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {destinations.map(({city,note,price,rating,icon:Icon}) => <article key={city} className="min-w-[250px] snap-start rounded-2xl border border-border bg-background p-5 transition-transform hover:-translate-y-1 hover:shadow-soft"><div className="mb-10 grid size-14 place-items-center rounded-2xl bg-brand-soft text-primary"><Icon className="size-7"/></div><h3 className="text-lg font-semibold">{city}</h3><p className="text-sm text-muted-foreground">{note}</p><div className="mt-5 flex items-center justify-between text-sm"><strong>From {price}</strong><span className="flex items-center gap-1"><Star className="size-4 fill-current"/>{rating}</span></div></article>)}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
