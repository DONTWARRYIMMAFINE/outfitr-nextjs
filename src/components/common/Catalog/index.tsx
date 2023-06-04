import FilterPanel from "@/components/common/Catalog/FilterPanel";
import ProductItemList from "@/components/common/Catalog/ProductItemList";
import SearchBar from "@/components/common/Catalog/SearchBar";
import { Grid } from "@/components/ui";
import { LngProps } from "@/lib/types/params.type";

export interface CatalogProps extends LngProps {
  category?: string;
  parentCategory?: string;
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
