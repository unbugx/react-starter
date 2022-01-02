import React from 'react'

// styles
import s from 'components/app/Layout/Layout.css'

// components
import { Container } from 'components/app/Layout/Container'
import { Footer } from 'components/app/Layout/Footer'
import { Menu } from 'components/app/Layout/Menu'
import { Paper } from 'components/ui/Paper'

// types
import type { LayoutProps } from 'components/app/Layout/Layout.types'

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={s.root}>
    <Container as="header">
      <Menu />
    </Container>
    <Container className={s.container} as="main">
      <Paper className={s.content}>{children}</Paper>
    </Container>
    <Footer />
  </div>
)
