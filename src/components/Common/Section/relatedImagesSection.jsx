import React from 'react'

import HoverableImage from '../../../components/Common/HoverableImage/hoverableImage'

import Stack from '@mui/material/Stack'
import Box from "@mui/material/Box"


const RelatedImagesSection = ({ insightImages, teamName = "Employment" }) => {
    return (
        <Stack direction="row" spacing={2} sx={{ height: "100%" }}>
            {/* Labor law images */}
            {insightImages.map((item) => (
                <HoverableImage
                    key={item.title}
                    src={item.img}
                    width="100%"
                    height="100%"
                    text={item.textLines}
                    buttonEnabled={false}
                />
            ))}

            {/* Box with two divs */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "50",
                    width: "30%",
                }}
            >
                <div
                    style={{
                        height: "70%",
                        backgroundImage: "linear-gradient(0deg, #09283F, #09283F)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    {
                        ['Our', teamName, 'Team'].map((line, index) => (
                            <div key={index}
                                style={{
                                    color: "white",
                                    fontSize: "24px",
                                    fontWeight: "400",
                                    fontFamily: "Montserrat",
                                }}>
                                {line}
                            </div>
                        ))
                    }
                </div>
                <div
                    style={{
                        height: "30%",
                        backgroundImage: "linear-gradient(0deg, #702082, #702082)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    {
                        ['Find', 'Out', 'More'].map((line, index) => (
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
                </div>
            </Box>
        </Stack>
    )
}

export default RelatedImagesSection