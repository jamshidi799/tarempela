import style from './big-card.module.scss';
import Typography from '@material-ui/core/Typography';

export default function BigPostCard({ title, id, date }) {
  return (
    <div className={style.big_post_card}>
      <img src={`/images/${id}.png`} alt="tarempella" />
      <Typography variant="h6" color="textSecondary" className={style.date}>
        {date}
      </Typography>
      <Typography variant="h3" color="textSecondary" className={style.title}>
        {title}
      </Typography>
      <div className="preview"></div>
    </div>
  );
}
