import React, { useState } from 'react'

import dentonsHongKong from '../../../assets/Images/Insights/main-insights-denton-hong-kong-logo.svg'
import viewMoreInsightsArrow from '../../../assets/Images/Insights/view-more-insights-arrow.svg'

import Box from "@mui/material/Box"

const ViewMoreInsights = ({ toggleView }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row", // Change to row
                height: "181px", // Add "px" to specify the height
            }}
            onClick={toggleView}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                background: "#09283F",
                width: "307px"
            }}>
                <img
                    src={dentonsHongKong}
                    height={"50px"}
                    width={"100px"}
                    alt="icon"
                    style={{marginLeft: "20px"}}
                />
            </div>

            <div
                style={{
                    flex: "1", // Add flex: 1 to make the div expand to fill the remaining space
                    background: "#09283FC7",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: isHovered ? "pointer" : ""
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {
                    ['View More', 'Insights'].map((line, index) => (
                        <div key={index}
                            style={{
                                color: "white",
                                fontSize: "24px",
                                fontWeight: "100",
                                fontFamily: "Montserrat",
                            }}>
                            {line}
                        </div>
                    ))
                }

                <div
                    style={{
                        transition: "transform 0.5s ease",
                        transform: isHovered ? "translateX(20px)" : "translateX(0)",
                    }}
                >
                    <img
                        src={viewMoreInsightsArrow}
                        alt="icon"
                    />
                </div>
            </div>
        </Box>
    )
}

export default ViewMoreInsights