import style from './horizental-card.module.scss';
import Typography from '@material-ui/core/Typography';

export default function HorizentalPostCard({ title, id, date }) {
  return (
    <div className={style.horizental_card}>
      <img src={`/images/${id}.png`} alt="tarempella" />
      <div className={style.content}>
        <Typography color="textSecondary" className="mb-3">
          {date}
        </Typography>
        <Typography color="textSecondary" className={style.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}
