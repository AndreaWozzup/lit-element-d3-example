var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
import * as d3 from 'd3';
/**
 * An example element.
 *
 * @csspart button - The button
 */
let D3Example = class D3Example extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        this.data = [30, 86, 168, 281, 303, 365];
    }
    createRenderRoot() {
        return this;
    }
    render() {
        return html `
      <h1>D3 Example!</h1>
      <div class="chart"></div>
      <button @click=${this._onClick} part="button">
        Increment: ${this.count}
      </button>
 
    `;
    }
    firstUpdated(_changedProperties) {
        this.progressChart();
    }
    updated(_changedProperties) {
        this.progressChart();
        console.log("Updated");
    }
    _onClick() {
        this.count++;
        for (let i = 0; i < this.data.length; i++) {
            console.log(this.data[i]);
            this.data[i]++;
        }
    }
    foo() {
        return 'foo';
    }
    progressChart() {
        console.log("Rendering " + this.data);
        // cleanup
        d3.select(".chart")
            .selectAll("div").remove();
        // render
        d3.select(".chart")
            .selectAll("div")
            .data(this.data)
            .enter()
            .append("div")
            .style("width", function (d) { return d + "px"; })
            .text(function (d) { return d; });
    }
};
D3Example.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property({ type: Number })
], D3Example.prototype, "count", void 0);
D3Example = __decorate([
    customElement('d3-example')
], D3Example);
export { D3Example };
//# sourceMappingURL=d3-example.js.map