import React, {Component} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import uuidv1 from 'uuid/v1';
import './AccountListBox.css';

class AccountListBox extends Component{

    state = {
        add_account_list : [],
        add_modal_show : false,
        new_item : {
            date: "2010-01-01",
            name: "",
            price: 0
        }
    }


    clickAddButton = (e) => {
        this.setState({new_item : {
            date: "2010-01-01",
            name: "",
            price: 0
        },add_modal_show: true});
    }

    closeModal = () => {
        this.setState({add_modal_show: false});
    }

    saveModal = () => {
        const {new_item,add_account_list} = this.state;
        new_item.id = uuidv1();
        add_account_list.push(new_item);
        this.setState({add_account_list, add_modal_show: false});
    }

    handleModalInputChange = (e, type) => {
        const {new_item} = this.state;
        if(type === 0) new_item.date = e.target.value;
        else if(type === 1) new_item.name = e.target.value;
        else if(type === 2) new_item.price = e.target.value;
        this.setState(new_item);
    }


    render(){

        const account_list = this.props.items;
        const {add_account_list} = this.state;

        return (
        <>
            <div className="account-list-box">
                <div className="account-bot-header">Header</div>
                <table className="account-bot-table">
                    <colgroup>
                        <col style={{width: "100px"}}/>
                        <col style={{width: "100px"}}/>
                        <col style={{width: "100px"}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>항목</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            account_list.map((account)=>
                                <tr key={account.id}>
                                    <td>{account.date}</td>
                                    <td>{account.name}</td> 
                                    <td>{account.price}</td>         
                                </tr>
                            )
                        }
                        {
                            add_account_list.map((account)=>
                                <tr key={account.id}>
                                    <td>{account.date}</td>
                                    <td>{account.name}</td> 
                                    <td>{account.price}</td>         
                                </tr>
                            )

                        }
                        <tr>
                            <td className="account-button-area" colSpan="3">
                                <Button onClick={this.clickAddButton}>+</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal show={this.state.add_modal_show} onHide={this.closeModal} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>항목 추가하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGroupDate">
                            <Form.Label>날짜</Form.Label>
                            <Form.Control value={this.state.new_item.date} type="text" onChange={(e) => this.handleModalInputChange(e,0)}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>항목</Form.Label>
                            <Form.Control value={this.state.new_item.name} type="text" onChange={(e) => this.handleModalInputChange(e,1)}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPrice">
                            <Form.Label>가격</Form.Label>
                            <Form.Control value={this.state.new_item.price} type="text" onChange={(e) => this.handleModalInputChange(e,2)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.saveModal}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
        );
    }
}

export default AccountListBox;
