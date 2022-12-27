import { render, screen } from '@testing-library/react';
import { Layout } from '.';

describe('<Layout />', () => {
	it('should a render conteiner Layout', () => {
		const { container } = render(<Layout><h1>Children</h1></Layout>);

		expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();
		expect(container).toMatchSnapshot();

	});
});