import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { filtroPokemon, PropsPokemonFiltro } from '../../utils/utils';

import styles from '../../styles/pages/_PokemonId.module.scss';

type Props = {
    pokemon: PropsPokemonFiltro
}

export const getStaticPaths: GetStaticPaths = async () => {
	const maxPokemon = 251;
	const api = 'https://pokeapi.co/api/v2/pokemon';


	const response = await fetch(`${api}?limit=${maxPokemon}`);
	const data = await response.json();

	const paths = data.results.map((item: any, index: any) => {
		return {
			params: {
				id: (index + 1).toString(),
			}
		};
	});

	return {
		paths,
		fallback: false
	};

};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const idPokemon = params?.id;

	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
	const data = await response.json();

	return {
		props: {
			pokemon: filtroPokemon(data)
		}
	};

};

export default function PokemonId({ pokemon }: Props) {
	
	return (
		<section className={styles.pokemon_conteiner}>
			<h1 className={styles.pokemon_title}>{pokemon.name}</h1>
			<Image 
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
				alt={pokemon.name}
				width={180}
				height={180}
			/>
			<div>
				<h3>Numero:</h3>
				<p>#{pokemon.id}</p>
			</div>
			<div>
				<h3>Tipos:</h3>
				<ul className={styles.types_conteiner}>
					{
						pokemon.types.map((tipo, index) => (
							<li key={index} className={`${styles.type} ${styles['type_' + tipo.type.name]}`}>{tipo.type.name}</li>
						))
					}
				</ul>
			</div>
			<div className={styles.data_conteiner}>
				<div className={styles.data_height}>
					<h4>Altura:</h4>
					<p>{(pokemon.height * 10).toFixed(1)} cm</p>
				</div>
				<div className={styles.data_weight}>
					<h4>Peso:</h4>
					<p>{(pokemon.weight / 10).toFixed(1)} kg</p>
				</div>
			</div>
		</section>
	);
}