import { Injectable } from "@angular/core";

import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0;

    private generateUniqueId(): string {
        return uuidv4();
    }

    public generateUniqueIdWithPrefix(prefix: string): string {
        if(!prefix){
            throw Error("Prefix can not be empty");
        }
        
        const uniqueId = this.generateUniqueId();

        this.numberOfGeneratedIds = this.numberOfGeneratedIds + 1;

        return `${prefix}-${uniqueId}`;
    }

    public getNumberOfGeneratedIds(): number {
        return this.numberOfGeneratedIds
    }

}