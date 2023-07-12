//useVariants.tsx
interface BaseVariants {
    [key: string]: string;
}

interface DefaultVariants {
    [key: string]: string;
}

interface VariantObject {
    [key: string]: string;
}

interface VariantsObject {
    [key: string]: VariantObject;
}

export interface ComponentVariants {
    base: BaseVariants;
    variants: VariantsObject;
    defaultVariants: DefaultVariants;
}
  
const useVariants = function(variants: ComponentVariants, variant: string = 'default') {
    const classList = Array();
    const {"base": _base, "variants": _variants, "defaultVariants": _default} = variants;
    
    for(var i in _base) {
        classList.push(_base[i]);
    }

    for(var variantItem in _variants) {
        let variantClassList = _variants[variantItem][variant];
        if(variantClassList) {
            classList.push(variantClassList);
        }
    }
    return classList.join(" ");
};


export default useVariants;

