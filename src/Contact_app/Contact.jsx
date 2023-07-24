import React, { Component } from 'react';

//추가
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

class Contact extends Component {
    //1.데이터관리(추가,수정,삭제,조회)->생성자를 통해서 초기화
    constructor(props){
        super(props)
        this.state={
            //추가
            keyword:'', /* 실시간으로 입력할 데이터를 저장할 속성명*/
            selectKey:-1, //선택한 항목의 인덱스번호를 저장
            contactData:[{name:'정지원',phone:'010-123-0987'},
                         {name:'임  시',phone:'010-456-0987'},
                         {name:'임 시1',phone:'010-123-1222'},
                         {name:'임 시2',phone:'010-999-0987'},
                         {name:'임 시3',phone:'010-123-4444'}]
        }
        //이벤트 연결구문 작성
        this.handleChange=this.handleChange.bind(this);
    }
    //이벤트처리
    handleChange(e){// e는 event객체->이벤트 정보
        //jQuery->$(this)->event.target(이벤트가 발생된 객체)
        this.setState({keyword:e.target.value})
    }

    //key값을 매개변수로 받아서 처리  // key는 인덱스번호
    handleClick(key){ 
        this.setState({selectKey:key})
        console.log(key,'is selected');
    }
    

    render() {//화살표함수를 이용->하나씩 분리해서 인덱스별로 출력   // 매개변수 data는 위의 배열들이다.
        const mapToComponents=(data)=>{
            /*조건에 만족하는 데이터만 출력할때*/
            data=data.sort()//1.이미 정렬이 된 상태
                            //2.정렬된 데이터중에서 찾은데이터만 반환
            data=data.filter((contact)=>{
                //검색할 데이터가 없다면 indexOf->-1을 반환
                return contact.name.indexOf(this.state.keyword) > -1;
            })
            
           //console.log('검색한 data=>',data)
           //----배열의 각각의 값을 분리->map함수를 이용 리턴(i)--------
            return data.map((contact,i)=>{
                //contact=>배열의 각각요소를 의미 i=>인덱스번호
                //console.log('contact->',contact,'i->',i)
                //key->베열의 내부적으로 구분하는 구분자로써 필수
                return(<ContactInfo contact={contact} key={i} 
                         onClick={()=>this.handleClick(i)}       
                                    />)
            })
        }
        return (
            <div>
                <div class="form-group">
                    <label for="Name">검색</label>
                    <input name="keyword" placeholder="Search" className="form-control" value={this.state.keyword} onChange={this.handleChange} />
                </div>
                <div>
                {mapToComponents(this.state.contactData)}   
                <ContactDetails isSelected={this.state.selectKey!=-1}  //몇번째 인덱스번호가 넘어가는가
                                contact={this.state.contactData[this.state.selectKey]}/>  {/* 넘어가는 항목*/}
                {/*(1) 추가,수정,삭제,검색을 하기 위해서 state
                <div>홍길동 010-123-0987</div>
                <div>테스트 010-456-0987</div>
                <div>임 시  010-123-1222</div>
                <div>임시2  010-999-0987</div>
                <div>이현우 010-123-4444</div>*/}
                </div>
            </div>
        );
    }
}

export default Contact;