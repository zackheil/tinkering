import { useEffect, useState } from 'react';

/**
 * A test component for demo purposes
 * @returns A component
 */
export const Component = (): React.ReactNode => <div>Component</div>;

/**
 * A test component for demo purposes
 * @returns A component
 */
export const C2 = (): React.ReactNode => {
  useEffect(() => {
    if (foo !== '') console.log(foo);
  }, []);

  return <div>C2</div>;
};
