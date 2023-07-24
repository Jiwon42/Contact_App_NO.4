import React, { Component } from 'react';

class ContactDetails extends Component {
    render() {
        const details=(<div>
                        <p>{this.props.contact.name}</p>
                        <p>{this.props.contact.phone}</p>
                       </div>) //선택한경우
        const black=(<div>Not Selected</div>)//선택x 
        return (
            <div className="text-center text-success">
                {this.props.isSelected?details:black}
            </div>
        );
    }
}
//추가-> 처음에는 선택을 할 수 없기때문에 에러발생 그래서 화면에 출력x

ContactDetails.defaultProps={
    contact:{
        name:'',
        phone:''
    }
}
export default ContactDetails;