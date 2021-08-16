// domain.com/quizzes
import Link from "next/link";
import { Fragment } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import Router from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/quizzes.module.css'


export async function getServerSideProps(context) {
  const res = await fetch(`http://172.18.0.12:5000/quiz/`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function QuizzesPage(props) {

  const classes = useStyles();

  return (
    <Fragment>
      <h1>The Quizzes page</h1>
      <div className={styles.wrapper}>
        {
          props.data.map(quiz =>
            <div
              key={quiz.id}
              className={styles.child}>
              <Card
                id={quiz.id}
                className={classes.item}>
                <CardActionArea onClick={(e) => Router.push('/quizzes/' + quiz.id)} id={quiz.id}>
                  <CardMedia
                    id={quiz.id}
                    className={classes.media}
                    image="https://st3.depositphotos.com/1003230/17633/i/1600/depositphotos_176333998-stock-photo-man-avatar-profile-view-male.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent id={quiz.id}>
                    <Typography id={quiz.id} gutterBottom variant="h5" component="h2">
                      {quiz.title}
                    </Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>
          )
        }

        <div className={styles.child}>
          <div className={styles.container}>
            <div className={styles.icon}>
              <IconButton onClick={(e) => { Router.push('/quizzes/add') }} color="primary" aria-label="Add new quiz">
                <AddCircleIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
        </div>

      </div>
    </Fragment >
  );
}

export default QuizzesPage;
