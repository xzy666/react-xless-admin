import React, {Component} from 'react'
import {Row, Col, Card} from 'antd'
import BreadcrumbCustom from '../BreadcrumbCustom'

export default class Basics extends Component {
    state = {
        animated: false,
        animateOne: ''
    }
    animationShow = (i) => {
        this.setState({
            animateOne: i
        })
        console.log(i)
    }

    render() {
        const animations = [
            'bounce', 'flash', 'rubberBand', 'shake', 'headShake',
            'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown',
            'bounceInLeft', 'bounceInRight', 'bounceOut', 'bounceOutDown', 'bounceOutLeft',
            'bounceOutLeft', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
            'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut',
            'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
            'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY',
            'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
            'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
            'hinge', 'jackInTheBox', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
            'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown',
            'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
        ];
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Row>
                    {animations.map(i => (
                        <Col span={4}>
                            <Card
                                className={`animated ${this.state.animateOne}`}
                                onMouseEnter={() => this.animationShow(i)}
                                onMouseLeave={() => this.animationShow(i)}
                            >{i}</Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}