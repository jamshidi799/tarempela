import style from './horizental-card.module.scss';

export default function HorizentalPostCard({ title, id, date }) {
  return (
    <div className={style.horizental_card}>
      <img src={`/images/${id}.png`} alt="tarempella" />
      <div className={style.content}>
        <div className="mb-2">{date}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
}
