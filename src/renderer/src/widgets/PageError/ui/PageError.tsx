import { Button } from '@/shared/ui/Button'

const PageError = () => {
  const reloadPage = () => {
    window.location.reload()
  }
  return (
    <div>
      Страница ошибки
      <Button onClick={reloadPage}>Перезагрузить</Button>
    </div>
  )
}

export default PageError
