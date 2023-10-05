import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    disabledAcceptButton$ = new BehaviorSubject<boolean>(true)
    constructor() { }
}
