import React, { FC } from 'react'

// styles
import s from './Layout.css'

// components
import { Link } from 'components/UI/Link/Link'

// types
import type { LayoutProps } from './types'

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <div>
      <Link href='/'>Home</Link><br />
      <Link href='/contacts'>Contacts</Link><br />
      <Link href='/contacts' disabled>Contacts</Link>
      <div className={s.siteLayoutContent}>
        {children}
      </div>
    </div>
    <div>©2020 Artem Sitnikov</div>
  </div>
)
