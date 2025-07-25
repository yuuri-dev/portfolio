import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className="text-white text-2xl text-center font-black">Welcome to My portfolio Page</h1>
      </div>
    </Layout>
  );
}
