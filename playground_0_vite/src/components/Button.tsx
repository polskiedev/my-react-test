import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    label?: string;
    icon?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    labelClassName?: string;
    hasStates?: boolean;
    onClick: () => void;
}

const Button = ({children, onClick, icon, color = 'primary', className = '', label, labelClassName = "", hasStates = true}: Props) => {
  let classList: string[] = ["--ac-btn"];
  let labelClassList: string[] = ["btn-label"];

  // classList.push(`bg-primary bg-secondary bg-tertiary hover:bg-primary-hover hover:bg-secondary-hover hover:bg-tertiary-hover active:bg-primary-active active:bg-secondary-active active:bg-tertiary-active`);
  classList.push(`--ac-btn-[${color}]`);
  
  if(!!className) classList.push(className);

  //If no icon dont hide label
  if(!!icon) labelClassList.push("hidden 2sm:block");

  labelClassList.push(labelClassName);

  //Tailwind
  // classList.push("flex text-center gap-1 no-underline align-middle rounded-md p-1 text-sm 2sm:px-3 2sm:py-1 2sm:text-base");

  return (<>
      <button className={classList.join(" ")} onClick={onClick}>
        {icon && <span className={"btn-icon icon-" + icon}></span>}
        {label && <label className={labelClassList.join(" ")}>{label}</label>} {children}
      </button>  
    </>)
}

export default Button