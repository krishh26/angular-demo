import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ContentService {

    message = 'Initial message from the root service';
    
    constructor() { }

}
