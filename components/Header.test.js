import React from 'react';
import { render } from '@testing-library/react-native';
import Header from './Header';

describe('Header component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Header />);
        const headerText = getByText('Welcome to Rock, Scissor, Paper Game');
        expect(headerText).toBeTruthy();
    });
});
