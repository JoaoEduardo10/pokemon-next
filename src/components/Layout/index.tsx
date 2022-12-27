import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
				<title>PokeNext</title>
			</Head>
			<NavBar />
			<main className='main-conteiner'>
				{children}
			</main>
			<Footer />
		</>
	);
};