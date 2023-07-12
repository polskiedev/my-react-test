import { useState } from "react";
import Button from "./Button";

interface Props {
    className?: string;
}

function HeaderBar({className = ''}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const classList: string[] = ["--ac-headerbar"];

  if(!!className) classList.push(className);

  return (
    <>
        <div className={classList.join(" ")}>
            <div>
                <Button label="Menu" icon="nav" color="tertiary" className="outlined" onClick={() => console.log('Menu') } />
            </div>

            <div className="hidden sm:inline-block">
                <a href="#" className="--site-logo -hue-rotate-30 flex items-center justify-center text-white">Logo</a>
            </div>

            <div className="flex flex-row gap-1">
                <Button color="secondary" onClick={() => console.log('Login') }>Login</Button>
                <Button color="primary" onClick={() => console.log('Join now') }>Join now</Button>
            </div>
        </div>
    </>
  );
}

export default HeaderBar;
