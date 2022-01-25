import { RootStackParamList } from '../routes/auth.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
