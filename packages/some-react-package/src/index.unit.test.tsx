import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Component } from './index.js';

describe('demo react component test', () => {
  test('component', () => {
    render(<Component />);
    expect(screen.getByText(/hello/)).toBeInTheDocument();
  });
});
