'use client';

import { Button, Dropdown, Space } from 'antd';
import { TranslationOutlined, UserOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/es/menu/interface';
import { LocaleLabel } from '@/labels/document.label';
import { LocaleEnum } from '@/enums/document.enum';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { stringify } from 'querystring';
import { useT } from '@/app/i18n/client';

/**
 * ANCHOR Switcher
 * @date 19/04/2025 - 22:02:24
 *
 * @returns {*}
 */
const Switcher = () => {
  const { i18n } = useT('footer');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * ANCHOR Changed
   * @date 19/04/2025 - 22:24:17
   *
   * @param {{ locale: LocaleEnum }} payload
   */
  const _changed = (payload: { locale: LocaleEnum }) => {
    const locale: LocaleEnum = i18n.resolvedLanguage as LocaleEnum;
    let path: string = pathname;

    if (pathname.startsWith(`/${locale}`)) {
      const segments: string[] = pathname.split('/');

      if (segments.length >= 2) {
        segments.splice(0, 2);
      }

      path = segments.join('/');
    }

    let href: string = `/${payload.locale}/${path}`;

    const queryString: { [key: string]: string } = {};

    searchParams.forEach((value, key) => {
      queryString[key] = value;
    });

    if (Object.keys(queryString).length > 0) {
      const query: string = stringify(queryString);

      href += `?${query}`;
    }

    router.push(href);
  };

  // items
  const items: ItemType[] = [];

  for (const locale of Object.values(LocaleLabel)) {
    items.push({
      key: locale.key,
      label: locale.title,
      icon: <UserOutlined />,
      onClick: () =>
        _changed({
          locale: locale.key,
        }),
    });
  }

  // ANCHOR Render
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      menu={{
        items,
      }}>
      <Button>
        <Space>
          Button
          <TranslationOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default Switcher;
