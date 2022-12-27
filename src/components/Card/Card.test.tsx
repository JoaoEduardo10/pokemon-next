import { render, screen } from '@testing-library/react';
import { Card } from '.';
import { mockPorkemon } from './mock';

describe('<Card />', () => {
	it('should render a Card', () => {
		const { container } = render(<Card pokemon={mockPorkemon} />);

		expect(screen.getByRole('img', { name: 'picachu' })).toBeInTheDocument();
		expect(screen.getByLabelText('numero do pokemon')).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'picachu' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Detalhes' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Detalhes' })).toHaveAttribute('href', `/pokemon/${mockPorkemon.id}`);

		expect(container).toMatchSnapshot();
	});
});