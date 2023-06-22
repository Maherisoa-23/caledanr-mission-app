import { IPersonnel } from "models/personnel.model";

const personnel: IPersonnel[] = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    birthdate: new Date('1990-01-01'),
    CIN: '123456789',
    phoneline: '987654321',
    entryDate: new Date('2022-01-01'),
    jobPosition: {
      id: 1,
      name: 'Position 1'
    }
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Smith',
    birthdate: new Date('1992-02-02'),
    CIN: '987654321',
    phoneline: '123456789',
    entryDate: new Date('2022-02-01'),
    jobPosition: {
      id: 2,
      name: 'Position 2'
    }
  },
  {
    id: 3,
    firstname: 'Mike',
    lastname: 'Johnson',
    birthdate: new Date('1995-03-03'),
    CIN: '456789123',
    phoneline: '321654987',
    entryDate: new Date('2022-03-01'),
    jobPosition: {
      id: 3,
      name: 'Position 3'
    }
  },
  {
    id: 4,
    firstname: 'Sarah',
    lastname: 'Lee',
    birthdate: new Date('1998-04-04'),
    CIN: '654987321',
    phoneline: '456123789',
    entryDate: new Date('2022-04-01'),
    jobPosition: {
      id: 4,
      name: 'Position 4'
    }
  },
  {
    id: 5,
    firstname: 'Robert',
    lastname: 'Williams',
    birthdate: new Date('1993-05-05'),
    CIN: '789123456',
    phoneline: '654321987',
    entryDate: new Date('2022-05-01'),
    jobPosition: {
      id: 5,
      name: 'Position 5'
    }
  }
];

export default personnel;
