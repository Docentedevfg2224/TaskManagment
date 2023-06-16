export class Task 
{
  titolo: string;
  descrizione: string;
  completato:boolean;
  eliminato:boolean;

  constructor(titolo :string , descrizione:string)
  {
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.completato = false;
    this.eliminato = false;
  }

 getitolo()
 {
  return this.titolo;
 }

setcompletato(completato : boolean)
{
  this.completato = true;
}

seteliminato(eliminato : boolean)
{
  this.eliminato = true;
}


}