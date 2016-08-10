import { addProviders, async, inject } from '@angular/core/testing';
import { provide } from '@angular/core';
import { ActionSheetController, ModalController, NavController, ToastController } from 'ionic-angular';
import { baseProviders } from '../../../test/common-providers';
import { FirebaseProvider } from '../../providers/firebase-provider/firebase-provider';
import { UploadPage } from './upload-page';

let specProviders = baseProviders.concat([
    FirebaseProvider,
    provide(ModalController, { useClass: ModalController }),
    provide(ActionSheetController, { useClass: ActionSheetController }),
    provide(ToastController, { useClass: ToastController }),
]);

describe('UploadPage', () => {
    let page: UploadPage;
    let pageDep: any[] = [NavController, ModalController, ActionSheetController, ToastController, FirebaseProvider];

    beforeEach(() => {
        addProviders(specProviders);
    });

    it('should be defined', inject(pageDep, (_nav, _modal, _action, _toast, _fb) => {
        // todo: complete this test
    }));

    it('should take pic', inject(pageDep, (_nav, _modal, _action, _toast, _fb) => {
        // todo: complete this test
    }));
});