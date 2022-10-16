import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
        {
            translations: {
                'username': 'Username',
                'email': 'email address',
                'password': 'password',
                'price': 'price',
                'submit': 'submit',
                'customerAdd':'customer Add',
                'customerUpdate':'customer Update',

            }
        },
        tr:
        {
            translations: {
                'username': 'Kullanıcı adını giriniz',
                'email': 'email adresini Giriniz',
                'password': 'Şifrenizi Giriniz',
                'price': 'numaranız',
                'submit': 'Gönder',
                'customerAdd':'Müşteri Ekle',
                'customerUpdate':'müşteri güncelle',
            }
        }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: { escapeValue: false, formatSeparator: ',' },
    react: {
        wait: true
    }
});
export default i18n;