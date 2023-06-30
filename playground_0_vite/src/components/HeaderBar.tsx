import { useState } from "react";
import Button from "./Button";

interface Props {
    className?: string;
}

function HeaderBar({className = ''}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
        <div className={"--ac-headerbar" + " " + className}>
            <div className="--flx-grp">
                <Button label="Menu" icon="hamburger" color="tertiary" onClick={() => console.log('Menu') } />
            </div>

            <div className="--flx-grp">
                <a href="#" className="--site-logo -hue-rotate-30">Logo</a>
            </div>

            <div className="--flx-grp">
                <Button color="secondary" onClick={() => console.log('Login') }>Login</Button>
                <Button color="primary" onClick={() => console.log('Join now') }>Join now</Button>
            </div>
        </div>
    </>
  );
}

export default HeaderBar;
