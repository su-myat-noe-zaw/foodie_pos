import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, TextField } from '@mui/material';
import { useAppDispatch } from '@/store/hooks';
import { createMenuCategory } from '@/store/slices/menuCategorySlice';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewMenuCategory = ({ open, setOpen }: Props) => {
    const dispatch = useAppDispatch();
    const [name, setName] = React.useState<string>("");

    const handleClose = () => {
        setOpen(false);
    };

    const onSuccess = ()=>{
      handleClose()
    }

    const handleCreateMenuCategory = () => {
        const locationId = localStorage.getItem('currentLocation');
        dispatch(
          createMenuCategory({ name, locationId: Number(locationId), onSuccess})
        );
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add New Menu Category"}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 1 }}>
                        <TextField onChange={(e) => setName(e.target.value)} label={'Name'} variant='outlined' autoFocus />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ mr: 2, mb: 1 }}>
                    <Button onClick={handleClose} variant='contained'>Cancel</Button>
                    <Button onClick={handleCreateMenuCategory} variant='contained' disabled={!name}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default NewMenuCategory;
