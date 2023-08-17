import { describe, expect, test, vi } from 'vitest';

import { sayFoo } from './foo.js';

describe('sayFoo', () => {
  test('says foo', () => {
    const spy = vi.spyOn(console, 'log');
    sayFoo();
    expect(spy).toHaveBeenCalledWith('foo');
  });
});
