import {IconNamesEnum} from "../../enums"
import {Icon} from "../index.ts"
import {FC} from "react"

import './style.scss'

type AppButtonProps = {
    text?: string
    scheme?: string
    color?: string
    leftImage?: IconNamesEnum
    rightImage?: IconNamesEnum
    onClick?: () => void
    route?: string
    isDisabled?: boolean
}

export const AppButton:FC<AppButtonProps>  = ({ text, rightImage, leftImage, isDisabled,route, onClick, scheme = "flat",  color = "info"}: AppButtonProps) => {


    const buttonClasses =
        [
            'app-button',
            `app-button--${scheme}`,
            `app-button--${color}`,
            ...(isDisabled ? ['app-button--disabled'] : []),
        ].join(' ')

    const handleClick = () => {
        if (route) {
            window.location.replace(route)
            return
        }
        if (onClick) {
            onClick()
        }
    }

    return (
        <div>
            <button onClick={handleClick} className={buttonClasses} disabled={isDisabled}>
                {leftImage && <Icon name={leftImage} />}
                {text && <p>{text}</p>}
                {rightImage && <Icon name={rightImage} />}
            </button>
        </div>
    )
}

export default AppButton;