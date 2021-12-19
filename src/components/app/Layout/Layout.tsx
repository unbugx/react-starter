import React, { FC } from 'react'

// styles
import s from 'components/app/Layout/Layout.css'

// components
import { Link } from 'components/ui/Link'

// types
import type { LayoutProps } from 'components/app/Layout/Layout.types'

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <div>
      <Link href="/">Home</Link>
      <br />
      <Link href="/contacts">Contacts</Link>
      <br />
      <Link href="/contacts" disabled>
        Contacts
      </Link>
      <br />
      <Link href="/users">Users</Link>
      <div className={s.content}>{children}</div>
    </div>
    <div>©2020 Artem Sitnikov</div>
  </div>
)
