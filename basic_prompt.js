/**
 * Convert a string with spaces, hyphens, or underscores to camelCase.
 * Examples:
 *   toCamelCase("convert this-string_example") -> "convertThisStringExample"
 */
function toCamelCase(str) {
    if (typeof str !== 'string') return '';
    return str
        .split(/[\s_-]+/)
        .filter(Boolean)
        .map((word, i) => {
            const lower = word.toLowerCase();
            return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;