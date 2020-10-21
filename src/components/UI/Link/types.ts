import React from 'react';

export interface ILinkProps {
  href: string,
  onClick?: React.MouseEventHandler<HTMLElement>,
  className?: string,
  disabled?: boolean,
}
