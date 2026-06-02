/** Import local product photos from `src/products/`. */
export function productImage(filename: string): string {
  return new URL(`../products/${filename}`, import.meta.url).toString();
}
