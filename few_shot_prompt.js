/**
 * Convert a string to camelCase.
 * Examples:
 *  "first name"   -> "firstName"
 *  "user_id"      -> "userId"
 *  "SCREEN_NAME"  -> "screenName"
 *  "mobile-number"-> "mobileNumber"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    // separate existing camelCase boundaries (e.g. "firstName" -> "first Name")
    const separated = input.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    // replace any non-alphanumeric sequences with a space, trim and split into words
    const parts = separated.replace(/[^A-Za-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '';
    const [first, ...rest] = parts;
    const firstLower = first.toLowerCase();
    const tail = rest.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    return firstLower + tail;
}

module.exports = toCamelCase;