import React, {Component} from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import moment from 'moment';

import './MonthPicker.css';

class MonthPicker extends Component {

    state = {
        today : moment().format('YYYY-MM')
    }

    handleOnClickByKey = (event, key) => {
        switch(key){
            case "left" : 
                this.eventMonthLeft();
                break;
            case "right" :
                this.eventMonthRight();
                break;
            default:
                break;
        }
    }     

    eventMonthLeft = () => { 
        const date = this.props.select_date;
        const before_date = moment(date).add(-1, 'month').format('YYYY-MM');
        this.props.setProps('select_date', before_date);

    }

    eventMonthRight = () => {
        const date = this.props.select_date;
        const after_date = moment(date).add(1, 'month');
        const diff = moment(this.state.today).diff(after_date, 'months', true);
        if(diff >= 0){
            this.props.setProps('select_date', after_date.format('YYYY-MM'));
        }
    }


    render(){ 
        return(
            <div>
                <i onClick={(e)=>this.handleOnClickByKey(e, "left")}><MdKeyboardArrowLeft/></i>
                <span className="month-picker-date-text">{ this.props.select_date }</span>
                { 
                    this.state.today === this.props.select_date ? 
                    <i className="disable"><MdKeyboardArrowRight/></i>
                    : <i onClick={(e)=>this.handleOnClickByKey(e, 'right')}><MdKeyboardArrowRight/></i>
                }

               
            </div>
        )
    }
}

export default MonthPicker