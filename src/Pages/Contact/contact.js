import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    card: {
        maxWidth: 400
    },
    content: {
        marginTop: theme.spacing(1)
    }
});
const MainContent = withStyles(styles)(({ classes }) => (
    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
    >
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
        </Grid>


));
export default MainContent;