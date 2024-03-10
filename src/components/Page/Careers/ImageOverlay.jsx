import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const ImageOverlay = ({ alt, src, text, toPage }) => {
    return (
        <Link to={toPage}>
            <Box
                sx={{
                    width: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                }}
            >
                <img src={src} alt={alt} style={{ height: 442, width: '100%' }} />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        padding: '8px',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {text}
                </div>
            </Box>
        </Link>
    );
};

export default ImageOverlay;
