import React, {useEffect, useState} from 'react';

// class Counter extends Component {
    
//     state = {
//         count: 0
//     }

//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//     componentDidMount() {
//         document.title = `Clicked ${this.state.count} times`;
//     }

//     componentDidUpdate() {
//         document.title = `Clicked ${this.state.count} times`;
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h2>Counter app</h2>
//                 <button onClick={this.increment}>Clicked {this.state.count} times</button>
//             </div>
//         );
//     }
// }

// useState + useEffect Hook
const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    });
    
    const increment = () => {
        setCount(count+1)
    }

    return (
        <div className="App">
            <h2>Counter app</h2>
            <button onClick={increment}>Clicked {count} times</button>
        </div>
    );
}

export default Counter;