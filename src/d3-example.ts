import { LitElement, html, customElement, property, css } from 'lit-element';
import * as d3 from 'd3'

/**
 * An example element.
 *
 * @csspart button - The button
 */
@customElement('d3-example')
export class D3Example extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  data = [30, 86, 168, 281, 303, 365];

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h1>D3 Example!</h1>
      <div class="chart"></div>
      <button @click=${this._onClick} part="button">
        Increment: ${this.count}
      </button>
 
    `;
  }

  firstUpdated(_changedProperties: any) {
    this.progressChart();
  }

  updated(_changedProperties: any) {
    this.progressChart();
    console.log("Updated");
  }

  private _onClick() {
    this.count++;
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
      this.data[i]++;
    }
  }

  foo(): string {
    return 'foo';
  }

  private progressChart() {
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
}

declare global {
  interface HTMLElementTagNameMap {
    'd3-example': D3Example;
  }
}
