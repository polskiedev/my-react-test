import { useState } from "react";
import Button from "./Button";


function HeaderBar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
        <header className="component HeaderBar">
            <div className="header-buttons relative float-right">
                <Button color="tertiary" onClick={() => console.log('Login') }>Login</Button>
                <Button color="primary" onClick={() => console.log('Join now') }>Join now</Button>
            </div>
        </header>
    </>
  );
}

export default HeaderBar;
