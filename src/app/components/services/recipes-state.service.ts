import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipesStateService {

    private editViewMode: BehaviorSubject<EditViewEnum> = new BehaviorSubject<EditViewEnum>(null);
    editViewMode$: Observable<EditViewEnum> = this.editViewMode.asObservable();

    constructor() {}

    setEditViewMode(mode: EditViewEnum) {
        this.editViewMode.next(mode);
    }

}

export const enum EditViewEnum {
    Edit = 'Edit',
    View = 'View'
}
