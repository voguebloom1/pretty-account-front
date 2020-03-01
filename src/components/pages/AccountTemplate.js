import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AccountTotalBox from '../account/AccountTotalBox';
import AccountListBox from '../account/AccountListBox';


import './AccountTemplate.css';

class AccountTemplate extends Component{

  state = {
    select_date : '2020-01',
    account_income_list : [
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
    account_outcome_list  : [
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

  clickAddCategoryButton = () => {
    const {account_income_list} = this.state;
    account_income_list.push(
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
    );
    this.setState(account_income_list);
  }

  render(){

    const left_arrow = '< ';
    const right_arrow = ' >';

    const { account_income_list, account_outcome_list } = this.state;
 
    return (
      <div className="account-template">
        <Container>
          <Row className="account-date-row">
            <Col lg className="account-date-col">
              <div className="account-date-row-title">
                <span>{left_arrow}</span>
                { this.state.select_date } 
                <span>{right_arrow}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg>
              <AccountTotalBox/>
            </Col>
          </Row>
          <Row>
            <Col>
              <span> 수입 </span>
              <Button onClick={this.clickAddCategoryButton}>+</Button>
            </Col>
          </Row>
          <Row className="account-income-contents">
            <Col className="account-income-contents-box">
              {account_income_list.map((item, i) => 
                <AccountListBox
                  key = {i}
                  title = {item.category}
                  items = {item.items}
                />)}
            </Col>
          </Row>
          <Row>
            <Col>
              <span> 지출 </span>
            </Col>
          </Row>          
          <Row className="account-outcome-contents">
            <Col>
              {account_outcome_list.map((item, i) => 
                <AccountListBox
                  key = {i}
                  title = {item.category}
                  items = {item.items}
                />)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AccountTemplate;
