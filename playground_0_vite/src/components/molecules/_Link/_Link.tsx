import React from 'react';
import Link, { Props as LinkProps } from '../../atoms/Link/Link';
import Span from '../../atoms/Span/Span';
import Label from '../../atoms/Label/Label';
import ClassCollector from '../../../helpers/ClassCollector';

interface Props extends LinkProps {
  icon?: string;
  label?: string;
}

const _Link: React.FC<Props> = ({ icon, label, children, ...props }: Props) => {
  const classList = new ClassCollector();
  classList.addClass('flex flex-row');

  return <Link className={classList.getList()} {...props}>
    {icon && <Span icon={icon}></Span>}
    {label && <Label>{label}</Label>}
    {children}
    </Link>;
};

export default _Link;
