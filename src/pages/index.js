import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className="flex flex-col items-center space-y-1">
          <h1 className="text-white text-4xl text-center font-black">
            Welcome to My Portfolio.
          </h1>
          <p className="text-white text-lg text-center mt-6 max-w-xl mx-auto">
            This site showcases my skills and past projects to help you better
            understand my strengths and approach to development.
          </p>
        </div>
      </div>
    </Layout>
  );
}
