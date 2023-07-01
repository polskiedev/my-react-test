import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    label?: string;
    type?: 'button';
    href?: string;
    icon?: string;
    hasStates?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    labelClassName?: string;
    onClick?: () => void;
}

const Link = ({children, onClick, icon, color = 'primary', className = '', labelClassName = '', label, type, href, hasStates = true}: Props) => {
  let classList: string[] = ["--ac-link block"];
  let labelClassList: string[] = ["btn-label cursor-pointer"];

  if(type == 'button') {
    classList.push("--ac-btn");
    // classList.push("btn btn-" + color);
    classList.push(`btn bg-${color}`);
  
    if(hasStates) classList.push(`hover:bg-${color}-hover active:bg-${color}-active`);
    
    //Tailwind
    classList.push("rounded-md p-1 text-sm 2sm:text-base inline-block m-1");
  }

  labelClassList.push(labelClassName);

  //If no icon dont hide label
  if(icon) labelClassList.push("hidden 2sm:block");

  if(className) classList.push(className);

  return (<>
      <a className={classList.join(" ")} onClick={onClick} href={href}>
        <div className="flex text-center gap-1 align-middle">
          {icon && <span className={"btn-icon icon-" + icon}></span>}
          {label && <label className={labelClassList.join(" ")}>{label}</label>} {children}
        </div>
      </a>  
    </>)
}

export default Link