import React, {ReactElement} from 'react';
import './button.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    children?: ReactElement | Array<ReactElement> | string
}

const Button:React.FunctionComponent<ButtonProps> = (props)=> {
    return (
        <button className={props.className}>
            <span>
                {props.children}
            </span>
        </button>
    )
}

export default Button

// function Button() {
//     return (
//         <button>button2</button>
//     );
// }
//
// export default Button;