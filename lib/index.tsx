import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler  = (e) =>{
    console.log(e.target);

}

ReactDOM.render(
    <div>
        <Icon name="qq"
              onClick={fn}
              onMouseEnter={()=>console.log('enter')}
              onMouseLeave={()=>console.log('leave')}
            onTouchStart={()=>console.log('touch')}
        />
    </div>, document.querySelector('#root'))

