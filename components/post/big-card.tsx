import style from './big-card.module.scss';

export default function BigPostCard({ title, id, date }) {
  return (
    <div className={style.big_post_card}>
      <img src={`/images/${id}.png`} alt="tarempella" />
      <div className={style.date}>{date}</div>
      <div className={style.title}>{title}</div>
      <div className="preview"></div>
    </div>
  );
}
