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
var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, image, description, url) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.image = image;
        this.description = description;
        this.url = url;
    }
    return Serie;
}());
export { Serie };
