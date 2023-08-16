import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('demo react component test', () => {
  test('component', () => {
    render(<div>hello</div>);
    expect(screen.getByText(/hello/)).toBeInTheDocument();
  });
});
