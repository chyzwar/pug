import Config from "@utility/config/lib/Config";
import Renderer from "@hyper/http/lib/Renderer";
import pug from "pug";

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

  render(){

  }
}

export default PugRenderer;
