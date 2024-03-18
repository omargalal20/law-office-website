import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { idx } from '../../../utils/Lunar';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Search = ({ inputColor, isSmallScreen }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (event) => {
        const query = event.target.value;
        setQuery(query);

        if (query.trim() !== '') {
            const searchResults = idx.search(query);
            setResults(searchResults);
        }
        else {
            setResults([]);
        }
    };

    return (
        isSmallScreen ? (
            <Stack
                flexGrow={1}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                    }}>
                    <TextField
                        id="input-with-sx"
                        label="Search Here"
                        variant="standard"
                        value={query}
                        onChange={(event) => {
                            handleSearch(event);
                        }}
                        style={{ width: 180 }}
                        InputProps={{
                            sx: {
                                color: inputColor,
                                '& .MuiInputBase-root': {
                                    color: inputColor, // To change input text color
                                },
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: inputColor,
                                fontSize: '14px',
                            },
                        }}
                    />
                </div>
                {
                    results.length !== 0 && (
                        <div style={{
                            padding: 3,
                            background: "rgba(255, 255, 255, 0.5)",
                            backdropFilter: "blur(5px)",
                            marginLeft: '1.6vw',
                            width: 180,
                            zIndex: 9999,
                        }}>
                            {results.map(result => (
                                <div
                                    style={{
                                        padding: 5,
                                        justifyContent: "normal",
                                        margin: 1,
                                    }}
                                    key={result.ref}
                                >
                                    <Link to={result.ref}>
                                        <button
                                            style={{
                                                fontSize: '18px',
                                                fontStyle: 'italic',
                                                fontWeight: '400',
                                                fontFamily: 'Montserrat',
                                            }}
                                        >
                                            {result.ref}
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )
                }
            </Stack>
        ) : (
            <Stack
                flexGrow={1}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                    }}>
                    <SearchIcon
                        sx={{ transform: 'translate(-10px, 10px)' }}
                        style={{ color: inputColor }}
                    />
                    <TextField
                        id="input-with-sx"
                        label="Search Here"
                        variant="standard"
                        onChange={(event) => {
                            handleSearch(event);
                        }}
                        style={{ width: 630 }}
                        sx={{
                            border: 'none',
                            '& .MuiTextField-root': {
                                color: inputColor,
                            },
                            color: inputColor
                        }}
                        InputLabelProps={{
                            style: {
                                color: inputColor,
                            },
                        }}
                    />
                </div>
                {
                    results.length !== 0 && (
                        <div style={{
                            padding: 3,
                            background: "rgba(255, 255, 255, 0.5)",
                            backdropFilter: "blur(5px)",
                            marginLeft: '1.6vw',
                            width: 630,
                            zIndex: 9999
                        }}>
                            {results.map(result => (
                                <div
                                    style={{
                                        padding: 5,
                                        justifyContent: "normal",
                                        margin: 1,
                                    }}
                                    key={result.ref}
                                >
                                    <Link to={result.ref}>
                                        <button
                                            style={{
                                                fontSize: '18px',
                                                fontStyle: 'italic',
                                                fontWeight: '400',
                                                fontFamily: 'Montserrat',
                                            }}
                                        >
                                            {result.ref}
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )
                }
            </Stack>
        )
    );
};

Search.propTypes = {
    inputColor: PropTypes.string.isRequired,
    isSmallScreen: PropTypes.bool.isRequired
};

export default Search;
