import React, { ReactNode, ButtonHTMLAttributes, FC } from 'react';
import SpanVariants from './SpanVariants';
import ClassManipulator from '../../../helpers/ClassManipulator';

interface Props {
    icon?: string;
    className?: string;
    children?: ReactNode;
}

const Span: FC<Props> = ({icon: variant, children, className, ...props}: Props) => {
  const classList = new ClassManipulator();

  classList.addVariants(SpanVariants, variant)
  classList.addClass(className);

  return (
    <span className={classList.getList()} {...props}>{children}</span>
  )
}

export default Span