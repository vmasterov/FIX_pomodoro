import React from 'react';
import SetTime from "./components/setTime/SetTime";
import Timer from "./components/timer/Timer";
import {types} from "./services/helpers/timerTypes";

function App() {
  return (
      <div id="app" className="app isWorkSessionTheme">
          <div className="container">
              <div className="row">
                  <div className="col-12 offset-0 col-xl-10 offset-xl-1">
                      <div className="row">
                          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                              <SetTime
                                  caption="Время рабочей сессии"
                                  type={types.work}
                              />
                          </div>
                          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                              <SetTime
                                  caption="Время перерыва между сессиями"
                                  type={types.rest}
                              />
                          </div>
                      </div>
                      <div className="row Timer-row">
                          <div className="col-12 Timer-col">
                              <Timer />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
