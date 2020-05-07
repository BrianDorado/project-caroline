import React, { PureComponent } from 'react';
import {Layout } from 'antd'
import PropTypes from 'prop-types';
import { homeRoute } from '../../Config/Navigation/routes';
import txt from '../../Config/text/text'

import './Homes.scss'

const { Content } = Layout

export default class Home extends PureComponent {
    render() {
        return (
            <Layout>
                <Content className='main-content' >{txt.lorem}</Content>
            </Layout>
        );
    }
}

Home.propTypes = {

};

