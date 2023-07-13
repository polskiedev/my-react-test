import React, { ReactNode, FC } from 'react';
import ClassBuilder from '../../../helpers/ClassBuilder/ClassBuilder';

interface Props {
  className?: string;
  text?: string;
  children?: ReactNode;
}

const Span: FC<Props> = ({text, className, children, ...props}: Props) => {
  const classList = new ClassBuilder();
  classList.addClass('--ac-label');
  classList.addClass(className);

  return (
    <label className={classList.build()} {...props}>{text}{children}</label>
  )
}

export default Span