import Image from 'next/image';
import style from './big-card.module.scss';
import Typography from '@material-ui/core/Typography';
import Date from '@components/date';

export default function BigPostCard({ title, id, date }) {
  return (
    <div className={style.big_post_card}>
      <Image src={`/images/${id}.webp`} alt="tarempella" layout="responsive" width={700} height={475} />
      <Typography variant="h6" color="textSecondary" className={style.date}>
        <Date dateString={date} />
      </Typography>
      <Typography variant="h3" color="textSecondary" className={style.title}>
        {title}
      </Typography>
      <div className="preview"></div>
    </div>
  );
}
