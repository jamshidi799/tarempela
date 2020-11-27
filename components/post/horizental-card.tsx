import Image from 'next/image';
import style from './horizental-card.module.scss';
import Typography from '@material-ui/core/Typography';
import Date from '@components/date';

export default function HorizentalPostCard({ title, id, date }) {
  return (
    <div className={style.horizental_card}>
      <div className={style.image_wrapper}>
        <Image src={`/images/${id}.png`} alt="tarempella" layout="fill" objectFit="cover" />
      </div>
      <div className={style.content}>
        <Typography color="textSecondary" className="mb-3">
          <Date dateString={date} />
        </Typography>
        <Typography color="textSecondary" className={style.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}
