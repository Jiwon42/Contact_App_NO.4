import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        /* this.props.contact(전달된 배열의 값요소) 
        return (
            <div>
             {this.props.contact.name} {this.props.contact.phone}
            </div>
        );*/
        return(
            // <div className="container">
            //     <table className="table table-bordered">
            //         <tr className="success">
            //             <td onClick={this.props.onClick}>{this.props.contact.name}</td>
            //         </tr>
            //     </table>
            //    </div>
            <div onClick={this.props.onClick}>{this.props.contact.name}</div>
               )
    }
}

export default ContactInfo;