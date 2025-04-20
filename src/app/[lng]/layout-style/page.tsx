import Header from '@/components/header';
import Triangle from './(components)/triangle';
import Square from './(components)/square';
import styles from '@/assets/styles/page.module.scss';
import { getT } from '@/app/i18n';
import { Link } from '@/components/link';
import { ShapeTriangleEnum } from '@/enums/shape.enum';
import { Flex, Layout } from 'antd';
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

      <Layout
        style={{
          backgroundColor: 'transparent',
        }}>
        <Content style={{ padding: '0 48px' }}>
          <Flex vertical={true} gap="middle">
            <Flex gap="middle">
              <Flex>
                <Triangle shape={ShapeTriangleEnum.Left} />
              </Flex>
              <Flex>
                <Triangle shape={ShapeTriangleEnum.Top} />
              </Flex>
              <Flex>
                <Triangle shape={ShapeTriangleEnum.Bottom} />
              </Flex>
              <Flex>
                <Triangle shape={ShapeTriangleEnum.Right} />
              </Flex>
            </Flex>
            <Flex gap="middle">
              <Flex>
                <Square />
              </Flex>
            </Flex>
          </Flex>
        </Content>
      </Layout>
    </div>
  );
};

export default Page;
