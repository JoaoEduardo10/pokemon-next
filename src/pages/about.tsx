import Image from 'next/image';
import styles from '../styles/pages/_About.module.scss';

export default function About() {
	return (
		<div className={styles.about}>
			<h1>Sobre o projeto</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum quidem esse, ab ipsa repellat facilis doloribus ea ad consequuntur corrupti, autem, enim maxime tempora amet? Accusantium officia consequatur deleniti.</p>
			<Image src={'/images/charizard.png'} alt='charizard' width={300} height={300} />
		</div>
	);
}