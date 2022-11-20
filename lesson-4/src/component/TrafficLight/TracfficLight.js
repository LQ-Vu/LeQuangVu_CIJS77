import React from "react";
import Light from "../Light/Light";
import "./TrafficLight.css";
export default function TrafficLight() {
  const [lightOn, setLightOn] = React.useState("green");

  const turnOnNextLight=()=>{
    if(lightOn==='green'){
        setLightOn("yellow")
        return;
    }
    if(lightOn==='yellow'){
        setLightOn("red")
        return;
    }
    if(lightOn==='red'){
        setLightOn("green")
        return;
    }
  }
  return (
    <div>
      <div className="traffic-light">
        <Light color={"red"} isOn={lightOn === "red"}></Light>
        <Light color={"yellow"} isOn={lightOn === "yellow"}></Light>
        <Light color={"green"} isOn={lightOn === "green"}></Light>
      </div>
      <button onClick={turnOnNextLight}>Next</button>
    </div>
  );
}
