import { useState } from "react";
import { reqPoke } from "../services/poke";

export const usePoke = () => {
  const [infoPoke, setInfoPoke] = useState([]);

  const handleGetPoke = async (pokemon, e) => {
    e.preventDefault();
    const data = await reqPoke(pokemon);
    if (data) {
      setInfoPoke(data);
    }
  };
  return {
    handleGetPoke,
    infoPoke,
  };
};
