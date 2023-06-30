import React from 'react'

interface Props {
    className?: string;
    items: Item[];
}

interface Item {
    label: string;
    className: string;
    url: string;
}

const TopNavigation = ({items, className = ''}: Props) => {
    let classList: string[] = ["--ac-topnavigation"];
    if(className) classList.push(className);

    return (<>
        <nav className={classList.join(" ")}>
            <ul className="list-group">
            {items.map((item, index) => (
                <li className="list-group-item" key={index}>
                    <a className={item.className} href={item.url}>
                        {item.label}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    </>)
}

export default TopNavigation