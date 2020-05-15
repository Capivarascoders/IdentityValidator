import { Injectable } from '@angular/core';
import * as ethers from 'ethers';
import { environment } from '../../environments/environment';
import * as Identity from '../../../contracts/Identity.json';
import { PortisService } from './portis.service';
import { filter } from 'rxjs/operators';
import { SubjectService } from './subject.service';

@Injectable()
export class ContractService extends SubjectService {
    private provider: any;
    private contractInstance: any;

    constructor(
        private portisService: PortisService
    ) {
        super();

        this.portisService.onEvent.pipe(filter(item => item.type === 'provider')).subscribe((provider) => {
            console.log(provider.data);
            this.provider = provider.data;
        });
    }

    public instanciateContract() {
        if (!environment.identityContractAddress) {
            throw new Error('invalid contract address!');
        }

        if (!Identity || !Identity.abi) {
            throw new Error('invalid contract json, try to run truffle compile!');
        }

        if (!this.provider) {
            throw new Error('invalid provider!');
        }

        this.provider = new ethers.providers.Web3Provider(this.provider);

        const signer = this.provider.getSigner();

        this.contractInstance = new ethers.Contract(
            environment.identityContractAddress,
            Identity.abi,
            signer
        );

        console.log(`contractInstance: ${this.contractInstance}`);
    }

    public async addValidator(strategy: ValidationCostStrategy, price: number) {
        await this.contractInstance.addValidator(
            strategy,
            price
        );
    }

    public async getValidatorByAddress(address: string) {
        return await this.contractInstance.getValidatorByAddress(
            address
        );
    }

    public async getTotalValidators() {
        return await this.contractInstance.getTotalValidators();
    }

    public async disableValidator() {
        await this.contractInstance.disableValidator();
    }

    public async reactivateValidator() {
        await this.contractInstance.reactivateValidator();
    }

    public async validate(
        personaAddress: string,
        field: string,
        validationStatus: ValidationStatus
    ) {
        await this.contractInstance.validate(
            personaAddress,
            field,
            validationStatus
        );
    }

    public async getIdsDataToBeValidatedIdByPersonaId(
        personaId: number
    ) {
        return await this.contractInstance.getIdsDataToBeValidatedIdByPersonaId(
            personaId
        );
    }

    public async getDataToBeValidatedById(
        dataToBeValidateId: number
    ) {
        return await this.contractInstance.getDataToBeValidatedById(
            dataToBeValidateId
        );
    }

    public async getIdsStampsByDataToBeValidatedId(
        dataToBeValidatedId: number
    ) {
        return this.contractInstance.getIdsStampsByDataToBeValidatedId(
            dataToBeValidatedId
        );
    }

    public async getStampById(
        stampId: number
    ) {
        return this.contractInstance.getStampById(
            stampId
        );
    }
}