import React from 'react'

import sectionHeaderArrow from '../../../assets/Images/Misc/section-header-arrow.svg'

const SectionHeader = ({ title }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", marginTop: "10vh", marginBottom: "10vh" }}>
            <p
                style={{
                    color: "#000000",
                    fontSize: "50px",
                    fontWeight: "100",
                    lineHeight: "1.2",
                }}
            >
                <span
                    style={{
                        fontStyle: "italic",
                        fontWeight: "100",
                        lineHeight: "60.95px",
                    }}
                >
                    {title}
                </span>
            </p>

            <img
                src={sectionHeaderArrow}
                alt="icon"
                style={{ marginLeft: "10px" }}
            />
        </div>
    )
}

export default SectionHeader