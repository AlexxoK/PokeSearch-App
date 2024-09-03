import { usePoke } from "../hooks/usePoke";
import { BuscarPoke } from "./BuscarPoke";
import { ContenedorPokes } from "./ContenedorPokes";

export const PokeApp = () => {
  const { handleGetPoke, infoPoke } = usePoke();

  return (
    <>
      <BuscarPoke handleGetPoke={handleGetPoke} />
      <ContenedorPokes infoPoke={infoPoke} />
    </>
  );
};
