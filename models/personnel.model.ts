export interface IPersonnel
{
	id          : number; 
	firstname   : string;
	lastname    : string;
	birthdate   : Date;
	CIN         : string;
	phoneline   : string;
	entryDate   : Date;
	jobPosition : IJobPosition;
}


export interface IJobPosition {
	id : number;
	name : string;
}