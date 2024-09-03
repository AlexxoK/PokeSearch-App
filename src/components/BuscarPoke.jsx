import { useState } from "react"

export const BuscarPoke = ({handleGetPoke}) => {
    const [pokemon, setPokemon] = useState('')
    return (
        <>
          <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50 ">
            <form className="d-flex" action="" onSubmit={(e)=>{handleGetPoke(pokemon,e)}}>
                <input type="text" className="form-control me-2" placeholder="Nombre del Pokémon" onChange={(e)=>{setPokemon(e.target.value)}} />
                <input type="submit" value="Buscar Pokémon" className="btn btn-success" />
            </form>
          </div>
        </>
    )
}