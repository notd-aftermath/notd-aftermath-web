import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValidationResponse } from '../DTOs/validationResponse';
import { ValidationRequest } from '../DTOs/validationRequest';
import { ValidationRequestEntry } from '../DTOs/validationRequestEntry';

@Injectable({ providedIn: 'root' })
export class CodeService {

    private codeServiceUrl = 'https://us-east1-notda-code-decoder.cloudfunctions.net';

    constructor(
        private http: HttpClient
    ) {}

    validateCode(name: string, code: string): Observable<ValidationResponse> {
        const url = `${this.codeServiceUrl}/DecodeFunction`;
        const body = new ValidationRequest();
        body.codes.push(new ValidationRequestEntry(name, code));

        return this.http.post<ValidationResponse>(url, body);
    }
}
