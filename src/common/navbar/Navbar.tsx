import {AppButton} from "../"
import {Provider} from "@distributedlab/w3p"
import {IconNamesEnum} from "../../enums"
import {FC} from "react"

import './style.scss'

type NavbarProps = {
    provider?: Provider
}

export const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
    const connect = async () => {
        await props.provider?.connect()
    }

    return (
    <div className="navbar">
        <div className="navbar__content">
            {/* TODO  localization */}
            <AppButton
                       route="/main"
                       leftImage={IconNamesEnum.Logo}
                        isDisabled={false}/>


            <AppButton text="connect" scheme="filled" color="info"
                       onClick={() => {
                           connect()
                       }}/>

        </div>
    </div>
    )
}

export default Navbar;