import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return <Page data-testid="AppDetailPage">{t('Страница игры')}</Page>
}

export default NotFoundPage
