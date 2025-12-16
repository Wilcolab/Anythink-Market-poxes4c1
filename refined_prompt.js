/**
 * Convert an input value to dot.case (lowercase words separated by dots).
 *
 * Normalization rules:
 *  - Coerces non-null/undefined input to String(input). Returns '' for null or undefined.
 *  - Splits camelCase boundaries where a lowercase/number is followed by an uppercase letter:
 *      "helloWorld" -> "hello.World"
 *  - Splits uppercase acronym sequences when followed by an Uppercase+lowercase boundary:
 *      "XMLHttpRequest" -> "XML.Http.Request"
 *  - Replaces any non-alphanumeric characters (spaces, punctuation, underscores, dashes, etc.) with a single dot.
 *  - Collapses consecutive dots into one, trims leading/trailing dots, and lowercases the final result.
 *
 * Behavior notes:
 *  - Numeric segments are preserved (e.g. "version2Beta" -> "version2.beta").
 *  - ALL-CAPS words are treated as words but will be split if followed by a capital+lowercase sequence.
 *  - Inputs already in dot.case are idempotent aside from lowercasing and trimming extra dots.
 *
 * @function toDotCase
 * @param {*} input - Value to convert. null or undefined => ''. All other values are coerced to string via String(input).
 * @returns {string} A dot.case string: lowercase word segments separated by single dots, or an empty string for null/undefined.
 *
 * @example
 * toDotCase('HelloWorld');        // -> 'hello.world'
 * toDotCase('hello_world-test');  // -> 'hello.world.test'
 * toDotCase('XMLHttpRequest');    // -> 'xml.http.request'
 * toDotCase('  multiple  - separators__'); // -> 'multiple.separators'
 * toDotCase(null);                // -> ''
 */
/**
 * Raises given numbers to the provided power and returns their sum.
 * Usage: PowerNumber(3, 5, 2) -> 3^2 + 5^2 = 34
 *
 * Returns a numeric sum or a string error message for invalid inputs.
 */
function PowerNumber(...args) {
    if (args.length < 2) return 'Invalid input: provide at least one number and a power';
    const power = args[args.length - 1];
    const bases = args.slice(0, -1);

    const invalids = [];
    if (!Number.isFinite(power)) invalids.push(`power (${power})`);
    bases.forEach((v, i) => {
        if (!Number.isFinite(v)) invalids.push(`arg${i + 1} (${v})`);
    });
    if (invalids.length) return `Invalid input: non-numeric value(s): ${invalids.join(', ')}`;

    return bases.reduce((sum, n) => sum + Math.pow(n, power), 0);
}

// Example:
// console.log(PowerNumber(3, 5, 2)); // 34
/**
 * Converts a string to dot.case (lowercase words separated by dots).
 * Handles: spaces, underscores, dashes, punctuation, camelCase, PascalCase, and ALLCAPS sequences.
 *
 * Examples:
 *   toDotCase('HelloWorld') -> 'hello.world'
 *   toDotCase('hello_world-test') -> 'hello.world.test'
 *   toDotCase('XMLHttpRequest') -> 'xml.http.request'
 */
function toDotCase(input) {
    if (input == null) return '';
    const s = String(input);
    return s
        // Split camelCase boundaries: lower->Upper
        .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
        // Split sequences like "XMLHttp" -> "XML.Http"
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1.$2')
        // Replace any non-alphanumeric chars with dots
        .replace(/[^A-Za-z0-9]+/g, '.')
        // Collapse multiple dots
        .replace(/\.{2,}/g, '.')
        // Trim leading/trailing dots and lowercase
        .replace(/^\.+|\.+$/g, '')
        .toLowerCase();
}
