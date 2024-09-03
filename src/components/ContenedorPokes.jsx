import "../styles.css";

export const ContenedorPokes = ({ infoPoke }) => {
  const { nombre, imagen, estadisticas } = infoPoke;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="gameboy-color">
        <div className="gameboy-screen text-center">
          {imagen && (
            <img
              src={imagen}
              className="img-fluid w-75"
              alt={`${nombre} pokemon`}
            />
          )}
          <div className="gameboy-header fst-italic mt-4">
            <h2 className="mb-3">Pokémon: {nombre}</h2>
            {estadisticas && estadisticas.length > 0 && (
              <ul className="list-group list-group-flush mt-4 rounded">
                <li className="list-group-item fs-5">
                  <strong>Statistics:</strong>
                </li>
                {estadisticas
                  .filter((stat) =>
                    ["hp", "attack", "defense"].includes(
                      stat.nombre.toLowerCase()
                    )
                  )
                  .map((statFiltrada) => (
                    <li
                      key={statFiltrada.nombre}
                      className="list-group-item fs-4"
                    >
                      {statFiltrada.nombre}: {statFiltrada.base}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
