import { Box, Button, Typography } from "@mui/material";
import React from "react";

const MainPage: React.FC = () => {
    return (<Box>
        <img src="/hangoff.svg" className="App-logo" alt="logo" />
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
            }}
        >
            <Button sx={{ minWidth: "290px", minHeight: "70px" }} variant="contained">
                <Typography fontSize="30px">Join Room</Typography>
            </Button>
            <Button
                sx={{ minWidth: "290px", minHeight: "70px" }}
                variant="contained"
            >
                <Typography fontSize="30px">Create Room</Typography>
            </Button>
        </Box>
    </Box>);
};

export default MainPage;