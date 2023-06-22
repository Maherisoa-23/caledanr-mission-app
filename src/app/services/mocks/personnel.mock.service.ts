import { IPersonnel } from "models/personnel.model";
import { MockServiceMixin } from "./common-mock.service";


export class PersonnelMockService extends MockServiceMixin<IPersonnel>
{ 
	constructor()
	{
		super();
		this._mockValues$.next(
			PERSONNELS.map(v => {
				v.birthdate = new Date(v.birthdate);
				v.entryDate = new Date(v.entryDate);
				return v as IPersonnel;
			})
		);
	}
}


const PERSONNELS: any[] = [
	{
		"id": 1,
		"firstname": "John",
		"lastname": "Doe",
		"birthdate": "1990-05-15",
		"CIN": "1234567890",
		"phoneline": "+1234567890",
		"entryDate": "2020-01-01",
		"jobPosition": {
			"id": 1,
			"name": "Software Engineer"
		}
	},
	{
		"id": 2,
		"firstname": "Jane",
		"lastname": "Smith",
		"birthdate": "1985-09-10",
		"CIN": "0987654321",
		"phoneline": "+9876543210",
		"entryDate": "2019-03-15",
		"jobPosition": {
			"id": 2,
			"name": "Data Analyst"
		}
	},
	{
		"id": 3,
		"firstname": "Robert",
		"lastname": "Johnson",
		"birthdate": "1982-12-20",
		"CIN": "4567890123",
		"phoneline": "+2468135790",
		"entryDate": "2018-07-01",
		"jobPosition": {
			"id": 3,
			"name": "Project Manager"
		}
	},
	{
		"id": 4,
		"firstname": "Emily",
		"lastname": "Brown",
		"birthdate": "1993-04-05",
		"CIN": "7890123456",
		"phoneline": "+3692581470",
		"entryDate": "2022-02-28",
		"jobPosition": {
			"id": 4,
			"name": "Sales Representative"
		}
	},
	{
		"id": 5,
		"firstname": "Michael",
		"lastname": "Davis",
		"birthdate": "1991-07-25",
		"CIN": "6543210987",
		"phoneline": "+7418529630",
		"entryDate": "2021-09-10",
		"jobPosition": {
			"id": 5,
			"name": "Graphic Designer"
		}
	},
	{
		"id": 6,
		"firstname": "Jennifer",
		"lastname": "Wilson",
		"birthdate": "1988-03-12",
		"CIN": "9876543210",
		"phoneline": "+8529637410",
		"entryDate": "2017-05-20",
		"jobPosition": {
			"id": 6,
			"name": "Marketing Specialist"
		}
	},
	{
		"id": 7,
		"firstname": "David",
		"lastname": "Miller",
		"birthdate": "1980-11-08",
		"CIN": "0123456789",
		"phoneline": "+3698745210",
		"entryDate": "2016-09-05",
		"jobPosition": {
			"id": 7,
			"name": "Accountant"
		}
	}
];