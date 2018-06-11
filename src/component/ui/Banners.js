import React, {Component} from 'react'
import {Row,Col,Card } from 'antd'
import TweenOne from 'rc-tween-one';
import BreadcrumbCustom from '../BreadcrumbCustom'

import BannerAnim, { Element } from 'rc-banner-anim';

const TweenOneGroup = TweenOne.TweenOneGroup;

export default class Banners extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>

                <Row>
                   <Col>
                       <Card>
                           <BannerAnim>
                               <Element key="demo1">
                                   <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>
                               </Element>
                               <Element key="demo2">
                                   <TweenOne animation={{ x: -30, type: 'from' }}>2</TweenOne>
                               </Element><Element key="demo3">
                                   <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion3</TweenOne>
                               </Element><Element key="demo4">
                                   <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion 4</TweenOne>
                               </Element><Element key="demo5">
                                   <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion 5</TweenOne>
                               </Element><Element key="demo6">
                                   <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion 6</TweenOne>
                               </Element><Element key="demo7">
                                   <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion 7</TweenOne>
                               </Element>
                           </BannerAnim>
                       </Card>
                   </Col>
               </Row>
            </div>
        )
    }
}