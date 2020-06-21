import "./finishMessage.css"
import React, {Component} from "react";
import {finishMessageDictionary} from "./finishMessageDictionary";

class FinishMessage extends Component {
    render() {
        return (
            <div className="FinishMessage d-flex h-100">
                <div className="justify-content-center align-self-center w-100">
                    <div className="FinishMessage-caption">{finishMessageDictionary.caption}</div>
                    <button
                        className="FinishMessage-button"
                        onClick={this.props.reset}
                    >
                        {finishMessageDictionary.buttonName}
                    </button>
                </div>
            </div>
        );
    }
}

export default FinishMessage;