import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Selecao } from "src/app/models/selecao.model";
type jogoResponse = {
  selecaoA?: any,
  selecaoB?:any,  
}
@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {
  selecaoA = 0;
  selecaoB = 0;
  response: jogoResponse = {}
  constructor(private http: HttpClient) {}
  selecoes : any = []
  ngOnInit(): void {
    this.getSelecoes();
  }

  getSelecoes(){
    const url = "https://localhost:5001/api/selecao/listar";

    this.http.get(url).subscribe(response => {
      this.selecoes = response;
    })
  }

  criarJogo(){
    const url = `https://localhost:5001/api/jogo/cadastrar`;
    this.response.selecaoA = this.selecaoA;
    this.response.selecaoB = this.selecaoB;
    this.http.post(url,this.response).subscribe( response => {
      console.log(response)
    })
  }
}
