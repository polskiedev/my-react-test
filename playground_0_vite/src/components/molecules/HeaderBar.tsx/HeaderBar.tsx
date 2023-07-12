import { useState } from "react";
// import Button from "./Button";
import Button from "../_Button/_Button";
import ClassCollector from '../../../helpers/ClassCollector';

interface Props {
    className?: string;
}

function HeaderBar({className = ''}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const classList = new ClassCollector();

  classList.addClass('--ac-headerbar');
  classList.addClass(className);

  return (
    <>
        <div className={classList.getList()}>
            <div>
                <Button label="Menu" icon="nav" variant="tertiary" className="outlined" onClick={() => console.log('Menu') } />
            </div>

            <div className="hidden sm:inline-block">
                <a href="#" className="--site-logo -hue-rotate-30 flex items-center justify-center text-white">Logo</a>
            </div>

            <div className="flex flex-row gap-1">
                <Button variant="secondary" onClick={() => console.log('Login') }>Login</Button>
                <Button variant="primary" onClick={() => console.log('Join now') }>Join now</Button>
            </div>
        </div>
    </>
  );
}

export default HeaderBar;
