import styles from '../../styles/components/_NavBar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<div className={styles.logo}>
				<Image src={'/images/pokeball.png'} alt={'pokeball'} width={'30'} height={'30'}  />
				<h1>PokeNext</h1>
			</div>
			<ul className={styles.link_itens}>
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/about'}>Sobre</Link>
				</li>
			</ul>
		</nav>
	);
};