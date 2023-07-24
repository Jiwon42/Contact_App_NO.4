import React, { Component } from 'react';
 
class ContactInfo4 extends Component {
    render() {
        return (
            //<div>{this.props.contact.name} {this.props.contact.phone}</div>
            <div onClick={this.props.onClick}>{this.props.contact.name}</div>

            );
    }
}

export default ContactInfo4;