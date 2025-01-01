import { useState } from "react";
import lupa from "../imagenes/lupaNB.png";

export const BuscarParche = () => {

const  [search, setSearch] = useState("");

const handleSearch = () => {
// Search logic here
    console.log(search);

    // Clear search input
    setSearch("");


}


  return (
    <div className="flex flex-row justify-center gap-10 mt-40">
      <h2 className="text-white text-4xl">¿Dónde quieres parchar?</h2>
      <div className="relative">
        <img
          src={lupa}
          alt="Ícono"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
        <input
          className="pl-10 h-10 text-white rounded-full bg-[#141414] border-2 border-[#439DFE] w-[300px]"
          type="text"
          placeholder="Quiero jugar futbol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(); // Search when pressing Enter
          }}
        />
      </div>
    </div>
  );
};
