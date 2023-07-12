import React from 'react';
import Button, { Props as ButtonProps } from '../../atoms/Button/Button';
import Span from '../../atoms/Span/Span';
import Label from '../../atoms/Label/Label';

interface Props extends ButtonProps {
  icon?: string;
  label?: string;
}

const _Button: React.FC<Props> = ({ icon, label, children, ...props }: Props) => {

  return <Button {...props}>
    {icon && <Span icon={icon}></Span>}
    {label && <Label>{label}</Label>}
    {children}
    </Button>;
};

export default _Button;
