import { Grid } from "@/components/ui";
import { Categories } from "@/lib/graphql/schema.generated";
import { LngProps } from "@/lib/types/params.type";
import FilterPanel from "./FilterPanel";
import ProductItemList from "./ProductItemList";
import SearchBar from "./SearchBar";

export interface CatalogProps extends LngProps {
  category?: Categories;
  parentCategory?: Categories;
}

const Catalog = ({ category, parentCategory, lng }: CatalogProps) => {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={3}>
          <FilterPanel />
        </Grid>
        <Grid item xs={9}>
          <ProductItemList category={category} parentCategory={parentCategory} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Catalog;
