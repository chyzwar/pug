import pug from "pug";
import Renderer from "@hyper/http/lib/Renderer";
import Config from "@utility/config/lib/Config";

class PugRenderer extends Renderer{
  constructor(config){

    if(config){
      this.setConfig(config);
    }
  }

  setConfig(config){

  }

  getConfig(){

  }
}

export default PugRenderer;
