import styles from './layout.module.scss';
import Header from './common/header';
import Navbar from './common/navbar';
import Footer from './common/footer';

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
