import applyVariant, {ComponentVariants} from "./ComponentVariants";

class ClassManipulator {
    private ClassList: string[] = [];

    addVariants(variants: ComponentVariants, variant?: string): void {
        const variantClass = applyVariant(variants, variant);
        this.ClassList.push(variantClass);
    }

    addClass(className: string = ''): void {
        if(className) {
            this.ClassList.push(className);
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

    getList(): string {
        //Return only unique class
        let classList = this.ClassList.join(' ').split(' ');
        classList = Array.from(new Set(classList));
        return classList.join(" ");
    }
}


export default ClassManipulator;