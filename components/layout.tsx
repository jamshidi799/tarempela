import styles from './layout.module.scss';
import Header from './common/header';
import Navbar from './common/navbar';
import Footer from './common/footer';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, isCantanier }) {
  return (
    <div className={isCantanier ? 'container' : ''}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
