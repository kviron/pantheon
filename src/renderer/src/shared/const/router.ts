export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  AUTH = 'auth',
  REGISTRATION = 'registration',
  SETTINGS = 'settings',
  LIBRARY = 'library',
  APPS = 'apps',
  APP_DETAILS = 'app_details',
  APP_CREATE = 'app_create',
  APP_EDIT = 'app_edit',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteSettings = () => `/settings`
export const getRouteLibrary = () => `/library`
export const getRouteApps = () => '/apps'
export const getRouteAppDetails = (id: string) => `/apps/${id}`
export const getRouteAppCreate = () => '/apps/new'
export const getRouteAppEdit = (id: string) => `/apps/${id}/edit`
export const getRouteAuth = () => '/auth'
export const getRouteRegister = () => '/registration'
export const getRouteForbidden = () => '/forbidden'
