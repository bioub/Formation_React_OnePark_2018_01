import config from './config.json5';
import format from 'date-fns/format';

// 1 - Installer et configurer copy-webpack-plugin
// pour copier la Licence dans dist
// 2 - Installer et configurer json5-loader
// pour charger la config au format JSON5

export class Horloge {
  /**
   * @param {HTMLDivElement} divElt 
   */
  constructor(divElt) {
    this._divElt = divElt;
    this.render();
    this.render = this.render.bind(this);
    setInterval(this.render, 1000);
  }

  render() {
    const now = new Date();
    this._divElt.innerText = format(now, config.format);
  }
}