import React from 'react'
import { default as ClassBuilder } from './TemplateClassBuilder';

const Template = () => {
    const {_: mainCB} = ClassBuilder();
    return (
        <div className={mainCB.build()}>
            Template
        </div>
    )
}

export default Template