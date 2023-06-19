import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    const htmlEl = screen.getByText('Hello');

    expect(htmlEl).not.toBeNull();
  });
});
