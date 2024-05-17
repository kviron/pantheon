import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const LibraryPage = () => {
  const { t } = useTranslation()

  return <Page data-testid="LibraryPage">{t('Страница библиотеки')}</Page>
}

export default LibraryPage
