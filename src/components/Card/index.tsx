import Image from 'next/image';
import Link from 'next/link';
import { ApiPokemonProps } from '../../types';

import styles from '../../styles/components/_Card.module.scss';

 type Props = {
    pokemon: ApiPokemonProps
}

export const Card = ({ pokemon }: Props) => {
	return (
		<li className={styles.card}>
			<Image 
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
				alt={pokemon.name}
				width={180}
				height={180}
			/>
			<p aria-label='numero do pokemon' className={styles.id}>#{pokemon.id}</p>
			<h3 className={styles.title}>{pokemon.name}</h3>
			<Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
		</li>
	);
};