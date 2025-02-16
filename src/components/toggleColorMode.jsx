import {
    Box,
    Button,
    Tooltip,
} from '@mui/material'

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode({ mode, toggleColorMode }) {
    return (
        <Tooltip title="Theme">
            <Box sx={{ maxWidth: '32px' }}>
                <Button
                    size="small"
                    variant="text"
                    onClick={toggleColorMode}
                    aria-label="button to toggle theme"
                    sx={{ minWidth: '32px', height: '32px', p: '4px' }}
                >
                    {mode === 'dark' 
                        ? <WbSunnyRoundedIcon fontSize="small" /> 
                        : <ModeNightRoundedIcon fontSize="small" />}
                </Button>
            </Box>
        </Tooltip>
    );
}

export default ToggleColorMode;