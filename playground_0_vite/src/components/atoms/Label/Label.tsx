import React, { ReactNode, FC } from 'react';
import ClassCollector from '../../../helpers/ClassCollector';

interface Props {
  className?: string;
  text?: string;
  children?: ReactNode;
}

const Span: FC<Props> = ({text, className, children, ...props}: Props) => {
  const classList = new ClassCollector();
  classList.addClass('--ac-label');
  classList.addClass(className);

  return (
    <label className={classList.getList()} {...props}>{text}{children}</label>
  )
}

export default Span