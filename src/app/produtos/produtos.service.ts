import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Produto } from "./produto";

@Injectable()
export class ProdutoService {
    
    constructor (private http: HttpClient) { }

    protected UrlServiceV1: string = "http://localhost:3000/produtos";

    obterProdutos(): Observable<Produto[]>{
        return this.http
        .get<Produto[]>(this.UrlServiceV1);
    }
}