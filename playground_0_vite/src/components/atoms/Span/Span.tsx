import React, { ReactNode, ButtonHTMLAttributes, FC } from 'react';
import SpanVariants from './SpanVariants';
import ClassCollector from '../../../helpers/ClassManager/ClassCollector';

interface Props {
    icon?: string;
    className?: string;
    children?: ReactNode;
}

const Span: FC<Props> = ({icon: variant, children, className, ...props}: Props) => {
  const classList = new ClassCollector();

  classList.addVariants(SpanVariants, variant)
  classList.addClass(className);

  return (
    <span className={classList.build()} {...props}>{children}</span>
  )
}

export default Span