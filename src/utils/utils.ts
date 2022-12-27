//filtragem apiPokemon

export type Tipo = {
    slot: number
    type: {
        name: string
        url: string
    }
}

export type PropsPokemonFiltro = {
    name: string
    id: number
    height: number
    weight: number
    types: Tipo[]
}

export const filtroPokemon = (pokemon: any) => {
	const { name, id, types, height, weight }: PropsPokemonFiltro = pokemon;

	return {
		name,
		id,
		types,
		height,
		weight
	};
};