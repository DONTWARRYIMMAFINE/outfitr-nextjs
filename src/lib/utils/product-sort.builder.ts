import { ProductSort, ProductSortFields, SortDirection } from "@/lib/graphql/schema.generated";

export class ProductSortBuilder {
  private sorting: ProductSort[] = [];

  add(field?: ProductSortFields | null, direction?: SortDirection | null) {
    if (field && direction) {
      this.sorting.push({ field, direction });
    }
    return this;
  }

  public build(): ProductSort[] {
    return this.sorting;
  }
}
