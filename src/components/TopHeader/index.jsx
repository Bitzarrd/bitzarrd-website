import "./index.css";
import cn from "classnames";
import logo from "@/assets/logo.png";
import bitzzardButton from "@/components/Button/index.jsx";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate()
    return (
        <div>
            <div className="topHead flexBetween">

                <div onClick={() => {
                    navigate('/')
                }} style={{cursor: 'pointer'}}>

                    <img src={logo} height="40" alt=""/>

                </div>

                <a href={"https://litepaper.bitzarrd.xyz/"}
                   target={"_blank"}
                   style={{"textDecoration": "none"}}>
                    <div className="bt1">
                        Doc
                    </div>
                </a>

            </div>
        </div>
    );
}
