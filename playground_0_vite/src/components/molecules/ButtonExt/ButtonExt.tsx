import React from 'react';
import Button, { Props as ButtonProps } from '../../atoms/Button/Button';
import Span from '../../atoms/Span/Span';

interface Props extends ButtonProps {
  icon?: string;
}

const ButtonExt: React.FC<Props> = ({ icon, children, ...props }: Props) => {

  return <Button {...props}>
    <Span icon={icon}></Span>
    {children}
    </Button>;
};

export default ButtonExt;
