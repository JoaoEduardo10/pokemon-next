import { render } from '@testing-library/react';
import About from './about';

describe('<About />', () => {
	it('should', () => {
		const { container } = render(<About />);

		expect(container).toMatchSnapshot();
	});
});