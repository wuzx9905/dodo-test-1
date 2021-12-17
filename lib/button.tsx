import React, {ReactElement} from 'react';
import './button.scss'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
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