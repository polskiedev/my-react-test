import { useState } from "react";
import Button from "./Button";


function HeaderBar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
        <header className="component HeaderBar">
            <div className="header-buttons float-left">
                <Button className="btn-icon icon-hamburger" color="tertiary" onClick={() => console.log('Menu') }>Menu</Button>
            </div>

            <div className="header-logo">
                <a href="#">Site Logo</a>
            </div>

            <div className="header-buttons float-right">
                <Button color="secondary" onClick={() => console.log('Login') }>Login</Button>
                <Button color="primary" onClick={() => console.log('Join now') }>Join now</Button>
            </div>
        </header>
    </>
  );
}

export default HeaderBar;
