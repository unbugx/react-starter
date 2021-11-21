import React, { FC } from 'react';

// types
import { ILayoutProps } from './types';

// styles
import s from './Layout.css';

// components
import { Link } from 'components/UI/Link/Link';

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <div>
    <div style={{ padding: '0 50px' }}>
      <Link href='/'>Home</Link><br />
      <Link href='/contacts'>Contacts</Link><br />
      <Link href='/contacts' disabled>Contacts</Link>
      <div className={s.siteLayoutContent}>
        {children}
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>©2020 Artem Sitnikov</div>
  </div>
);
