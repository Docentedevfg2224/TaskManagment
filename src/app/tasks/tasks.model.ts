export class Tasks{
    public title : string;
    public description : string;
    public delete : boolean;
    public complete : boolean;


    constructor(title : string, description : string ){
        this.title = title;
        this.description = description;
        this.delete = false;
        this.complete = false;
    }
    getDeleteTask(){
        this.delete = true;
    }
    getCompleteTask(){
        this.complete = true;
    }
}