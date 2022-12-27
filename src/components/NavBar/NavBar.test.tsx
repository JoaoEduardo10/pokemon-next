import { render } from '@testing-library/react';
import { NavBar } from '.';

describe('<NavBar />', () => {
	it('should render a NaveBar', () => {
		const { container } = render(<NavBar />);

		expect(container).toMatchSnapshot();
	});
});