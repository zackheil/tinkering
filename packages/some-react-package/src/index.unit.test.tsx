import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('demo react component test', () => {
  test('component', () => {
    render(<div>hello</div>);
    expect(screen.getByText(/hello/)).toBeInTheDocument();
  });
});
