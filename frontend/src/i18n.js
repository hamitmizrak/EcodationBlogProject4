import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'username':'user name',
                    'email':'user email address',
                    'password':'user password',
                    'number':'user number',
                }
            },
        tr:
            {
                translations: {
                    'username':'Kullanıcı adı 44',
                    'email':'Kullanıcı email adresiniz 44',
                    'password':'Kullanıcı şifreniz 44',
                    'number':'Kullanıcı numarası 44',
                }
            }
    },
    //fallbackLng: dilimiz default olarak tr olsun
    fallbackLng: 'en',
    //kelimeleri nerede alsın
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: { escapeValue: false, formatSeparator: ',' },
    react: {
        wait: true
    }
});
export default i18n;