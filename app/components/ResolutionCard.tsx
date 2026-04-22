import { Resolution } from "../types/resolution";

export default function ResolutionCard({ item }: { item: Resolution }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row md:justify-between gap-3 hover:shadow-lg transition">
      
      <div>
        <h3 className="font-bold text-[#002e66]">
          Nº {item.id}
        </h3>
        <p className="text-sm font-semibold">{item.titulo}</p>
        <p className="text-sm text-gray-600">{item.descripcion}</p>
      </div>

      <div className="text-sm md:text-right">
        <p>{item.fecha}</p>
        <p className="text-gray-400">{item.publicacion}</p>

        <button className="mt-2 border border-[#002e66] text-[#002e66] px-3 py-1 rounded-lg hover:bg-[#002e66] hover:text-white transition">
          Ver
        </button>
      </div>
    </div>
  );
}