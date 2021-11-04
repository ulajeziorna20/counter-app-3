import React, { Component } from 'react';
// import React from 'react';
import './Counter-3.css';
import CounterButtons from './CounterButtons';
import Display from './Display';



// this.setState
class Counter3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counterValue: this.props.initValue
        };

    }




    addAge = () => {

        this.setState((prevAge) => {

            return ({
                counterValue: prevAge.counterValue + 1
            });
        });
    }





    subtractAge = () => {

        this.setState((prevAge) => {

            return ({
                counterValue: prevAge.counterValue - 1
            });

        });
    }





    otherButtons = (action) => {


        // console.log(action);
        
        this.setState((prevValue, prevProps) => {


            let currentCounterValue = this.state.counterValue;

            if (action === `add-10`) {

                currentCounterValue += 10;

            } else if (action === `subtract-10`) {

                currentCounterValue -= 10; 

            } else {

                currentCounterValue = prevProps.initValue;
            }
        

            return ({
                counterValue: currentCounterValue
            });

        });
    }




    maturity = (ageNumber) => {

        // console.log(`maturity function!`);

        return ({
           

        });
    }



    render() {
        return (
            <div className="counter-3">
                <div>
                    I am
                    <button onClick={this.subtractAge}>
                        -
                    </button>
                   <Display displayValue={this.state.counterValue}/>
                    <button onClick={this.addAge}>
                        +
                    </button>
                    years old ;)
                </div>
                <div>
                    <CounterButtons buttonAction={this.otherButtons} maturityAction={this.maturity}/>
                    <p className="maturity">
                        {this.state.counterValue}
                    </p>
                </div>
            </div>
        )

    }


}







// KOMPONENT KLASOWY Z METODĄ this.state i this.setState



// class Counter3 extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             counterValue: this.props.initValue
//         };

//     }

//     addAge = () => {

//         this.setState((prevAge) => {

//             return ({
//                 counterValue: prevAge.counterValue + 1
//             });
//         });
//     }


//     subtractAge = () => {

//         this.setState((prevAge) => {

//             return ({
//                 counterValue: prevAge.counterValue - 1
//             });

//         });
//     }





//     render() {
//         return (
//             <div className="counter-3">
//                 I am
//                 <button onClick={this.subtractAge}>
//                     -
//                 </button>
//                 <span className="my-age">
//                   {this.state.counterValue}
//                 </span>
//                 <button  onClick={this.addAge}>
//                     +
//                 </button>
//                 years old ;)
//             </div>
//         )

//     }


// }



















// Komponent klasowy z obowiązkową metodą render()

// class Counter3 extends Component {


//     render() {
//         return (
//             <div className="counter-3">
//                 I am
//                 <span className="random-number">
//                     {Math.floor(Math.random() * (85 - 1) + 1)}
//                 </span>
//                 years old ;)
//             </div>
//         )

//     }


// }




// Komonent funkcyjny

// function Counter3(props) {

//     return (
//         <div className="counter-3">
//             I am
//             <span className="random-number">
//                 {Math.floor(Math.random() * (85 - 1) + 1)}
//             </span>
//             years old ;)
//         </div>
//     )

// }

export default Counter3