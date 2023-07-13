import Link from "../src/components/Link";

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
    const classList: string[] = ["--ac-topnavigation"];

    if(!!className) classList.push(className);

    return (<>
        <nav className={classList.join(" ")}>
            <ul className="list-group flex flex-row">
            {items.map((item, index) => {
                const { label, url, hasDivider = false, icon = ""
                        , className = "", linkClassName = ""
                        , labelClassName = ""} = item;

                let liClassList: string[] = ["list-group-item"];
                let linkClassList: string[] = ["list-group-item-link"];
                let labelClassList: string[] = [];

                if(!!className) liClassList.push(className);
                if(!!linkClassName) linkClassList.push(linkClassName);
                if(!!labelClassName) labelClassList.push(labelClassName);
                if(hasDivider) liClassList.push("add-divider");

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


//implementation
// <TopNavigation className="h-14" items={menuItems as TopNavigationItem[]}></TopNavigation>
