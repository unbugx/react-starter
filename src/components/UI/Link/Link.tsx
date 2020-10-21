import React, { FC } from 'react';
import cn from 'classnames';
import useStyles from 'isomorphic-style-loader/useStyles';
import history from 'core/history';

// types
import { ILinkProps } from './types';

// styles
import s from './Link.css';

export const Link: FC<ILinkProps> = ({
  href = '',
  onClick,
  className,
  disabled,
  children,
  ...restProps
}) => {
  useStyles(s);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();

      if (!disabled && onClick) {
        onClick(event);
      }

      history.push(href);
    },
    [disabled, onClick],
  );

  return (
    <a
      className={cn(className, s.link, { [s.disabled]: disabled })}
      href={href}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </a>
  );
};
