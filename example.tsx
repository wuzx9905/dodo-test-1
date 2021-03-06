import * as React from 'react';
import  ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';

const logo = require('./doui-logo.png').default;


ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logo} width="44" height="44" alt=""/>
                    <span>DO-UI</span>
                </div>

            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">布局</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Switch>
                        {/*<Route path="/icon" component={IconDemo}/>*/}
                        {/*<Route path="/button" component={ButtonExample}/>*/}
                        {/*<Route path="/dialog" component={DialogExample}/>*/}
                        {/*<Route path="/layout" component={LayoutExample}/>*/}

                        <Route path="/icon" >{<IconDemo/>}</Route>
                        <Route path="/button" >{<ButtonExample/>}</Route>
                        <Route path="/dialog" >{<DialogExample/>}</Route>
                        <Route path="/layout" >{<LayoutExample/>}</Route>
                    </Switch>
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 吴梓贤
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));