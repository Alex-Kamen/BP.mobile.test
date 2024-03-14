import { I18n } from "i18n-js";
import de from '../translations/de.json';
import en from '../translations/en.json';
import es from '../translations/es.json';
import fr from '../translations/fr.json';
import ja from '../translations/ja.json';
import pt from '../translations/pt.json';

export class Translation {

    constructor() {
        this.i18n = new I18n({de, en, es, fr, ja, pt});
        this.i18n.locale = this.getLanguage();
        this._elements = document.querySelectorAll("[data-i18n]");
        document.querySelector('html').setAttribute('lang', this.getLanguage());
    }

    getLanguage() {
        const lang = new URLSearchParams(window.location.search).get('lang') || navigator.language;
        return lang.slice(0, 2);
    }

    translate() {
        this._elements.forEach((element) => {
            const translationKey = element.getAttribute('data-i18n');

            element.innerHTML = this.i18n.t(
                translationKey,
                {
                    defaultValue: en[translationKey],
                    ...this.decodeParams(element.getAttribute('params-i18n'))
                });
        });
    }

    decodeParams(params) {
        if (params) {
            return Object.fromEntries(params.split(',').map(param => param.split(':')));
        }

        return {};
    }
}
