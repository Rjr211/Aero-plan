import React, { Component } from "react";
import beach from './beach.mp4'
import "./video-header.css";

class Video extends Component {
    render(){
        return(
                <div className="video-div">
                    <video className='videoTag' autoPlay loop muted>
                        <source src={beach} type='video/mp4' />
                    </video>
                </div>
        );
    }
}

export default Video;