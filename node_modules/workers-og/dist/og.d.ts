/// <reference types="react" />
import type { ImageResponseOptions } from "./types";
interface Props {
    /**
     * The React element or HTML string to render into an image.
     * @example
     * ```tsx
     * <div
     *  style={{
     *    display: 'flex',
     *  }}
     * >
     *  <h1>Hello World</h1>
     * </div>
     * ```
     * @example
     * ```html
     * <div style="display:flex;"><h1>Hello World</h1></div>
     * ```
     */
    element: string | React.ReactNode;
    /**
     * The options for the image response.
     */
    options: ImageResponseOptions;
}
export declare const og: ({ element, options }: Props) => Promise<string | Uint8Array>;
export declare class ImageResponse extends Response {
    constructor(element: string | React.ReactNode, options: ImageResponseOptions);
}
export {};
