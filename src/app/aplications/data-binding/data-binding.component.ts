import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})

export class DataBindingComponent implements OnInit, OnChanges, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('PASSOU PELO ngDoCheck!');
    if(this.contadorCliques >= 10)
    {       
      this.textoBotao10Cliques = this.mensagensBotao10Cliques[1];
    } else {
      this.textoBotao10Cliques = this.mensagensBotao10Cliques[0];
    }
  }
 
  ngOnChanges(changes: SimpleChanges): void {
      console.log('PASSOU PELO ngOnChanges!');      
  }
  
  private mensagensBotao10Cliques = [ '10 CLIQUES = LIBERAR', 'LIBERADO!' ];
  public contadorCliques: number = 0;
  public imgLink: string = 'https://dataxstudios.com.br/assets/images/DXS_software.png';
  public textoBotao10Cliques: string = this.mensagensBotao10Cliques[0];
  public nome_paraTwoWay_falsoTwoWay: string = "";
  public nome_paraTwoWay_explicito: string = "";
  public nome_paraTwoWay: string = "btn-warning";

  /*apertouATecla(event: any){  //manualmente o falsoTwoWay sendo criado por tecla keyUp
    this.nome_paraTwoWay_falsoTwoWay = event.target.value;
  }*/

  adicionarClique(): void {
    this.contadorCliques++;
  }
  
  zerarCliques(): void {
    this.contadorCliques!=0?this.contadorCliques = 0:'';
  }

  
}
