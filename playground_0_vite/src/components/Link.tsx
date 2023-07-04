import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    label?: string;
    type?: 'button';
    href?: string;
    icon?: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    labelClassName?: string;
    onClick?: () => void;
}

const Link = ({children, onClick, icon, color = 'primary', className = '', labelClassName = '', label, type, href}: Props) => {
  const classList: string[] = ["--ac-link"];
  const labelClassList: string[] = ["btn-label"];

  if(type == 'button') {
    classList.push("--ac-btn");
    classList.push(`--ac-btn-[${color}]`);
  }

  if(!!labelClassName) labelClassList.push(labelClassName);

  //If no icon dont hide label
  if(!!icon) labelClassList.push("hidden 2sm:block");

  if(!!className) classList.push(className);

  return (<>
      <a className={classList.join(" ")} onClick={onClick} href={href}>
        <div className="link-wrapper">
          {icon && <span className={"btn-icon icon-" + icon}></span>}
          {label && <label className={labelClassList.join(" ")}>{label}</label>} {children}
        </div>
      </a>  
    </>)
}

export default Link