// we need react to enable the components to function properly for testing
// The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.

import React from 'react';
// receive functions from React testing lib
import { render, cleanup } from '@testing-library/react';
// access to custom matchers for testing DOM elements
import '@testing-library/jest-dom/extend-expect';

import About from '..';

// global function and cleanup call
afterEach(cleanup);
// string being passed into describe ()
describe('About component', () => {
    // first test
    it('renders', () => {
        render(<About />);
    });
    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        // test and compare whether expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    })
})

