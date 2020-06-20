import './setTime.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {beautyTime} from "../../services/helpers/timeModule";
import {changeTime} from "../../services/setTime/action";

class SetTime extends Component {
    constructor(props) {
        super(props);

        this.changeTimer = this.changeTimer.bind(this);
    }

    changeTimer(event) {
        event.preventDefault();

        let time = {...this.props.data[this.props.type].time};

        event.target.classList.contains('SetTime-button-more') ? time.min++ : time.min--;

        this.props.changeTime(this.props.type, time);
    }

    render() {
        return (
            <div className={`SetTime SetTime--${this.props.type}`}>
                <div className="SetTime-caption">{this.props.caption}</div>
                <div className="SetTime-wrapper">
                    <div className="SetTime-time">{beautyTime(this.props.data[this.props.type].time)}</div>
                    <div className="SetTime-buttonContainer">
                        <button
                            className="SetTime-button SetTime-button-more"
                            onClick={this.changeTimer}
                            disabled={this.props.data[this.props.type].time.min >= this.props.data[this.props.type].maxi}
                        >
                            &#9650;
                        </button>
                        <button
                            className="SetTime-button SetTime-button-less"
                            onClick={this.changeTimer}
                            disabled={this.props.data[this.props.type].time.min <= this.props.data[this.props.type].mini}
                        >
                            &#9660;
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.setTime
    }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
            changeTime
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(SetTime);