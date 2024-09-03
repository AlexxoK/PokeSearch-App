export const reqPoke = async (pokemon) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const data = await resp.json();
    const { stats } = data;
    const { sprites } = data;
    const nombre = data.name;
    const imagen = sprites.front_default;

    const estadisticas = stats.map((stats) => ({
      nombre: stats.stat.name,
      base: stats.base_stat,
    }));

    const infoPoke = {
      nombre,
      imagen,
      estadisticas,
    };

    return infoPoke;
  } catch (err) {
    console.log(err);
  }
};
