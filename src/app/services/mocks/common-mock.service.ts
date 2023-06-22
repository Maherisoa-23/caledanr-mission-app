import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { CommonCrudService, TypeWithID } from "../common.service";




export class MockServiceMixin<T> extends CommonCrudService<TypeWithID<T>>
{
	protected _mockValues$ = new BehaviorSubject<TypeWithID<T>[]>([]);


	override create$(toCreate: Omit<TypeWithID<T>, "id">): Observable<TypeWithID<T>> {
		const index = this._mockValues$.getValue().length +1 ;
		const values= this._mockValues$.getValue();
		const created = {...toCreate, id: index}  as TypeWithID<T>;
		values.push(created);
		this._mockValues$.next(values);

		return of(created);
	}

	override get$(id: number): Observable<TypeWithID<T>> {
		const values= this._mockValues$.getValue();
		const index = values.findIndex(v => v.id === id);
		if(index === -1)
		{
			return throwError(()=> new Error('ItemNotFound'));
		}
		return of(values.at(index) as TypeWithID<T>);
	}

	override update$(id: number, o: Omit<TypeWithID<T>, "id">): Observable<TypeWithID<T>> {
		const values = this._mockValues$.getValue();
		const index = values.findIndex(v=> v.id === id);
		if(index === -1)
		{
			return throwError(()=> new Error('ItemNotFound'));
		}
		const value = values.at(index) as TypeWithID<T>;
		const updated = {...o, id: value.id} as TypeWithID<T>
		values.splice(index, 1, updated);
		this._mockValues$.next(values);

		return of(updated);
	}

	override delete$(id: number): Observable<void> {
		const values = this._mockValues$.getValue();
		const index = values.findIndex(v=> v.id === id);
		if(index === -1)
		{
			return throwError(()=> new Error('ItemNotFound'));
		}
		values.splice(index, 1);
		this._mockValues$.next(values);
		return of();
	}

	override all$() : Observable<TypeWithID<T>[]>
	{
		return this._mockValues$.asObservable();
	}
	
}