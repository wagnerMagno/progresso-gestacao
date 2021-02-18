import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import images from './../asserts/images/index';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color : process.env.REACT_APP_SECONDARY_COLOR
    },

}));

export default function HeaderComponent(props) {
    const classes = useStyles();

    const sections = [
        { title: '1º mês', url: '#mes_1' },
        { title: '2º mês', url: '#mes_2' },
        { title: '3º mês', url: '#mes_3' },
        { title: '4º mês', url: '#mes_4' },
        { title: '5º mês', url: '#mes_5' },
        { title: '6º mês', url: '#mes_6' },
        { title: '7º mês', url: '#mes_7' },
        { title: '8º mês', url: '#mes_8' },
        { title: '9º mês', url: '#mes_9' }
    ];

    const scrollTop = (top) => {
        setTimeout(() => {
            window.scroll(0, window.scrollY - top);
        }, 100);
    }

    return (
        <React.Fragment>
            <AppBar color="inherit" position="sticky">


                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    <Link
                        color="inherit"
                        noWrap
                        variant="body2"
                        href={"#init"}
                        className={classes.toolbarLink}
                        onClick={() =>  scrollTop(100)}
                    >
                        <img src={images.bebes} style={{ height: "72px" }} />
                    </Link>
                    {sections.map((section) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            className={classes.toolbarLink}
                            onClick={() =>  scrollTop(95)}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}
