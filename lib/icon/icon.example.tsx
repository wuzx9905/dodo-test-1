import  * as React from 'react';
import Icon from './icon';


const IconExample: React.FunctionComponent = () => {
    return (
        <div className="iconExample">
            <Icon name="alipay"/>
            <Icon name="wechat"/>
            <Icon name="qq"/>
            <Icon name="jd"/>
        </div>
    );
};

export default IconExample;