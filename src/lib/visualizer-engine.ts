export type Scenario = "race" | "saga" | "retry";
export type Signal = "blue" | "green" | "red" | "amber" | "grey";
export type VisualEvent = { id: number; at: number; signal: Signal; message: string; payload: Record<string, string | number> };

const race: Omit<VisualEvent,"id">[] = [
  {at:0,signal:"blue",message:"8 requests received",payload:{op:"reserve",inventory_id:"inv_jaipur_42",units:1}},
  {at:18,signal:"amber",message:"Requests queued at row lock",payload:{op:"lock_wait",queue_depth:7}},
  {at:35,signal:"green",message:"Reservation committed · 2 free",payload:{op:"reserve",result:"granted",remaining:2}},
  {at:52,signal:"green",message:"Reservation committed · 1 free",payload:{op:"reserve",result:"granted",remaining:1}},
  {at:68,signal:"green",message:"Reservation committed · 0 free",payload:{op:"reserve",result:"granted",remaining:0}},
  {at:82,signal:"red",message:"Remaining requests rejected",payload:{op:"reserve",result:"sold_out",rejected:5}},
];
const saga: Omit<VisualEvent,"id">[] = [
  {at:0,signal:"blue",message:"Multi-item booking started",payload:{op:"saga_start",items:3}},
  {at:20,signal:"blue",message:"Hotel and flight branches reserved",payload:{op:"reserve_items",result:"pending"}},
  {at:42,signal:"green",message:"Payment captured",payload:{op:"payment_capture",result:"captured"}},
  {at:60,signal:"red",message:"Transfer inventory failed",payload:{op:"reserve_transfer",result:"conflict"}},
  {at:76,signal:"amber",message:"Compensating prior steps",payload:{op:"compensate",refund:"initiated"}},
  {at:92,signal:"grey",message:"Saga closed safely",payload:{op:"saga_complete",result:"compensated"}},
];
const retry: Omit<VisualEvent,"id">[] = [
  {at:0,signal:"blue",message:"Duplicate keys received",payload:{op:"reserve",idempotency_key:"idem_7K2P",attempts:2}},
  {at:28,signal:"amber",message:"Both requests converge at lock",payload:{op:"lock_wait",idempotency_key:"idem_7K2P"}},
  {at:55,signal:"green",message:"First request committed",payload:{op:"reserve",result:"granted",booking_id:"bk_901"}},
  {at:72,signal:"green",message:"Cached result replayed",payload:{op:"reserve",result:"same_booking",booking_id:"bk_901"}},
];
export const timelines: Record<Scenario,Omit<VisualEvent,"id">[]> = { race, saga, retry };