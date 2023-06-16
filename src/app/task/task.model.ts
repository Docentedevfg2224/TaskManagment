export class Task 
{
  titolo: string;
  descrizione: string;

  constructor(titolo :string , descrizione:string)
  {
    this.titolo = titolo;
    this.descrizione = descrizione;
  }

 getitolo()
 {
  return this.titolo;
 }

}