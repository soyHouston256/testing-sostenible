describe('Use case', () => {
    beforeAll(() => {
        console.log('Antes de todos los tests (before all)');
    })
    beforeEach(() => {
        console.log('Antes de cada test (before each)');
    });
    afterEach(()=>{
        console.log('after each test (after each)');
    })
    afterAll(() => {
        console.log('after of all tests (after all)');
    });
    it('Able to do something 1', () => {
        console.log('Test 1');
        expect(true).toBe(true);
    });
    it('Able to do something 2', () => {
        console.log('Test 2');
        expect(true).toBe(true);
    });
});