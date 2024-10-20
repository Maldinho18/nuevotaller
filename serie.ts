/** 
export class Serie {
    id: number;
    name: String;
    channel: String;
    seasons: number;
  
    constructor(id: number, name: String, channel: String, seasons: number) {
      this.id = id;   
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
    }
}**/

export class Serie {
  
    constructor(public id: number, public name: string,  public channel: string, public seasons:number, 
                public image: string, public description: string, public url: string) {
    
  }
}