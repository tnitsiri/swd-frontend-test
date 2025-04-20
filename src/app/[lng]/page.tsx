import classNames from 'classnames';
import Header from '@/components/header';
import styles from '@/assets/styles/page.module.scss';
import { getT } from '../i18n';
import { Card, Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Link } from '@/components/link';

/**
 * ANCHOR Page
 * @date 20/04/2025 - 16:59:48
 *
 * @async
 * @returns {unknown}
 */
const Page = async () => {
  const { t } = await getT('home');

  // ANCHOR Render
  return (
    <div className={styles.page}>
      <Header />
      <Layout className={styles.layout}>
        <Content
          className={classNames({
            [styles.content]: true,
            [styles.center]: true,
          })}>
          <Row gutter={[18, 18]}>
            <Col>
              <Link href="/layout-style">
                <span>
                  <Card
                    title={t('Test 1')}
                    variant="borderless"
                    style={{
                      width: 300,
                    }}>
                    <p>{t('Layout & Style')}</p>
                  </Card>
                </span>
              </Link>
            </Col>
            <Col>
              <Link href="/form-table">
                <span>
                  <Card
                    title={t('Test 3')}
                    variant="borderless"
                    style={{
                      width: 300,
                    }}>
                    <p>{t('Form & Table')}</p>
                  </Card>
                </span>
              </Link>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Page;
