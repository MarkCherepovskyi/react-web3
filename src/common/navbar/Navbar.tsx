import {AppButton} from "../";
import {Provider} from "@distributedlab/w3p";
import {IconNamesEnum} from "../../enums";

import './Navbar.scss';

type NavbarProps = {
    provider?: Provider
}

export const Navbar = (props: NavbarProps) => {
    const connect = async () => {
        await props.provider?.connect()
    }

    return (
    <div className="navbar">
        <div className="navbar__content">
            {/* TODO  localization */}
            <AppButton className="navbar__logo"
                       route="/main"
                       leftImage={IconNamesEnum.Logo}/>

            <AppButton text="connect" scheme="filled" color="info"
                       onClick={() => {
                           connect()
                       }}/>

        </div>
    </div>
    )
}

export default Navbar;