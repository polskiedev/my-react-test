import { useState } from "react";
import Button from "./Button";

interface Props {
    className?: string;
}

function HeaderBar({className = ''}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let classList: string[] = ["--ac-headerbar"];

  if(className) classList.push(className);

  //Tailwind
  classList.push("flex flex-row justify-center content-center items-center justify-between overflow-hidden");

  return (
    <>
        <div className={classList.join(" ")}>
            <div className="--ac-grp">
                <Button label="Menu" icon="hamburger" color="tertiary" onClick={() => console.log('Menu') } />
            </div>

            <div className="--ac-grp hidden sm:inline-block">
                <a href="#" className="--site-logo -hue-rotate-30 flex items-center justify-center text-white">Logo</a>
            </div>

            <div className="--ac-grp flex flex-row gap-1">
                <Button className="bg-secondary-100" color="secondary" onClick={() => console.log('Login') }>Login</Button>
                <Button color="primary" onClick={() => console.log('Join now') }>Join now</Button>
            </div>
        </div>
    </>
  );
}

export default HeaderBar;
