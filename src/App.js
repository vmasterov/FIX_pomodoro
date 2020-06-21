import React, {Component} from 'react';
import SetTime from "./components/setTime/SetTime";
import Timer from "./components/timer/Timer";
import {types} from "./services/helpers/timerTypes";
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div id="app" className={'app' + (this.props.isWorkSession ? ' isWorkSessionTheme' : ' isRestSessionTheme')}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-0 col-xl-10 offset-xl-1">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <SetTime
                                        caption={types.workCaption}
                                        type={types.work}
                                    />
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                    <SetTime
                                        caption={types.restCaption}
                                        type={types.rest}
                                    />
                                </div>
                            </div>
                            <div className="row Timer-row">
                                <div className="col-12 Timer-col">
                                    <Timer/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isWorkSession: state.setTime.isWorkSession
    }
};

export default connect(mapStateToProps)(App);
