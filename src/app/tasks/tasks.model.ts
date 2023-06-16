export class Tasks{
    public title : string;
    public description : string;
    public delete : boolean = false;
    public complete : boolean = false;


    constructor(title : string, description : string ){
        this.title = title;
        this.description = description;
    }
    getDeleteTask(){
        this.delete = true;
    }
    getCompleteTask(){
        this.complete = true;
    }
}