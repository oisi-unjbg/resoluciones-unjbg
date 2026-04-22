"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ResolutionCard from "./components/ResolutionCard";
import { resolutions } from "./data/mockData";

export default function Home() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [open, setOpen] = useState(false); // 👈 sidebar móvil

  const filtered = resolutions.filter((item) => {
    const fecha = new Date(item.fecha);

    const matchText = item.descripcion
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchYear = year
      ? fecha.getFullYear().toString() === year
      : true;

    const matchMonth = month
      ? (fecha.getMonth() + 1).toString().padStart(2, "0") === month
      : true;

    return matchText && matchYear && matchMonth;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* BOTÓN MOBILE */}
      <div className="p-4 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-[#002e66] text-white px-4 py-2 rounded-lg"
        >
          Filtros
        </button>
      </div>

      <div className="flex gap-6 p-4 md:p-6">
        {/* SIDEBAR DESKTOP */}
        <div className="hidden md:block">
          <Sidebar
            search={search}
            setSearch={setSearch}
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
          />
        </div>

        {/* SIDEBAR MOBILE (DRAWER) */}
        {open && (
          <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
            <div className="bg-white w-80 h-full p-5">
              <button
                onClick={() => setOpen(false)}
                className="mb-4 text-sm text-gray-500"
              >
                Cerrar
              </button>

              <Sidebar
                search={search}
                setSearch={setSearch}
                year={year}
                setYear={setYear}
                month={month}
                setMonth={setMonth}
              />
            </div>
          </div>
        )}

        {/* MAIN */}
        <main className="flex-1 space-y-4">
          <p className="text-sm text-gray-500">
            {filtered.length} resultados
          </p>

          {filtered.map((item, i) => (
            <ResolutionCard key={i} item={item} />
          ))}
        </main>
      </div>
    </div>
  );
}