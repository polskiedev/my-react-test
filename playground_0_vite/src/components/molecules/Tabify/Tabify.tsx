import React from 'react'
import { default as ClassBuilder } from './TabifyClassBuilder';

const Tabify = () => {
    const {_: mainCB} = ClassBuilder();
    return (
        <div className={mainCB.build()}>
             <div className="container">
                <div className="tab_box">
                    <button className="tab_btn">Home</button>
                    <button className="tab_btn">About</button>
                    <button className="tab_btn">Contact Us</button>
                </div>
                <div className="content_box">
                    <div className="content">
                        <h2>Home</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex amet eligendi officiis esse harum. Eos excepturi quam ipsum accusamus obcaecati mollitia reiciendis, aut autem dignissimos sed quas iure tempore!</p>
                    </div>
                    <div className="content">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex amet eligendi officiis esse harum. Eos excepturi quam ipsum accusamus obcaecati mollitia reiciendis, aut autem dignissimos sed quas iure tempore!</p>
                    </div>
                    <div className="content">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex amet eligendi officiis esse harum. Eos excepturi quam ipsum accusamus obcaecati mollitia reiciendis, aut autem dignissimos sed quas iure tempore!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabify