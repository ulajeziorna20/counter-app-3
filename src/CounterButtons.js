import React from "react";
import "./CounterButtons.css"


function CounterButtons(props) {

    return (
        <div>
            <div>
                <button className="counting-btn" onClick={() => {
                    // console.log(`Add 10`);

                    props.buttonAction('add-10');
                }}>Add 10</button>

                <button className="counting-btn" onClick={() => {

                    props.buttonAction('subtract-10');
                }}>Subtract 10</button>

                <button className="counting-btn" onClick={() => {

                    props.buttonAction('reinit');
                }}>ReInit</button>
            </div>
            <div>
                <button className="check-btn" onClick={() => {
                    props.maturityAction()
                }}>You are...</button>
            </div>
        </div>
    )

}


export default CounterButtons;