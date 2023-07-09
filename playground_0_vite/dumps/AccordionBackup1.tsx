import { createContext, useContext } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useToggle } from "../src/hooks/useToggle";

// Create context api
const AccordionContext = createContext<any>(null);
const { Provider } = AccordionContext;

const Accordion = (props: { title: string, children?: React.ReactNode, content?: React.ReactNode }) => {
  const { title, children, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand
  };

  return (
    <Provider value={value}>
      <div className={`accordion mb-1 inline-flex flex-col ${
        expand ? "expanded" : ""
      }`}>
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionContent>
            {content}
            {children}
        </AccordionContent>
      </div>
    </Provider>
  );
};

// Header
const AccordionHeader = ({ children }: { children: React.ReactNode }) => {
    const { expand, toggleExpand } = useContext(AccordionContext);
  
    return (
      <button
        onClick={toggleExpand}
        className={`flex flex-row items-center gap-1 justify-between p-2 bg-[#efefef] hover:bg-[#ccd1e4] 
            ${expand ? "rounded-t-md border-b-2" : "rounded-md"}
        `}>
        {children}
        <AccordionIcon iconOpened={<FaChevronRight />} iconClosed={<FaChevronDown />} />
      </button>
    );
  };
  

// Content
const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  const { expand } = useContext(AccordionContext);

  return <>{expand && <div className="content p-2 bg-[#f7f7f7] rounded-b-md">{children}</div>}</>;
};

// Icon
const AccordionIcon = ({ iconOpened, iconClosed }: { iconOpened: React.ReactNode; iconClosed: React.ReactNode }) => {
  const { expand } = useContext(AccordionContext);
  return <span>{expand ? iconOpened : iconClosed}</span>;
};

export default Accordion;
