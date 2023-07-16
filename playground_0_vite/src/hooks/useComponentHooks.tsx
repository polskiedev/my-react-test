const useComponentHooks = (): any => {  
    const hooks: any[] = [];
    const add = (hook: any) => {
        hooks.push(hook);
    };

    const init = (data: any) => {
        hooks.forEach((hook) => {
            hook?.init(data);
        })
    }

    const get = (index: number) => {
        if (index >= 0 && index < hooks.length) {
            return hooks[index];
        }
        return null; // Out of bounds
    }

    return {
        init, 
        add,
        get
    };
};

export { useComponentHooks };