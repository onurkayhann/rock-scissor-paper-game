import React from 'react';
import { render } from '@testing-library/react-native';
import Hero from './Hero';

describe('Hero component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Hero />);
        const heroImage = getByTestId('hero-image');
        expect(heroImage).toBeTruthy();
    });
});
