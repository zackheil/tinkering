import { describe, expect, test, vi } from 'vitest';

import { sayHello } from './index.js';

describe('some-node-package', () => {
  test('should work', () => {
    console.log = vi.fn();
    sayHello();
    expect(console.log).toHaveBeenCalledWith('Hello!');
  });
});
