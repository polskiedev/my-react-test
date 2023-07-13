import React from 'react';
import Link, { Props as LinkProps, ClassBuilder as ClassBuilderParent } from '../../atoms/Link/Link';
import Span from '../../atoms/Span/Span';
import Label from '../../atoms/Label/Label';
import ClassCollector from '../../../helpers/ClassManager/ClassCollector';

interface Props extends LinkProps {
  className?: string;
  icon?: string;
  label?: string;
}

export const ClassBuilder = (className?: string) => {
  const classList = new ClassCollector();

  classList.addClass(ClassBuilderParent().build());
  classList.addClass(className);
  classList.addClass('gap-1');
  classList.addClassGroup('flex-center');

  return classList;
};

const _Link: React.FC<Props> = ({ icon, label, className, children, ...props }: Props) => {
  const classList = ClassBuilder(className);

  return <Link className={classList.build()} {...props}>
    {icon && <Span icon={icon}></Span>}
    {label && <Label>{label}</Label>}
    {children}
    </Link>;
};

export default _Link;
