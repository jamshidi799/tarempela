import Link from 'next/link';
import PostCard from './card';

export default function Posts({ posts }) {
  return (
    <div className="row">
      {posts.map(({ id, date, title }) => (
        <div className="col-12 col-sm-6 col-lg-3 mb-4" key={id}>
          <Link href={`/blog/${id}`} passHref>
            <a>
              <PostCard title={title} date={date} id={id} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
