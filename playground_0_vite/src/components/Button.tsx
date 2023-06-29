interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    onClick: () => void;
}

const Button = ({children, onClick, color = 'primary', className = ''}: Props) => {
  return (
    <button className={"component btn btn-" + color + " " + className} onClick={onClick}>{children}</button>  
  )
}

export default Button