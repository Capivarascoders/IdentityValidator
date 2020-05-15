import { Injectable } from '@angular/core';
import Portis from '@portis/web3';
import { environment } from '../../environments/environment';
import { SubjectService } from './subject.service';
import { SubjectType } from '../models/subject-type.enum';

@Injectable()
export class PortisService extends SubjectService {

    private portis = new Portis(environment.portis.appId, this.getNetworkName(environment.network));

    constructor(
    ) {
        super();

        this.portis.onLogin((walletAddress, email, reputation) => {
            console.log(`onLogin: ${walletAddress} | ${email} | ${reputation}`);
            this.dispatchEvent({ type: SubjectType.wallet, data: walletAddress });
            this.dispatchEvent({ type: SubjectType.provider, data: this.portis.provider });
            this.dispatchEvent({ type: SubjectType.logged, data: true });
        });

        this.portis.onLogout(() => {
            console.log(`onLogout:`);
            this.dispatchEvent({ type: SubjectType.wallet, data: null });
            this.dispatchEvent({ type: SubjectType.provider, data: null });
            this.dispatchEvent({ type: SubjectType.logged, data: false });
            this.dispatchEvent({ type: SubjectType.balance, data: 0 });
        });
    }

    private getNetworkName(networkId) {
        switch (networkId) {
            case 1:
                return 'mainnet';
            case 3:
                return 'ropsten';
            case 4:
                return 'rinkeby';
            case 42:
                return 'kovan';
        }
    }

    public show() {
        this.portis.showPortis();
    }

    public logout() {
        this.portis.logout();
    }
}