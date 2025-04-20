import Switcher from '@/components/switcher';
import { getT } from '@/app/i18n';
import { Link } from '@/components/link';

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
    <div>
      <Switcher />
      <h1>{t('Contact Us')}</h1>
      <Link href="/">{t('Home')}</Link>
    </div>
  );
};

export default Page;
