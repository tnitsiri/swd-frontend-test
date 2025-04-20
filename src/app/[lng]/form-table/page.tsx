import Header from '@/components/header';
import Form from './(components)/form';
import styles from '@/assets/styles/page.module.scss';
import { getT } from '@/app/i18n';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Metadata } from 'next';
/**
 * ANCHOR Generate Metadata
 * @date 20/04/2025 - 16:23:44
 *
 * @export
 * @async
 * @returns {Promise<Metadata>}
 */
export async function generateMetadata(): Promise<Metadata> {
  // translate
  const { t } = await getT();

  // title
  const title: string = t('Form & Table');

  return {
    title,
  };
}

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
      <Header topic={t('Form & Table')} />
      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <Form />
        </Content>
      </Layout>
    </div>
  );
};

export default Page;
