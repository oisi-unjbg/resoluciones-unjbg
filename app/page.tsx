"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const data = [
    {
      tipo: "Rectoral",
      numero: "16630",
      anio: "2026",
      asunto: "Autorización de pensión",
      fecha: "2026-04-16",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* HEADER */}
      <header className="bg-[#002e66] text-white flex items-center justify-between px-4 py-3">
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        <h1 className="font-bold text-lg md:text-xl">
          Resoluciones de Facultad
        </h1>

        <div className="w-6 md:hidden" />
      </header>

      <div className="flex flex-1">
        
        {/* SIDEBAR DESKTOP */}
        <aside className="hidden md:block w-72 bg-[#002e66] text-white p-5 space-y-3">
          <h2 className="font-bold mb-4">Menú</h2>

          {[
            "Rectoral",
            "Consejo Universitario",
            "Asamblea Universitaria",
            "Resoluciones Facultad",
          ].map((item) => (
            <p
              key={item}
              className="hover:bg-white/10 p-2 rounded cursor-pointer"
            >
              {item}
            </p>
          ))}
        </aside>

        {/* SIDEBAR MOBILE */}
        {open && (
          <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
            <div className="bg-[#002e66] text-white w-72 h-full p-5">
              <button
                onClick={() => setOpen(false)}
                className="mb-4"
              >
                ✕ Cerrar
              </button>

              <div className="space-y-3">
                <p>Rectoral</p>
                <p>Consejo Universitario</p>
                <p>Asamblea Universitaria</p>
              </div>
            </div>
          </div>
        )}

        {/* CONTENIDO */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          
          {/* FILTROS */}
          <div className="bg-white p-4 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="p-2 border rounded-lg">
              <option>Facultad</option>
            </select>

            <select className="p-2 border rounded-lg">
              <option>Buscar por</option>
            </select>

            <button className="bg-[#002e66] text-white rounded-lg">
              Buscar
            </button>
          </div>

          {/* TABLA DESKTOP */}
          <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-200 text-left">
                <tr>
                  <th className="p-3">Tipo</th>
                  <th>Número</th>
                  <th>Año</th>
                  <th>Asunto</th>
                  <th>Fecha</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-3">{item.tipo}</td>
                    <td>{item.numero}</td>
                    <td>{item.anio}</td>
                    <td>{item.asunto}</td>
                    <td>{item.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE → CARDS */}
          <div className="md:hidden space-y-4">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow"
              >
                <p className="font-bold text-[#002e66]">
                  Nº {item.numero}
                </p>
                <p className="text-sm">{item.asunto}</p>

                <div className="text-xs text-gray-500 mt-2">
                  <p>{item.tipo}</p>
                  <p>{item.fecha}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#002e66] text-white text-center p-3 text-sm">
        © UNJBG 2026
      </footer>
    </div>
  );
}