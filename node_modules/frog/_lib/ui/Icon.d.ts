import { type BoxProps } from './Box.js';
import { type DefaultVars, type Vars } from './vars.js';
export type IconProps<vars extends Vars = DefaultVars, collection extends Vars['icons'] = vars['icons']> = {
    __context?: {
        vars?: Vars | undefined;
    } | undefined;
    /**
     * Sets the color of the icon.
     *
     * Note: This prop is only supported when {@link mode} is `'mask'` or `'auto'` (and the icon with {@link name} is inferred as `'mask'`).
     */
    color?: BoxProps<vars>['backgroundColor'];
    /**
     * Sets rendering mode of the icon.
     *
     * @default auto
     */
    mode?: 'auto' | 'bg' | 'mask' | undefined;
    /**
     * Icon collection to use for resolving icons.
     *
     * @default lucide (from 'frog/ui/icons')
     */
    collection?: collection | Vars['icons'] | undefined;
    /** Icon name in the current icon collection. */
    name: Record<string, any> | undefined extends collection ? keyof vars['icons'] : keyof collection;
    /** Sets the size of the icon. */
    size?: BoxProps<vars>['width'];
};
export declare function Icon<vars extends Vars, collection extends Vars['icons'] = DefaultVars['icons']>(props: IconProps<vars, collection>): import("hono/jsx/jsx-dev-runtime").JSX.Element;
//# sourceMappingURL=Icon.d.ts.map