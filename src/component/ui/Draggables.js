import React, {Component} from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom'
import {Row, Col, Card} from 'antd'
import Draggable from 'react-draggable'; // The default

export default class Draggables extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Draggable
                    axis="x"
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div>
                        <div className="handle">Drag from here</div>
                        <div>This readme is really dragging on...</div>
                    </div>
                </Draggable>
            </div>
        )
    }
}