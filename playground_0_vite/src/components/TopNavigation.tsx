import Link from "./Link";

interface Props {
    className?: string;
    items: Item[];
}

export interface Item {
    label: string;
    url: string;
    icon?: string;
    hasDivider?: boolean;
    className?: string;
    linkClassName?: string;
    labelClassName?: string;
}

const TopNavigation = ({items, className = ''}: Props) => {
    let classList: string[] = ["--ac-topnavigation"];

    if(className) classList.push(className);

    //Tailwind
    classList.push("flex flex-row justify-center");

    return (<>
        <nav className={classList.join(" ")}>
            <ul className="list-group flex flex-row">
            {items.map((item, index) => {
                const { label, url, hasDivider = false, icon = ""
                        , className = "", linkClassName = ""
                        , labelClassName = ""} = item;

                let liClassList: string[] = ["list-group-item"];
                let linkClassList: string[] = ["list-group-item-link flex flex-row justify-center content-center items-center pl-3 pr-4 text-white"];
                let labelClassList: string[] = ["text-xs 2sm:text-base"];

                liClassList.push(className);
                linkClassList.push(linkClassName);
                labelClassList.push(labelClassName);

                if(hasDivider) liClassList.push("add-divider flex items-center");

                return (               
                    <li className={liClassList.join(" ")} key={index}>
                        <Link icon={icon} label={label} className={linkClassList.join(" ")} href={url} labelClassName={labelClassList.join(" ")} onClick={() => console.log(label)} />
                    </li>
                );
            })}
            </ul>
        </nav>
    </>)
}

export default TopNavigation