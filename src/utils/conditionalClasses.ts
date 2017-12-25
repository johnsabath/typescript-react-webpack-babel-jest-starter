/**
 * Takes an object where the keys represent class names, and the values represent whether or not the class should be applied.
 * 
 * Example:
 * {
 * 		visible: true,
 * 		blue: true
 * 		enabled: false,
 * }
 * 
 * Output:
 * "visible blue"
 * 
 * @param predicates
 */
export default function(predicates: { [className: string]: boolean }): string {
  return Object.keys(predicates)
    .map(className => (predicates[className] ? className : null))
    .filter(className => className !== null)
    .join(" ");
}
