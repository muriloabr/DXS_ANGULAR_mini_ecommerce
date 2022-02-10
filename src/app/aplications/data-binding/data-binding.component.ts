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
  private listaItens: Array<{ nome: string, color: string, img: string, podeVoar: boolean, ativo: boolean }> = [];
  public listaItensAExibir = this.listaItens;
  public dinoDestaque: number = 0;
  public filtro_requerVoar: any = null;
  public filtro_requerAtivo: any = null;

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
    this.listaItensAExibir = this.listaItens;
  } 

  piscar(): void{
    setInterval(
      () => {
        this.verQualDinoEstaEmDestaque()
      }, 1000);
  }

  verQualDinoEstaEmDestaque(): number{
    if((this.dinoDestaque+1)>this.listaItensAExibir.length){ // se não tiver próximo item
      this.dinoDestaque = 0;
    }else{ //se tiver próximo item
      if(this.listaItensAExibir[this.dinoDestaque].ativo==false){ //se item for desativado de exibir
        if((this.dinoDestaque+2)>this.listaItensAExibir.length){ // se tem item proximo ou volta pro zero
          this.dinoDestaque += 2;
        }else{
          this.dinoDestaque = 0;
        }        
      }
      else{
        this.dinoDestaque += 1;
      }
    }
    console.log(this.dinoDestaque);
    return this.dinoDestaque;
  }

  filtrarPodeVoar(item: any, podeVoar: any): void{
    if(podeVoar==false){  //sem filtro de voar!
      item.ativo = true;
    } else { //com filtro de voar!
      if(podeVoar==true){
        if(item.podeVoar == true){
          item.ativo = true; //passou no teste
        } else {
          item.ativo = false;
        }
      }
      if(podeVoar==false){
        if(item.podeVoar == false){
          item.ativo = true;
        } else {
          item.ativo = false;
        }
      }
    }
  }

  listaItensAExibir_espelhar(){ //falta implementar um metodo que remove por lambda os items desativados da listaAExibir
    this.listaItensAExibir = this.listaItens.filter( (elem) => {
        if (!(elem.ativo == false)) {
          return elem;
        }
        else
        {
          return null; 
        }
      } );
  }
  

  verificarItemPodeSerListado(item: any, voar: any = null): void{
    this.filtrarPodeVoar(item, voar);
    this.listaItensAExibir_espelhar();
  }
}
