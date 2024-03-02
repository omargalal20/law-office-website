import React, { useState, useEffect } from "react";

import hoverableImageButtonIcon from '../../../assets/Images/Misc/hoverable-image-button-icon.svg'

import profilesData from "../../../data/TeamProfiles.json"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ProfileCard = ({ profileName }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        setProfile(profilesData[profileName] || {});
    }, [profileName]);

    if (!profile) {
        return <div>Profile not found</div>;
    }

    return (
        <Card sx={{ height: "85%", width: "100%", padding: "16px" }}>
            <Grid container spacing={2} height={"100%"}>
                <Grid item xs={4} style={{ position: "relative" }}>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            height: "100%", // Set container height to 100% of grid item
                        }}
                    >
                        <img
                            src={profile.picture}
                            alt={profile.name}
                            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                        />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <Typography gutterBottom variant="h5" component="div" textAlign="left" sx={{
                            color: "#000000",
                            fontWeight: "400",
                            fontFamily: "Montserrat",
                            fontSize: "35px",
                            lineHeight: "43px",
                            letterSpacing: "0em",
                        }}>
                            {profile.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="left" sx={{
                            color: "#000000",
                            fontWeight: "400",
                            fontFamily: "Montserrat",
                            fontSize: "20px",
                            lineHeight: "24px",
                            letterSpacing: "0em",
                        }}>
                            {profile.position}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="left" sx={{
                            color: "#000000",
                            fontWeight: "400",
                            fontFamily: "Montserrat",
                            fontSize: "15px",
                            lineHeight: "18.29px",
                            letterSpacing: "0em",
                        }}>
                            {profile.address}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginTop: "auto",
                }}
            >
                <CardActions>
                    <Button size="small" sx={{
                        color: "#000000",
                        fontWeight: "400",
                        fontFamily: "Montserrat",
                    }}>
                        <div>
                            View Profile
                        </div>
                        <div>
                            <img src={hoverableImageButtonIcon} alt="icon" style={{ marginLeft: "10px" }} />
                        </div>
                    </Button>
                </CardActions>
            </Box>
        </Card >
    )
}

export default ProfileCard