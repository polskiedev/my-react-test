import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    label?: string;
    type?: 'button';
    href?: string;
    icon?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    onClick?: () => void;
}

const Link = ({children, onClick, icon, color = 'primary', className = '', label, type, href}: Props) => {
  let classList: string[] = ["--ac-link"];
  let labelClassList: string[] = ["btn-label"];

  if(type == 'button') {
    classList.push("--ac-btn");
    classList.push("btn btn-" + color);
    
    //Tailwind
    classList.push("rounded-md p-1 text-sm 2sm:text-base inline-block m-1");
  }

  //If no icon dont hide label
  if(icon) labelClassList.push("hidden 2sm:block");

  if(className) classList.push(className);

  return (<>
      <a className={classList.join(" ")} onClick={onClick} href={href}>
        <div className="flex text-center gap-1 align-middle">
          {icon && <span className={"btn-icon icon-" + icon + " w-6 h-6"}></span>}
          {label && <label className={labelClassList.join(" ")}>{label}</label>} {children}
        </div>
      </a>  
    </>)
}

export default Link