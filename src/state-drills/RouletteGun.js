import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = { bulletInChamber: 8 };
    state = {
        chamber: null,
        spinningTheChamber: false
    };
    handleClick = () => {
        this.setState({spinningTheChamber: true});
        setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
        }, 2000);
    }
    componentWillUnmount() {
        clearTimeout(this.interval)
    }
    renderMessage() {
        if (this.state.spinningTheChamber) return 'spinning the chamber and pulling the trigger! ...';
        if (this.state.chamber === this.props.bulletInChamber) return 'Bang!!!';
        return `you're safe`;
    }

    render() {
        return (<div>
            <p>{this.renderMessage()}</p>
            <button onClick={this.handleClick}>Pulling the trigger!</button>
        </div>);
    }
}

export default RouletteGun;