import PokemonId  from './[id]';
import { render, screen } from '@testing-library/react';
import { PropsPokemonFiltro } from '../../utils/utils';

const mockPokemon: PropsPokemonFiltro = {
	height: 100,
	id: 1,
	name: 'picachu',
	types: [
		{
			slot: 1,
			type: {
				name: 'Fire',
				url:'https://pokemon'
			}
		}
	],
	weight: 100,
};

describe('<PokemonId />', () => {
	it('should render a pokemon', () => {
		const { container } = render(<PokemonId pokemon={mockPokemon} />);

		expect(screen.getByRole('img', { name: mockPokemon.name })).toBeInTheDocument();

		expect(container).toMatchSnapshot();
	});
});