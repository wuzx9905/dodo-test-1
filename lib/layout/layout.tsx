import React, {ReactElement} from 'react';
import './layout.scss';
import Aside from './aside';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('do-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>  //限制layout的元素
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    const children = props.children as Array<ReactElement>;
    const hasAside = 'length' in children &&
        children.reduce((result, node) => result || node.type === Aside, false);
    return (
        <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
            {props.children}
        </div>
    );


};

export default Layout;