"use client";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  year: string;
  setYear: (v: string) => void;
  month: string;
  setMonth: (v: string) => void;
}

export default function Sidebar({
  search,
  setSearch,
  year,
  setYear,
  month,
  setMonth,
}: Props) {
  return (
    <aside className="w-full md:w-80 bg-white rounded-2xl shadow p-5 space-y-6">
      <h2 className="font-semibold text-lg">Filtros</h2>

      <input
        type="text"
        placeholder="Buscar..."
        className="w-full p-2 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="w-full p-2 border rounded-lg"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Todos los años</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
      </select>

      <select
        className="w-full p-2 border rounded-lg"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="">Todos los meses</option>
        <option value="04">Abril</option>
        <option value="03">Marzo</option>
      </select>
    </aside>
  );
}