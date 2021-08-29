import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import "./Contacts.css";



const styles = theme => ({
    card: {
        /*maxWidth: 400,*/
        marginTop: theme.spacing(4),
        background: 'linear-gradient(45deg, #1414dd 30%, #d0d0d9 90%)',
        width: '85%',
        outlineStyle: 'solid',
        outlineColor : 'invert'
    },
    content: {
        marginTop: theme.spacing(2)
    },

    root: {
        flexGrow: 1
    },

    gridCenter2: {
        marginLeft: '4%'
       }
});

const Container = props => <Grid container {...props} />;
const Item = props => <Grid item {...props}  />;

const MainContent = withStyles(styles)(({ classes }) => (
    <div  className = "gridCenter">
    <div className = {classes.root}>
        <Container spacing={2} className={classes.gridCenter2}>
   {/* <Grid container spacing = {2} className={classes.gridCenter2}>*/}
        {/*<Grid item xs = {6}>*/}
            <Item xs={12} sm={6} md={6}>
            <Card className = {classes.card}>
                <CardContent>
                    <Typography variant="h5"> Admissions Officer </Typography>
                    <Typography variant="subtitle1">
                        Ms. Grace NDAYA
                    </Typography>
                    <Typography className={classes.content}>
                        Phone: <a href="tel:+237242019027">(+237) 242019027</a>
                        <br/>E-mail: <a href="mailto:pkfokam@pkfinstitute.com">pkfokam@pkfinstitute.com</a>
                    </Typography>
                </CardContent>
            </Card>
            </Item>
        {/*</Grid>*/}
        {/*<Grid item xs={6}>*/}
            <Item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5"> Academic Affairs Officer </Typography>
                    <Typography variant="subtitle1">
                        Mr. Simon Pierre AMBOUMBE
                    </Typography>
                    <Typography className={classes.content}>
                        Phone: <a href="tel:(+237)677740257">(+237) 677740257</a>
                        <br/>E-mail: <a href="mailto:simon.amboumbe@pkfinstitute.com">simon.amboumbe@pkfinstitute.com</a>
                    </Typography>
                </CardContent>
            </Card>
            </Item>
        {/*</Grid>*/}
        {/*<Grid item xs={6}>*/}
            <Item xs = {12} sm={6} md={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5"> Vice Dean </Typography>
                    <Typography variant="subtitle1">
                        Dr. Francis Nematchoua
                    </Typography>
                    <Typography className={classes.content} noWrap>
                        Phone: <a href="tel:+237677833829">(+237) 677833829</a>
                        <br/>E-mail: <a href="mailto:nematchouafrancis@yahoo.fr">nematchouafrancis@yahoo.fr</a>
                    </Typography>
                </CardContent>
            </Card>
            </Item>
        {/*</Grid>*/}
        {/*<Grid item xs={6} >*/}
            <Item xs={12} sm={6} md={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5"> Rector </Typography>
                    <Typography variant="subtitle1">
                        Pr. Thomas NJINE
                    </Typography>
                    <Typography className={classes.content}>
                        Phone: <a href="tel:+237677625665">(+237) 677625665</a>
                        <br/>E-mail: <a href="mailto:thomas.njine@pkfinstitute.com">thomas.njine@pkfinstitute.com</a>
                    </Typography>
                </CardContent>
            </Card>
            </Item>
       {/* </Grid>*/}
   {/* </Grid>*/}
        </Container>
    </div>
    </div>
));
export default MainContent;