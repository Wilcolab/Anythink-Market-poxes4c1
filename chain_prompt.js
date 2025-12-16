// kebabcaseconverter.js

/**
 * Convert a string to kebab-case:
 * - all letters lowercase
 * - words separated by hyphens (-)
 * - handles spaces, underscores, existing hyphens, punctuation
 * - handles camelCase and PascalCase boundaries
 */
function toKebabCase(input) {
    if (typeof input !== 'string') return '';

    return input
        .trim()
        // Handle camelCase or PascalCase transitions: fooBar -> foo-Bar
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Handle acronym + Pascal transitions: XMLHttp -> XML-Http
        .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
        // Replace any non-alphanumeric characters (including spaces, underscores) with hyphens
        .replace(/[^A-Za-z0-9]+/g, '-')
        // Collapse multiple hyphens into one
        .replace(/-+/g, '-')
        // Remove leading/trailing hyphens
        .replace(/^-|-$/g, '')
        .toLowerCase();
}

// Examples:
console.log(toKebabCase("Convert this_string Example")); // "convert-this-string-example"
console.log(toKebabCase("  multiple   separators__and--cases  ")); // "multiple-separators-and-cases"
console.log(toKebabCase("convertThisExample")); // "convert-this-example"
console.log(toKebabCase("XMLHttpRequest")); // "xml-http-request"

// Export for usage in modules (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = toKebabCase;
}