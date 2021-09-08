import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from "react-bootstrap";

function Popup(props) {
    const useStyles = makeStyles(theme =>({
        dialogWrapper:{
            padding : theme.spacing(2),
            position : "absolute",
            top : theme.spacing(5),
            minWidth:"600px",
        },
        dialogTitle : {
            paddingRight:'0px'
        }
    }))
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
        <div>
            <Dialog open={openPopup} maxWidth="lg" classes={{ paper : classes.dialogWrapper }}>
                <DialogTitle className={classes.dialogTitle}>
                    <div style={{display:"flex"}}>
                        <Typography variant="h4"component="div" style={{flexGrow:1}}>
                            {title}
                        </Typography>
                        <CloseIcon style={{fontSize:"30", color:"red", fontWeight:"bold"}} onClick={()=>{setOpenPopup(false)}}/>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Popup
