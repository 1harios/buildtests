/// <reference types="react" />
/**
 * Parses HTML into a ReactElementLike object
 * using Cloudflare Worker's own HTMLRewriter
 *
 * Given the ergonomics of HTMLRewriter, this
 * is the fastest way to transform HTML, but
 * is very error prone. So it might need more
 * hardening / testing in the future.
 *
 * Or use a different, more forgiving parser
 */
export declare function parseHtml(html: string): Promise<React.ReactNode | null>;
