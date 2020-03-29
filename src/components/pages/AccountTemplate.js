import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AccountTotalBox from '../account/AccountTotalBox';
import AccountListBox from '../account/AccountListBox';
import moment from 'moment';


import './AccountTemplate.css';
import MonthPicker from '../common/MonthPicker';

class AccountTemplate extends Component{

  state = {
    select_date : moment().format('YYYY-MM'),
    account_date_list : {
      income_list : [
        {
          category : '주수입',
          items : [
            {id : '1', date: '2010-01-01', name : '월급', price : '3000000'},
            {id : '2', date: '2010-01-01', name : '보너스', price : '500000'},
            {id : '3', date: '2010-01-01', name : '월세', price : '400000'},
            {id : '4', date: '2010-01-01', name : '부업', price : '340000'},
            {id : '5', date: '2010-01-01', name : '부업', price : '340000'},
            {id : '6', date: '2010-01-01', name : '부업', price : '340000'},
          ]
        }
      ],
      outcome_list  : [
        {
          category : '지출',
          items : [
            {id : '1', date: '2010-01-01', name : '월급', price : '3000000'},
            {id : '2', date: '2010-01-01', name : '보너스', price : '500000'},
            {id : '3', date: '2010-01-01', name : '월세', price : '400000'},
            {id : '4', date: '2010-01-01', name : '부업', price : '340000'},
            {id : '5', date: '2010-01-01', name : '부업', price : '340000'},
          ]
        }
      ]
    }
  }

  clickAddCategoryButton = (type, name) => {
    const { account_date_list } = this.state;
    let list = [], key = "";
    switch(type){
      case "income" : 
        list = account_date_list.income_list;
        key = "income_list";
        break;
      case "outcome" :
        list = account_date_list.outcome_list;
        key = "outcome_list";
        break;
      default:
        break;
    }
    list.push( {category : name, items : []});

    account_date_list[key] = list;

    if(key !== ""){
      // account info 등록
      this.setState({account_date_list});
    }
  }

  addIncomeListItem = (i, item) => {
    const {account_date_list} = this.state;
    // 여기에 api 호출 로직 필요
    account_date_list.income_list[i] = item;
    this.setState({account_date_list});
  }


  // 자식 컴포넌트에서 props 업데이트 할때 해당 함수로만 할 수 있게 함.
  setStateByKeyAndValue = (key, value, i) => {
    switch(key){
      case 'select_date' :
        this.handleChangeSelectDate(value);
        break;
      default:
        this.setState({[key]:value});
        break;
    }
  }

  handleChangeSelectDate = (select_date) => {
    // 로딩바 시전
    // api 호출 해서 해당 날짜 정보를 가져온다.
    const account_date_list = {
      income_list: [],
      outcome_list: []
    }
    // select_date 업데이트, 정보 업데이트 한다.
    this.setState({ account_date_list ,select_date});
    // 로딩바 제거
  }

  render(){
    const {account_date_list} = this.state;
    const { income_list , outcome_list } = account_date_list;
 
    return (
      <div className="account-template">
        <Container>
          <Row className="account-date-row">
            <Col lg className="account-date-col">
              <div className="account-date-row-title">
                <MonthPicker 
                  setProps = {this.setStateByKeyAndValue}
                  select_date = {this.state.select_date}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <AccountTotalBox/>
            </Col>
          </Row>
          <Row className="account-contents">
            <Col xs={12} className="ac-title">
              <span> 수입 </span>
              <Button onClick={(e)=>this.clickAddCategoryButton("income")}>+</Button>
            </Col>
            <Col xs={12} >
              <div className="account-contents-boxs">
                {income_list.map((item, i) => 
                <AccountListBox
                  key = {i}
                  item = {item}
                  addListItem = {this.addIncomeListItem}
                />)}
                { income_list.length === 0 && <span className="blank_box">수입 항목을 추가해주세요.</span>}
              </div>
            </Col>
          </Row>
          <Row>

          </Row>          
          <Row className="account-contents">
            <Col xs={12} className="ac-title">
              <span> 지출 </span>
              <Button onClick={(e)=>this.clickAddCategoryButton("outcome")}>+</Button>
            </Col>
            <Col>
              <div className="account-contents-boxs">
              {outcome_list.map((item, i) => 
                <AccountListBox
                  key = {i}
                  item = {item}
                />)}
                { outcome_list.length === 0 && <span className="blank_box">지출 항목을 추가해주세요.</span>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AccountTemplate;
