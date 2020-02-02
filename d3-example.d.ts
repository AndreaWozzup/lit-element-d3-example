import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @csspart button - The button
 */
export declare class D3Example extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    data: number[];
    createRenderRoot(): this;
    render(): import("lit-element").TemplateResult;
    firstUpdated(_changedProperties: any): void;
    updated(_changedProperties: any): void;
    private _onClick;
    foo(): string;
    private progressChart;
}
declare global {
    interface HTMLElementTagNameMap {
        'd3-example': D3Example;
    }
}
//# sourceMappingURL=d3-example.d.ts.map