import { MOCK_USERS } from "@/src/data/mockUsers";

export default function StatsSlot() {
  const pizzaLovers = MOCK_USERS.filter((u) => u.likesPizza).length;

  return (
    <div className="border-t border-b h-fit md:h-100 w-full md:w-fit lg:w-100 shadow-sm shadow-gray-600 rounded-lg bg-linear-to-b from-gray-900 to-transparent p-4 pb-8">
      <h2 className="font-semibold mb-4 text-2xl">Statystyki</h2>
      <p>{pizzaLovers} / {MOCK_USERS.length} osób lubi pizzę 🍕</p>
    </div>
  );
}