import Header from '@/components/header';
import Display from './(components)/display';
import styles from '@/assets/styles/page.module.scss';
import { getT } from '@/app/i18n';
import { Link } from '@/components/link';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

/**
 * ANCHOR Page
 * @date 19/04/2025 - 21:45:25
 *
 * @async
 * @returns {unknown}
 */
const Page = async () => {
  const { t } = await getT();

  // ANCHOR Render
  return (
    <div className={styles.page}>
      <Header topic={t('Layout & Style')} />
      <Link href="/">{t('Home')}</Link>

      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <Display />
        </Content>
      </Layout>
    </div>
  );
};

export default Page;
