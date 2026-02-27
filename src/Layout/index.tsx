import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div>
    {children}
  </div>
)

export default Layout
