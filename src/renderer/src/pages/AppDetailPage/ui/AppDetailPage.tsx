import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AppDetailPage = () => {
  const { t } = useTranslation()

  return <Page data-testid="AppDetailPage">{t('Страница игры')}</Page>
}

export default AppDetailPage
