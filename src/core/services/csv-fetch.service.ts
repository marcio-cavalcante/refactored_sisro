import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CsvFetchService {
    constructor(private http: HttpClient) { }

    getCsvData<T>(url: string): Observable<T[]> {
        return this.http.get(url, { responseType: 'text' }).pipe(
            map(csv => this.parseCsv<T>(csv)),
            catchError(err => throwError(() => new Error('Erro no carregamento dos dados')))
        );
    }

    private parseCsv<T>(csv: string): T[] {
        const [headerLine, ...lines] = csv.split('\n').filter(Boolean);
        const headers = headerLine.split('|').map(h => h.trim());

        // Criação do array de objetos a partir das linhas do CSV
        return lines.map(line => {
            const values = line.split('|').map(v => v.trim());
            const obj = Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']));
            return obj as unknown as T;
        });
    }
}