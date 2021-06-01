import { UniqueIdService } from "./unique-id.service"

describe(UniqueIdService.name, () =>{

    let service: UniqueIdService = null

    beforeEach(() => {
        service = new UniqueIdService()
    })

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        SHOULD 
        generate id 
        WHEN
        called with prefix`, 
        () =>{

        const id = service.generateUniqueIdWithPrefix('app');

        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        SHOULD 
        not generate duplicated IDs 
        WHEN 
        called multiple times`, 
        () => {

        const expectedNumberOfDifferentIds = 50

        const ids = new Set();

        for (let i = 0; i < expectedNumberOfDifferentIds; i++){
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }

        expect(ids.size).toBe(expectedNumberOfDifferentIds)
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        SHOULD
        throw error
        WHEN
        called with empty prefix`, () => {
            
            const emptyValues = [null, undefined, '', '0', '1']

            emptyValues.forEach( emptyValue => {
                expect(() => service.generateUniqueIdWithPrefix(emptyValue))
                .withContext(`Empty value: ${emptyValue}`)
                .toThrow()
            })
        })

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} 
        SHOULD 
        return the number of generated ids 
        WHEN 
        called`, 
        () => {

        const numberOfExecutions = 2

        for(let i =0; i < numberOfExecutions; i++){
            service.generateUniqueIdWithPrefix('app1')
        }
        
        expect(service.getNumberOfGeneratedIds()).toBe(numberOfExecutions)
    });


});