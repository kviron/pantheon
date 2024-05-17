import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AppPage = () => {
  const { t } = useTranslation()

  return <Page data-testid="LibraryPage">{t('Страница библиотеки')}</Page>
}

export default AppPage
