import { BedDouble, Building2, Castle, Landmark, Mountain, Palmtree } from "lucide-react";

export const destinations = [
  { city: "Jaipur", note: "Heritage stays", price: "₹4,200", rating: "4.91", icon: Castle },
  { city: "Goa", note: "Beach escapes", price: "₹5,800", rating: "4.86", icon: Palmtree },
  { city: "Manali", note: "Mountain retreats", price: "₹3,900", rating: "4.88", icon: Mountain },
  { city: "Udaipur", note: "Lakeside palaces", price: "₹6,400", rating: "4.94", icon: Landmark },
  { city: "Mumbai", note: "City favourites", price: "₹7,200", rating: "4.82", icon: Building2 },
];

export const hotels = [
  { id: "haveli-rose", name: "The Rose Courtyard Haveli", area: "Bani Park, Jaipur", rating: 4.9, reviews: 428, price: 4280, rooms: 2, icon: Castle, amenities: ["Breakfast", "Pool", "Free cancellation"] },
  { id: "amber-house", name: "Amber House & Courtyard", area: "Amer Road, Jaipur", rating: 4.8, reviews: 216, price: 3650, rooms: 5, icon: Landmark, amenities: ["Breakfast", "Airport pickup", "Wi-Fi"] },
  { id: "pink-city", name: "Pink City Rooms", area: "C-Scheme, Jaipur", rating: 4.6, reviews: 189, price: 2890, rooms: 1, icon: BedDouble, amenities: ["Wi-Fi", "Workspace", "Late checkout"] },
];

export const flights = [
  { id: "ai-624", airline: "Air India", code: "AI 624", from: "DEL", to: "JAI", time: "08:15 – 09:10", price: 3490, note: "Non-stop · 55m" },
  { id: "6e-2204", airline: "IndiGo", code: "6E 2204", from: "DEL", to: "JAI", time: "11:40 – 12:35", price: 3820, note: "Non-stop · 55m" },
];

export const bookings = [
  { ref: "VH8K2P", name: "The Rose Courtyard Haveli", dates: "12–15 Oct 2026", status: "confirmed", amount: "₹14,562", refund: "₹13,250", upcoming: true },
  { ref: "VH4M9A", name: "Air India · DEL → GOI", dates: "02 Aug 2026", status: "partially confirmed", amount: "₹8,940", refund: "₹6,410", upcoming: true },
  { ref: "VH2J7C", name: "Palm Grove Panjim", dates: "18–21 Mar 2026", status: "cancelled", amount: "₹11,280", refund: "₹10,400", upcoming: false },
];

export const money = (value: number) => `₹${value.toLocaleString("en-IN")}`;