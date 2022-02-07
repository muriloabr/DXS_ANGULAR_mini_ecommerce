import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})

export class DataBindingComponent implements OnInit, OnChanges, DoCheck {

  private mensagensBotao10Cliques = [ '10 CLIQUES = LIBERAR', 'LIBERADO!' ];
  public contadorCliques: number = 0;
  public imgLink: string = 'https://dataxstudios.com.br/assets/images/DXS_software.png';
  public textoBotao10Cliques: string = this.mensagensBotao10Cliques[0];
  public nome_paraTwoWay_falsoTwoWay: string = "";
  public nome_paraTwoWay_explicito: string = "";
  public nome_paraTwoWay: string = "btn-warning";
  public listaItens: Array<{ nome: string, color: string, img: string, podeVoar: boolean, ativo: boolean }> = [];
  public dinoDestaque: number = 0;
  public filtro_requerVoar = false;

  constructor() { }

  ngOnInit(): void {
    console.log('PASSOU PELO ngOnInit!');
    this.reiniciarListaItens();  
    this.piscar();  
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
      { nome: 'TIRANOSSAURO REX', color: 'green ', img: './assets/dinos/tr.jpg', podeVoar: false, ativo: true},
      { nome: 'PTERANODONTE', color: 'red ', img: './assets/dinos/pd.jpg', podeVoar: true, ativo: true},
      { nome: 'MOSASSAURO', color: 'blue ', img: './assets/dinos/mo.jpg', podeVoar: false, ativo: true},
      { nome: 'BRAQUIOSSAURO', color: 'grey ', img: './assets/dinos/bo.jpg', podeVoar: false, ativo: true},
      { nome: 'STYGIMOLOCH', color: 'yellow', img: './assets/dinos/sm.png', podeVoar: false, ativo: true}
    ];
  } 

  piscar(): void{
    setInterval(
      () => {
        this.verQualDinoEstaEmDestaque()
      }, 1000);
  }

  verQualDinoEstaEmDestaque(): number{
    if((this.dinoDestaque+1)>=this.listaItens.length){
      this.dinoDestaque = 0;
    }else{
      this.dinoDestaque += 1;
    }
    console.log(this.dinoDestaque);
    return this.dinoDestaque;
  }

  verificarItemPodeSerListado(item: any, ativo = null, voar = null): boolean{
    let passou = true;
    if(ativo==null){
      //sem filtro de ativo!
    } else { //com filtro de ativo!
      if(ativo==true){
        if(item.ativo == true){
          passou = true;
        } else {
          return false;
        }
      }
      if(ativo==false){
        if(item.ativo == false){
          passou = true;
        } else {
          return false;
        }
      }
    }

    if(voar==null){
      //sem filtro de voar!
    } else { //com filtro de voar!
      if(voar==true){
        if(item.voar == true){
          passou = true;
        } else {
          return false;
        }
      }
      if(voar==false){
        if(item.voar == false){
          passou = true;
        } else {
          return false;
        }
      }
    }
    return passou;
  }
}
