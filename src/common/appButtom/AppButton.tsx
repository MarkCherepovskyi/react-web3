import {IconNamesEnum} from "../../enums"
import {Icon} from "../"

import './AppButton.scss'

type appButton = {
    text?: string
    scheme?: string
    color?: string
    leftImage?: IconNamesEnum
    rightImage?: IconNamesEnum
    onClick?: () => void
    route?: string
    disabled?: boolean
    className?: string
}

export const AppButton = (props: appButton) => {
    const {
        color = "info",
        scheme = "flat"
    } = props;


    const buttonClasses =
        [
            'app-button',
            `app-button--${scheme}`,
            `app-button--${color}`,
            ...(props.disabled ? ['app-button--disabled'] : []),
        ].join(' ')

    const handleClick = () => {
        if (props.route) {
            window.location.replace(props.route)
            return
        }
        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <div className={props.className}>
            <button onClick={handleClick} className={buttonClasses}>
                {props.leftImage && <Icon image={props.leftImage} />}
                {props.text && <p>{props.text}</p>}
                {props.rightImage && <Icon image={props.rightImage} />}
            </button>
        </div>
    )
}

export default AppButton;