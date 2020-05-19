import { Injectable } from '@angular/core';
import * as ethers from 'ethers';
import { environment } from '../../environments/environment';
import * as Identity from '../../../contracts/Identity.json';
import { PortisService } from './portis.service';
import { filter } from 'rxjs/operators';
import { SubjectService } from './subject.service';
import { SubjectType } from '../models/subject-type.enum';
import { ValidationCostStrategy } from '../models/validation-cost-strategy.enum';
import { ValidationStatus } from '../models/validation-status.enum';

@Injectable()
export class ContractService extends SubjectService {

    private contractInstance: any;
    private provider: any;
    private wallet: string;

    constructor(
        private portisService: PortisService
    ) {
        super();

        this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.wallet)).subscribe((result) => {
            this.wallet = result.data;
        });

        this.portisService.onEvent.pipe(filter(item => item.type === SubjectType.provider)).subscribe((provider) => {
            if (provider.data) {
                this.provider = new ethers.providers.Web3Provider(provider.data);

                const signer = this.provider.getSigner();

                this.contractInstance = new ethers.Contract(
                    environment.identityContractAddress,
                    Identity.abi,
                    signer
                );

                if (this.wallet) {
                    this.provider
                        .getBalance(this.wallet)
                        .then((result) => {
                            const balanceInEther = ethers.utils.formatEther(result);
                            this.dispatchEvent({ type: SubjectType.balance, data: balanceInEther });
                        });
                }
            }
        });
    }

    public async getBalance(address) {
        return await this.provider.getBalance(address);
    }

    public async isValidator(address: string) {
        return await this.contractInstance.isValidator(
            address
        );
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

    public async getIdsDataToBeValidatedIdByValidatorId(
        validatorId: number
    ) {
        return await this.contractInstance.getIdsDataToBeValidatedIdByValidatorId(
            validatorId
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