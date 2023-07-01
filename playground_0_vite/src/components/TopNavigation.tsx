import Link from "./Link";

interface Props {
    className?: string;
    items: Item[];
}

interface Item {
    label: string;
    className: string;
    icon?: string;
    url: string;
    type?: "divider"
}

const TopNavigation = ({items, className = ''}: Props) => {
    let classList: string[] = ["--ac-topnavigation"];

    if(className) classList.push(className);

    //Tailwind
    classList.push("flex flex-row justify-center");

    return (<>
        <nav className={classList.join(" ")}>
            <ul className="list-group flex flex-row">
            {items.map((item, index) => (
                <li className="list-group-item" key={index}>
                    <Link icon={item.icon} label={item.label} className={"list-group-item-link flex flex-row justify-center content-center items-center pl-3 pr-4 text-white " + item.className} href={item.url} />
                </li>
            ))}
            </ul>
        </nav>
    </>)
}

export default TopNavigation