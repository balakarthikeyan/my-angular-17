import { CommonModule } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-locale-switcher',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './locale-switcher.component.html',
    styleUrl: './locale-switcher.component.css'
})

export class LocaleSwitcherComponent {

    locales = [
        { code: 'en-US', name: 'English' },
        { code: 'ru', name: 'Russian' },
    ];

    constructor(
        @Inject(LOCALE_ID) public activeLocale: string,
        public translateService: TranslateService
    ) {

    }

    onChange() {
        this.translateService.use(`${this.activeLocale}`);
        window.location.href = `/${this.activeLocale}`;
    }

    public changeLanguage(language: string): void {
        this.translateService.use(language);
    }
}