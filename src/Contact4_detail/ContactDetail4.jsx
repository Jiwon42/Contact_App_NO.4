import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactDetail4 extends Component {
    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
         );
        const blank = (<div>Not selected</div>);
        return (
          <div>
            <h2>Detail information</h2>
            {this.props.isSelected ? details:blank}
          </div>
        );
    }
}

ContactDetail4.defaultProps = {
    isSelected : false,
    contact : {
      name : '',
      phone : ''
    }
  }

export default ContactDetail4;