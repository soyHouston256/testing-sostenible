import {Case, Diagnosis, DiseaseFilter} from '../core/diseaseFilter';

describe('Disease filter', () => {
    it('filters cases when several diagnosis filters are applied together', () => {
        const searchCriterion1 = 'Vías Respiratorias Altas';
        const searchCriterion2 = 'Cerebro';
        const diagnoses = [
            createDiagnosis(1, searchCriterion1),
            createDiagnosis(2, searchCriterion2),
            createDiagnosis(3, 'Irrelevant-location'),
        ];
        const expectedName1 = 'Chupito';
        const expectedName2 = 'Juliana';
        const cases = [
            createCase(1, expectedName1),
            createCase(2, expectedName2),
            createCase(3, 'Irrelevant-name'),
        ];
        const diseaseFilter = DiseaseFilter.create(cases, diagnoses);
        diseaseFilter.addFilter(searchCriterion1);
        diseaseFilter.addFilter(searchCriterion2);

        const result = diseaseFilter.casesFiltered;

        expect(result.length).toBe(2);
        expect(result[1].patientName).toBe(expectedName2);
    });
});

function createCase(diagnosisId: number, patientName: string): Case {
    return {
        id: 0,
        patientName: patientName,
        diagnosisId: diagnosisId,
        diagnosisName: 'Irrelevant-diagnosisName',
        publicNotes: [],
        privateNotes: [],
    };
}

function createDiagnosis(id: number, location: string): Diagnosis {
    return {
        id: id,
        name: 'irrelevant-name',
        location: location,
        system: 'irrelevant-system',
        origin: 'irrelevant-origin',
        specie: 'irrelevant-specie',
    };
}
