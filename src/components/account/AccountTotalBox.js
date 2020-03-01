import React, {Component} from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class AccountTotalBox extends Component{

  render(){
    return (
      <div>
        <Row>
            <Col>
                <Card >
                    <Card.Header>종합</Card.Header>
                    <Card.Body className="account-totalbox-body">
                        <div className="account-totalbox-items">
                            <div>수입</div>
                            <div>지출</div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card >
                <Card.Header>기타</Card.Header>
                    <Card.Body className="account-totalbox-body">
                        <div className="account-totalbox-items">
                            <div>수입</div>
                            <div>지출</div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* <Card bg="info" text="white">
            <Card.Body className="account-totalbox-body">
                <div className="account-totalbox-items">
                    <div>수입</div>
                    <div>지출</div>
                </div>
            </Card.Body>
        </Card>
        <Card bg="info" text="white">
            <Card.Body className="account-totalbox-body">
                <div className="account-totalbox-items">
                    <div>수입</div>
                    <div>지출</div>
                </div>
            </Card.Body>
        </Card> */}
      </div>
    );
  }
}


export default AccountTotalBox;
