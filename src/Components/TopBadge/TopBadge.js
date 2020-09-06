import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const TopBadge = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Badge badgeContent={4} color="primary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={8} color="secondary">
                <MailIcon />
            </Badge>
            <Badge badgeContent={11} color="error">
                <MailIcon />
            </Badge>
        </div>
    );
};

export default TopBadge;