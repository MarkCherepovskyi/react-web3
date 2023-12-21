import {IconNamesEnum} from "../../enums"

import "./Icon.scss"

type  IconProps = {
    image:  IconNamesEnum
}
export const Icon = (props: IconProps) => {
    return (
        <img  className="icon" src={`/src/assets/icons/${props.image}-icon.svg`} alt={""}/>
        // TODO: make better
    )
}

export default Icon;