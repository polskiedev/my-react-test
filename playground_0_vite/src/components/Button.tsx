import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    label?: string;
    icon?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    labelClassName?: string;
    onClick: () => void;
}

const Button = ({children, onClick, icon, color = 'primary', className = '', label, labelClassName = ""}: Props) => {
  const classList: string[] = ["--ac-btn"];
  const labelClassList: string[] = ["btn-label"];

  // classList.push(`bg-primary bg-secondary bg-tertiary hover:bg-primary-hover hover:bg-secondary-hover hover:bg-tertiary-hover active:bg-primary-active active:bg-secondary-active active:bg-tertiary-active`);
  classList.push(`--ac-btn-[${color}]`);
  
  if(!!className) classList.push(className);

  //If no icon dont hide label
  if(!!icon) labelClassList.push("hidden 2sm:block");

  if(!!labelClassName) labelClassList.push(labelClassName);

  return (<>
      <button className={classList.join(" ")} onClick={onClick}>
        {icon && <span className={"--ac-span icon-" + icon}></span>}
        {label && <label className={labelClassList.join(" ")}>{label}</label>} {children}
      </button>  
    </>)
}

export default Button