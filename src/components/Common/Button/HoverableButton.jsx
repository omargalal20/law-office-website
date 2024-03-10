import { useState } from "react"

import hoverableImageButtonIcon from "../../../assets/Images/Misc/hoverable-image-button-icon.svg"

const HoverableButton = ({ buttonText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                marginTop: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflowX: "hidden", // Prevent horizontal scrolling
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button>{buttonText}</button>
            <div
                style={{
                    transition: "transform 0.5s ease",
                    transform: isHovered ? "translateX(5px)" : "translateX(0)",
                }}
            >
                <img
                    src={hoverableImageButtonIcon}
                    alt="icon"
                    style={{ marginLeft: "10px" }}
                />
            </div>
        </div>
    )
}

export default HoverableButton