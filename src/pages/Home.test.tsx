import { render } from '@testing-library/react';
import Home from './index';

const mockPokemon = [
	{
		id: 1,
		name: 'picachu',
		url: 'https://pokemon'
	},
	{
		id: 2,
		name: 'picachu',
		url: 'https://pokemon'
	},
];
describe('<Home />', () => {
	it('should render Home', () => {
		const { container } = render(<Home pokemons={mockPokemon} />);

		expect(container).toMatchSnapshot();
	});

	it('should not render Home', () => {
		const { container } = render(<Home pokemons={[]} />);

		expect(container).toMatchSnapshot();
	});
});