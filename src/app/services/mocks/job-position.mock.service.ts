import { IJobPosition } from "models/personnel.model";
import { MockServiceMixin } from "./common-mock.service";


export class JobPositionMockService extends MockServiceMixin<IJobPosition>
{
	constructor()
	{
		super();
		this._mockValues$.next(JOB_POSITIONS);
	}
}


const JOB_POSITIONS = [
	{
	  "id": 1,
	  "name": "Software Engineer"
	},
	{
	  "id": 2,
	  "name": "Data Analyst"
	},
	{
	  "id": 3,
	  "name": "Project Manager"
	},
	{
	  "id": 4,
	  "name": "Sales Representative"
	},
	{
	  "id": 5,
	  "name": "Graphic Designer"
	},
	{
	  "id": 6,
	  "name": "Marketing Specialist"
	},
	{
	  "id": 7,
	  "name": "Accountant"
	},
	{
	  "id": 8,
	  "name": "Human Resources Manager"
	},
	{
	  "id": 9,
	  "name": "Customer Support Representative"
	},
	{
	  "id": 10,
	  "name": "Quality Assurance Analyst"
	}
  ]
  