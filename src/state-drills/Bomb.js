import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    countToText(count) {
        if (count >= 8) return "BOOM!!!!";
        if (count % 2 === 0) return "tick"
        return "tock"
    }
    render() {
        return (<div>
            <p>{this.countToText(this.state.count)}</p>
        </div>)
    }
}

export default Bomb;