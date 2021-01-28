import { createI18n } from 'vue-i18n'
import messages from '@/locale/index'

const i18n = createI18n({
    locale: 'enUS',
    messages
})

export default i18n