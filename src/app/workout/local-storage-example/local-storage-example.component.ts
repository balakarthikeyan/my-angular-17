import { Component, inject, OnInit } from '@angular/core';
import { UserSetting } from 'src/app/interfaces/user-setting';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-local-storage-example',
    standalone: true,
    imports: [],
    templateUrl: './local-storage-example.component.html',
    styleUrl: './local-storage-example.component.css'
})
export class LocalStorageExampleComponent implements OnInit {

    userSettings = {
        name: 'John Joe',
        preferences: {
            theme: 'dark',
            language: 'en'
        }
    };

    private readonly localStorageService = inject(LocalStorageService);

    setUserSettings(userSettings: UserSetting): void {
        this.localStorageService.set('UserSettingKey', userSettings);
    }

    getUserSettings(): UserSetting | null {
        console.log(this.localStorageService.get<UserSetting>('UserSettingKey'));
        return this.localStorageService.get<UserSetting>('UserSettingKey');
    }

    removeUserSettings(): void {
        return this.localStorageService.remove('UserSettingKey');
    }

    removeListOfKeys(): void {
        return this.localStorageService.removeKeys([
            'UserSettingKey'
        ]);
    }

    ngOnInit(): void {
        this.setUserSettings(this.userSettings);
        this.getUserSettings();
    }
}
