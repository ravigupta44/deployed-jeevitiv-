import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "../../UI/Button";
import Typography from "@material-ui/core/Typography";
import image1 from "./blogg.png";


const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 250
  },
  BlogContent: {
    textAlign: "left"
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () =>{
     history.push('/Blogs_details/:blogId');
  };

  return (
    <Card className={classes.root} id="media-Card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image1}
          title="Blog Journal"
        />
        <CardContent className={classes.BlogContent}>
          <Typography
            style={{ color: "#5F5F5F", fontSize: "12px" }}
            gutterBottom
            variant="h"
            component="h6"
          >
            June 9, 2021 ADMIN
          </Typography>
          <Typography
            style={{ color: "#035B96", fontSize: "18px" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Scary Thing That You Don’t Get Enough Sleep
          </Typography>
          <Typography
            style={{ color: "#5F5F5F", fontSize: "14px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Now the hold of your documents and their management is in your
            hands. With an innovative and better interface, the user will have
            the complete power on how to manage their files and information.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button buttonClicked={handleClick}>Read More</Button>
        {/* <a href="./Blog.jsx">Read More</a> */}
        
        {/* <Link to="/" className="btn btn-primary">
          Sign up
        </Link> */}
        {/* <Link to='/Blog'>Go to Aboutpage</Link> */}
        {/* <Route exact path="/" component={Blog}/> */}
      </CardActions>
    </Card>
  );
}
