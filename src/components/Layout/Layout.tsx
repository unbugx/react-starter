import React, { FC } from 'react';

// types
import { ILayoutProps } from './types';

// components
import { Link } from 'components/UI/Link/Link';
import { Container } from 'components/UI/Container/Container';

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Container>
      <Link href='/'>Home</Link><br />
      <Link href='/contacts'>Contacts</Link><br />
      <Link href='/contacts' disabled>Contacts</Link>
    </Container>
    {children}
  </>
);
