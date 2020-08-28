import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = { activeSection: null };
    handleButtonClick = (i) => {
        this.setState({activeSection: i});
    }
    renderButtons() {
        return (
            this.props.sections.map((section, i) => (
                <li key={i}>
                    <button onClick={() => this.handleButtonClick(i)}>{section.title}</button>
                    {this.state.activeSection === i && <p>{section.content}</p> }
                </li>
            ))
        );
    }
    render() {
        return (
            <ul>
                {this.renderButtons()}
            </ul>
        );
    }
}

export default Accordion;