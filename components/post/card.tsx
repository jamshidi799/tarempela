import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import style from './card.module.scss';
import Date from '@components/date';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function PostCard({ title, id, date }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={style.image_wrapper}>
          <Image src={`/images/${id}.webp`} alt="tarempella" layout="fill" objectFit="cover" />
        </CardMedia>
        {/* <CardMedia component="img" alt="Contemplative Reptile" height="140" image={`/images/${id}.png`} title="Contemplative Reptile" /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Date dateString={date} />
      </CardActions>
    </Card>
  );
}
