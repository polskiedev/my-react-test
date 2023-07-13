import ClassGroup from "./ClassGroup";
import applyVariant, {ComponentVariants} from "./ComponentVariants";

export { ClassGroup };

type ClassGroupProp = {
    [key: string]: string;
};

class ClassBuilder {
    private ClassList: string[] = [];

    addVariants(variants: ComponentVariants, variant?: string): void {
        const variantClass = applyVariant(variants, variant);
        this.ClassList.push(variantClass);
    }

    addClass(className: string = ''): void {
        className && this.ClassList.push(className);
    }

    addClassGroup(className: string = ''): void {
        if(className) {
            const classList = (ClassGroup as ClassGroupProp)[className];
            classList && this.ClassList.push(classList);
        }
    }

    removeClass(className: string = ''): void {
        if(className) {
            const classesToRemove = className.split(' ');
            const classList = this.ClassList.join(' ').split(' ');
            
            const updatedClassList = classList.filter(classItem => {
                return !classesToRemove.includes(classItem);
            });

            this.ClassList = updatedClassList;
        }
    }

    build(): string {
        //Return only unique class
        let classList = this.ClassList.join(' ').split(' ');
        classList = Array.from(new Set(classList));
        return classList.join(" ");
    }
}


export default ClassBuilder;