import { render } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
	it('should render a footer', () => {
		const { container } = render(<Footer />);

		expect(container).toMatchSnapshot();
	});
});