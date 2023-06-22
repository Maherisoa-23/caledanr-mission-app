import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export type TypeWithID<T> = T & {id: number};

export interface ICommonCrudService<T>
{
	create$ : (o  : Omit<T, 'id'>) => Observable<T>;
	update$ : (id : number, o : Omit<T, 'id'>) => Observable<T>;
	get$    : (id : number) => Observable<T>;
	delete$ : (id : number) => Observable<void>;
	all$  : () => Observable<T[]>;
}


export abstract class CommonCrudService<T> implements ICommonCrudService<T>
{
	abstract all$(): Observable<T[]>;
	abstract create$ (o: Omit<T, "id">): Observable<T>;	
	abstract get$ (id: number) : Observable<T>;
	abstract update$ (id: number, o: Omit<T, "id">) : Observable<T>;
	abstract delete$ (id: number) : Observable<void>;
}
