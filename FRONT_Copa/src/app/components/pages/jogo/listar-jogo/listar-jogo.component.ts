import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-listar-jogo",
  templateUrl: "./listar-jogo.component.html",
  styleUrls: ["./listar-jogo.component.css"],
})
export class ListarJogoComponent implements OnInit {
  jogos:any = [];
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.getJogos()
  }

  getJogos(){
    const url = "https://localhost:5001/api/jogo/listar";

    this.http.get(url).subscribe(response => {
      this.jogos = response;
    })
  }
}
