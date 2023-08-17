import { describe, expect, test } from 'vitest';

import { greet } from './index.js';

describe('some-node-package', () => {
  test('should work', () => {
    expect(greet()).toBe('Hello!');
  });
});
