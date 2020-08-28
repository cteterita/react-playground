import React from 'react';
import './Messages.css';

class Messages extends React.Component {
    render() {
        const badge = this.props.unread
            ? <div className="unread_count badge" > {this.props.unread}</div>
            : null;
        return (
            <div className="messages">
                {this.props.name}
                {badge}
            </div>
        )
    }
} 

export default Messages;