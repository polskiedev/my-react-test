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
  let classList: string[] = ["--ac-btn text-white"];
  let labelClassList: string[] = ["btn-label cursor-pointer"];

  // classList.push(`bg-primary bg-secondary bg-tertiary hover:bg-primary-hover hover:bg-secondary-hover hover:bg-tertiary-hover active:bg-primary-active active:bg-secondary-active active:bg-tertiary-active`);
  classList.push(`btn bg-${color}`);
  
  if(hasStates) classList.push(`hover:bg-${color}-hover active:bg-${color}-active`);
  if(className) classList.push(className);

  //If no icon dont hide label
  if(icon) labelClassList.push("hidden 2sm:block");

  labelClassList.push(labelClassName);

  //Tailwind
  classList.push("flex text-center gap-1 no-underline align-middle rounded-md p-1 text-sm 2sm:px-3 2sm:py-1 2sm:text-base");

  return (<>
      <button className={classList.join(" ")} onClick={onClick}>
        {icon && <span className={"btn-icon icon-" + icon + " w-6 h-6 inline-block"}></span>}
        {label && <label className={labelClassList.join(" ")}>{label}</label>} {children}
      </button>  
    </>)
}

export default Button