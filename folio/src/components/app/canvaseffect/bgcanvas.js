import React from 'react';
import CanvasScript from './canvasscript';
import './bgcanvas.css';

class BGCanvas extends React.Component{
    componentDidMount(){
        let canvas = this.refs.draw
        CanvasScript(canvas);
    }
    render(){
        return(
            <canvas id="draw" ref="draw" className="bow" width="1000px" height="500px"></canvas>
        )
    };
}

export default BGCanvas;