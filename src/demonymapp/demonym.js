import React from 'react';

export default class Demonym extends React.Component {
    render () {
        return (
            <div className="demonym">
                A {this.props.name} comes from {this.props.country}
            </div>
        );
    }   
}