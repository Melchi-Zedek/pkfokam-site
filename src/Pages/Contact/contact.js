import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    card: {

        maxWidth: 400,
        marginTop: theme.spacing(4),
        /*background: 'linear-gradient(45deg, #1414dd 30%, #d0d0d9 90%)',*/
        display: 'grid',

        gridGap: theme.spacing(3),
    },
    content: {
        marginTop: theme.spacing(1)
    },

    root: {
        flexGrow: 1
    },

    gridCenter: {
      display: 'flex',
        justifyContent: 'center'
    }
});

const MainContent = withStyles(styles)(({ classes, justify }) => (

    <Grid container spacing={1} className={classes.gridCenter}>

        <Grid container item xs={12} spacing={2}>
            <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4"> Admissions Officer </Typography>
                    <Typography variant="subtitle1">
                        Ms. Grace NDAYA
                    </Typography>
                    <Typography className={classes.content}>
                        Phone:+237 242019027
                        E-mail:pkfokam@pkfinstitute.com
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4"> Academic Affairs Officer </Typography>
                    <Typography variant="subtitle1">
                        Mr. Simon Pierre AMBOUMBE
                    </Typography>
                    <Typography className={classes.content}>
                        Phone: +237 677740257
                        E-mail: simon.amboumbe@pkfinstitute.com
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4"> Vice Dean </Typography>
                    <Typography variant="subtitle1">
                        Dr. Francis Nematchoua
                    </Typography>
                    <Typography className={classes.content} noWrap>
                        <a href="tel:+237 677833829">Phone: +237 677833829</a>
                        <br/>
                        <a href="mailto:nematchouafrancis@yahoo.fr">E-mail: nematchouafrancis@yahoo.fr</a>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h4"> Rector </Typography>
                    <Typography variant="subtitle1">
                        Pr. Thomas NJINE
                    </Typography>
                    <Typography className={classes.content}>
                        Phone:+237 677625665
                        E-mail:thomas.njine@pkfinstitute.com
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
));
export default MainContent;