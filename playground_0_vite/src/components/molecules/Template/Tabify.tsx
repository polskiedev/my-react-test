import React from 'react'
import { default as ClassBuilder } from './TabifyClassBuilder';

const Tabify = () => {
    const {_: mainCB} = ClassBuilder();
    return (
        <div className={mainCB.build()}>
            Tabify
        </div>
    )
}

export default Tabify