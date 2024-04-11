import './index.css'
import cn from "classnames";


export default function (props) {
    const typeClassMap = {
        dark: "darkBtn",
        light: "lightBtn",
        primary: "primaryBtn",
    };
    const sizeClassMap = {
        big: "bigBtn",
        normal: "normalBtn",
        small: 'smallBtn'
    };
    const typeClassName = typeClassMap[props.type || "primary"];
    const sizeClassName = sizeClassMap[props.size || "normal"];

    return (
        <>
            <a href={props.href} target={"_blank"} style={{"textDecoration": "none"}}>
                <div className={cn("bitzzardBtn", typeClassName, sizeClassName)} style={props.style}>
                    {props.text}
                </div>
            </a>
        </>
    )
}
