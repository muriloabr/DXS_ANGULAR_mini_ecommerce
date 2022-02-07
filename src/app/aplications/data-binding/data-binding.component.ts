import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})

export class DataBindingComponent implements OnInit, OnChanges, DoCheck {

  constructor() { }

  ngOnInit(): void {
    this.reiniciarListaItens();
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
  public listaItens: Array<{ nome: string, color: string, img: string }> = [];

  /*apertouATecla(event: any){  //manualmente o falsoTwoWay sendo criado por tecla keyUp
    this.nome_paraTwoWay_falsoTwoWay = event.target.value;
  }*/

  removerItemDaLista(itemPosition: number){
    this.listaItens.splice(itemPosition, 1); //recebe o item e converte em number para retirar da lista!
  }

  adicionarClique(): void {
    this.contadorCliques++;
  }
  
  zerarCliques(): void {
    this.contadorCliques!=0?this.contadorCliques = 0:'';
  }

  reiniciarListaItens(){
    this. listaItens = [
      { nome: 'TIRANOSSAURO REX', color: 'green ', img: './assets/dinos/tr.jpg'},
      { nome: 'PTERANODONTE', color: 'red ', img: './assets/dinos/pd.jpg'},
      { nome: 'MOSASSAURO', color: 'blue ', img: './assets/dinos/mo.jpg'},
      { nome: 'BRAQUIOSSAURO', color: 'grey ', img: './assets/dinos/bo.jpg'},
      { nome: 'STYGIMOLOCH', color: 'yellow', img: './assets/dinos/sm.png'}
    ];
  }
  
}
