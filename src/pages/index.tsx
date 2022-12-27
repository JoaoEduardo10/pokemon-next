import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Card } from '../components/Card';

import styles from '../styles/pages/_Home.module.scss';
import { PropsPokemon } from '../types';

export const getStaticProps: GetStaticProps = async () => {
	const maxPokemon = 251;
	const api = 'https://pokeapi.co/api/v2/pokemon';


	const response = await fetch(`${api}?limit=${maxPokemon}`);
	const data = await response.json();

	data.results.forEach((item: any, index: any) => {
		item.id = index + 1;
	});

	return {
		props:{
			pokemons: data.results
		}
	};
};

export default function Home({ pokemons }: PropsPokemon) {

	return (
		<>
			<div className={styles.title_conteiner}>
				<h1 className={styles.title}>Poke<span>Next</span></h1>
				<Image src={'/images/pokeball.png'} width={50} height={50} alt='pokemon' />
			</div>
			<ul className={styles.pokemon_conteiner}>
				{
					pokemons.map(pokemon => (
						<Card key={pokemon.id} pokemon={pokemon} />
					))
				}
			</ul>
		</>
	);
}
