import { FC } from 'react'
import {IconNamesEnum} from "../../enums"

import './style.scss'

interface IconProps {
    name: IconNamesEnum
    color?:  string
}

export const Icon: FC<IconProps> = ({ name, color='black', ...rest }) => {
    return (
        <svg className="icon" aria-hidden='true'>
            <use href={`#${name}-icon`} color={color} {...rest} />
        </svg>
    )
}

export default Icon