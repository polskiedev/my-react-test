import React from 'react'

interface Props {
    className?: string;
    items: Item[];
}

interface Item {
    label: string;
    className: string;
    url: string;
    type?: "divider"
}

const TopNavigation = ({items, className = ''}: Props) => {
    let classList: string[] = ["--ac-topnavigation"];

    if(className) classList.push(className);

    //Tailwind
    classList.push("flex flex-row justify-center content-center items-center text-white");

    return (<>
        <nav className={classList.join(" ")}>
            <ul className="list-group flex flex-row p-2">
            {items.map((item, index) => (
                <li className="list-group-item" key={index}>
                    <a className={"block py-2 pl-3 pr-4 " + item.className} href={item.url}>
                        {item.label}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    </>)
}

export default TopNavigation