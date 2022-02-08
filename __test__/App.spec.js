import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from '../src/components/App';

afterEach(cleanup);

it('href link', () => {
	const rendered = render(<App />);
  expect(rendered.baseElement.querySelector('a').href).toBe(
		'http://github.com/AntonioAlejandro01/react-templates'
	);
});