import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const ImageOverlay = ({ alt, src, primaryText, secondaryText, toPage }) => {
    // const toPagePath = toPage.split('/').pop();
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                cursor: 'pointer',
            }}
        >
            <Link to={"/" + toPage}>
                <img src={src} alt={alt} style={{ height: 442, width: "100%" }} />
                <div
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        color: "white",
                        fontFamily: "Montserrat",
                        fontSize: "40px",
                        fontWeight: "500",
                        lineHeight: '49px',
                        letterSpacing: '0em',
                        paddingBottom: "20px",
                        paddingLeft: "20px",
                    }}
                >
                    {primaryText} {" "}
                    <span
                        style={{
                            fontWeight: 100,
                            fontStyle: "italic"
                        }}>
                        {secondaryText}
                    </span>
                </div>
            </Link>
        </Box>
    );
};

export default ImageOverlay;
