import { Categories, ProductFilter } from "@/lib/graphql/schema.generated";
import { merge } from "lodash";

export class ProductFilterBuilder {
  private filter: ProductFilter = {};

  constructor() {}

  public searchQuery(searchQuery?: string | null): ProductFilterBuilder {
    if (searchQuery) {
      this.filter.and = this.filter.and?.concat({
        or: [
          {
            title: {
              iLike: `%${searchQuery}%`,
            },
          },
          {
            description: {
              iLike: `%${searchQuery}%`,
            },
          },
        ],
      });
    }

    return this;
  }

  public priceRange(min?: number, max?: number): ProductFilterBuilder {
    if (min && max) {
      this.filter.and = this.filter.and?.concat({
        and: [
          {
            productVariants: {
              price: {
                amount: {
                  gte: min
                }
              }
            }
          },
          {
            productVariants: {
              price: {
                amount: {
                  lte: max
                }
              }
            }
          }
        ],
      });
    }

    return this;
  }

  public category(category?: Categories, parentCategory?: Categories): ProductFilterBuilder {
    if (category) {
      if (parentCategory) {
        this.filter = merge<ProductFilter, ProductFilter>({
          and: [
            {
              and: [
                {
                  category: {
                    parent: {
                      code: {
                        eq: parentCategory,
                      },
                    },
                    code: {
                      eq: category,
                    },
                  },
                },
              ],
            },
          ],
        }, this.filter);
      } else {
        this.filter = merge<ProductFilter, ProductFilter>({
          and: [
            {
              category: {
                code: {
                  eq: category,
                },
              },
            },
          ],
        }, this.filter);
      }
    }

    return this;
  }

  public brands(brands?: string[] | null): ProductFilterBuilder {
    if (brands && brands.length > 0) {
      this.filter.and = this.filter.and?.concat({
        brand: {
          code: {
            in: brands,
          },
        },
      });
    }

    return this;
  }

  public colors(colors?: string[] | null): ProductFilterBuilder {
    if (colors && colors.length > 0) {
      this.filter.and = this.filter.and?.concat({
        productVariants: {
          color: {
            code: {
              in: colors,
            },
          },
        },
      });
    }

    return this;
  }

  public sizes(sizes?: string[] | null): ProductFilterBuilder {
    if (sizes && sizes.length > 0) {
      this.filter.and = this.filter.and?.concat({
        productVariants: {
          size: {
            code: {
              in: sizes,
            },
          },
        },
      });
    }

    return this;
  }

  public build(): ProductFilter {
    return this.filter;
  }
}
