import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConnectionCursor: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AccessTokenResponse = {
  __typename?: 'AccessTokenResponse';
  accessToken: Scalars['String'];
};

export enum Actions {
  Aggregate = 'AGGREGATE',
  Create = 'CREATE',
  Delete = 'DELETE',
  Manage = 'MANAGE',
  Read = 'READ',
  Update = 'UPDATE'
}

export type AddProductsToWishlist = {
  products: Array<SelectProductInput>;
};

export type AddProductsToWishlistInputType = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: AddProductsToWishlist;
};

export type Address = {
  __typename?: 'Address';
  building?: Maybe<Scalars['String']>;
  city: City;
  cityId: Scalars['ID'];
  id: Scalars['ID'];
  postalCode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type AddressAggregateGroupBy = {
  __typename?: 'AddressAggregateGroupBy';
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  /** Array of edges. */
  edges: Array<AddressEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  building?: Maybe<Scalars['Int']>;
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  postalCode?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AddressDeleteResponse = {
  __typename?: 'AddressDeleteResponse';
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Address */
  node: Address;
};

export type AddressFilter = {
  and?: InputMaybe<Array<AddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  city?: InputMaybe<AddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AddressFilterCityFilter = {
  and?: InputMaybe<Array<AddressFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AddressFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AddressSort = {
  direction: SortDirection;
  field: AddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AddressSortFields {
  Building = 'building',
  CityId = 'cityId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostalCode = 'postalCode',
  State = 'state',
  Street = 'street',
  UpdatedAt = 'updatedAt'
}

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type Brand = {
  __typename?: 'Brand';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  user: User;
  userId: Scalars['ID'];
};

export type BrandAggregateGroupBy = {
  __typename?: 'BrandAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** Array of edges. */
  edges: Array<BrandEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type BrandCountAggregate = {
  __typename?: 'BrandCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BrandDeleteResponse = {
  __typename?: 'BrandDeleteResponse';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Brand */
  node: Brand;
};

export type BrandFilter = {
  and?: InputMaybe<Array<BrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<BrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type BrandFilterUserFilter = {
  and?: InputMaybe<Array<BrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BrandMaxAggregate = {
  __typename?: 'BrandMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type BrandMinAggregate = {
  __typename?: 'BrandMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type BrandSort = {
  direction: SortDirection;
  field: BrandSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BrandSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CancelOrderInputType = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Cart = {
  __typename?: 'Cart';
  cartItems: Array<CartItem>;
  id: Scalars['ID'];
  price: Price;
  quantity: Scalars['Float'];
  user: User;
  userId: Scalars['ID'];
};


export type CartCartItemsArgs = {
  filter?: CartItemFilter;
  sorting?: Array<CartItemSort>;
};

export type CartAggregateGroupBy = {
  __typename?: 'CartAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CartAvgAggregate = {
  __typename?: 'CartAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CartConnection = {
  __typename?: 'CartConnection';
  /** Array of edges. */
  edges: Array<CartEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CartCountAggregate = {
  __typename?: 'CartCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CartEdge = {
  __typename?: 'CartEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Cart */
  node: Cart;
};

export type CartFilter = {
  and?: InputMaybe<Array<CartFilter>>;
  cartItems?: InputMaybe<CartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartFilter>>;
  price?: InputMaybe<CartFilterPriceFilter>;
  quantity?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<CartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type CartFilterCartItemFilter = {
  and?: InputMaybe<Array<CartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartFilterCartItemFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<CartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CartFilterUserFilter = {
  and?: InputMaybe<Array<CartFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CartItem = {
  __typename?: 'CartItem';
  cartId: Scalars['ID'];
  id: Scalars['ID'];
  price: Price;
  priceId: Scalars['ID'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type CartItemAggregateGroupBy = {
  __typename?: 'CartItemAggregateGroupBy';
  cartId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CartItemAvgAggregate = {
  __typename?: 'CartItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CartItemConnection = {
  __typename?: 'CartItemConnection';
  /** Array of edges. */
  edges: Array<CartItemEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CartItemCountAggregate = {
  __typename?: 'CartItemCountAggregate';
  cartId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  productVariantId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CartItemDeleteResponse = {
  __typename?: 'CartItemDeleteResponse';
  cartId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type CartItemEdge = {
  __typename?: 'CartItemEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the CartItem */
  node: CartItem;
};

export type CartItemFilter = {
  and?: InputMaybe<Array<CartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartItemFilter>>;
  price?: InputMaybe<CartItemFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariant?: InputMaybe<CartItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CartItemFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<CartItemFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartItemFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CartItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<CartItemFilterProductVariantFilter>>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartItemFilterProductVariantFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CartItemMaxAggregate = {
  __typename?: 'CartItemMaxAggregate';
  cartId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CartItemMinAggregate = {
  __typename?: 'CartItemMinAggregate';
  cartId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CartItemSort = {
  direction: SortDirection;
  field: CartItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CartItemSortFields {
  CartId = 'cartId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PriceId = 'priceId',
  ProductVariantId = 'productVariantId',
  Quantity = 'quantity',
  UpdatedAt = 'updatedAt'
}

export type CartItemSumAggregate = {
  __typename?: 'CartItemSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type CartMaxAggregate = {
  __typename?: 'CartMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CartMinAggregate = {
  __typename?: 'CartMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CartSort = {
  direction: SortDirection;
  field: CartSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CartSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Quantity = 'quantity',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CartSumAggregate = {
  __typename?: 'CartSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type Category = {
  __typename?: 'Category';
  children?: Maybe<Array<Category>>;
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['ID']>;
};


export type CategoryChildrenArgs = {
  filter?: CategoryFilter;
  sorting?: Array<CategorySort>;
};

export type CategoryAggregateGroupBy = {
  __typename?: 'CategoryAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** Array of edges. */
  edges: Array<CategoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CategoryDeleteResponse = {
  __typename?: 'CategoryDeleteResponse';
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Category */
  node: Category;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<CategoryFilter>>;
  children?: InputMaybe<CategoryFilterCategoryFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryFilter>>;
  parent?: InputMaybe<CategoryFilterCategoryFilter>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CategoryFilterCategoryFilter = {
  and?: InputMaybe<Array<CategoryFilterCategoryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategorySort = {
  direction: SortDirection;
  field: CategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CategorySortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  ParentId = 'parentId',
  UpdatedAt = 'updatedAt'
}

export type City = {
  __typename?: 'City';
  country: Country;
  countryId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CityAggregateGroupBy = {
  __typename?: 'CityAggregateGroupBy';
  countryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityConnection = {
  __typename?: 'CityConnection';
  /** Array of edges. */
  edges: Array<CityEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CityCountAggregate = {
  __typename?: 'CityCountAggregate';
  countryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CityDeleteResponse = {
  __typename?: 'CityDeleteResponse';
  countryId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CityEdge = {
  __typename?: 'CityEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the City */
  node: City;
};

export type CityFilter = {
  and?: InputMaybe<Array<CityFilter>>;
  country?: InputMaybe<CityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CityFilterCountryFilter = {
  and?: InputMaybe<Array<CityFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CityMaxAggregate = {
  __typename?: 'CityMaxAggregate';
  countryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMinAggregate = {
  __typename?: 'CityMinAggregate';
  countryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CitySort = {
  direction: SortDirection;
  field: CitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CitySortFields {
  CountryId = 'countryId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type Color = {
  __typename?: 'Color';
  code: Scalars['String'];
  hex: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ColorAggregateGroupBy = {
  __typename?: 'ColorAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorConnection = {
  __typename?: 'ColorConnection';
  /** Array of edges. */
  edges: Array<ColorEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ColorCountAggregate = {
  __typename?: 'ColorCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  hex?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ColorDeleteResponse = {
  __typename?: 'ColorDeleteResponse';
  code?: Maybe<Scalars['String']>;
  hex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ColorEdge = {
  __typename?: 'ColorEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Color */
  node: Color;
};

export type ColorFilter = {
  and?: InputMaybe<Array<ColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ColorMaxAggregate = {
  __typename?: 'ColorMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorMinAggregate = {
  __typename?: 'ColorMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorSort = {
  direction: SortDirection;
  field: ColorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ColorSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Hex = 'hex',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type Comment = {
  __typename?: 'Comment';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media: Array<Media>;
  product: Product;
  productId: Scalars['ID'];
  rating: Scalars['Float'];
  user: User;
  userId: Scalars['ID'];
};


export type CommentMediaArgs = {
  filter?: MediaFilter;
  sorting?: Array<MediaSort>;
};

export type CommentAggregateGroupBy = {
  __typename?: 'CommentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CommentAvgAggregate = {
  __typename?: 'CommentAvgAggregate';
  rating?: Maybe<Scalars['Float']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** Array of edges. */
  edges: Array<CommentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentDeleteResponse = {
  __typename?: 'CommentDeleteResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Comment */
  node: Comment;
};

export type CommentFilter = {
  and?: InputMaybe<Array<CommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<CommentFilterMediaFilter>;
  or?: InputMaybe<Array<CommentFilter>>;
  product?: InputMaybe<CommentFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  rating?: InputMaybe<FloatFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<CommentFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type CommentFilterMediaFilter = {
  and?: InputMaybe<Array<CommentFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommentFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type CommentFilterProductFilter = {
  and?: InputMaybe<Array<CommentFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommentFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CommentFilterUserFilter = {
  and?: InputMaybe<Array<CommentFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CommentFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CommentSort = {
  direction: SortDirection;
  field: CommentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CommentSortFields {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  ProductId = 'productId',
  Rating = 'rating',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CommentSumAggregate = {
  __typename?: 'CommentSumAggregate';
  rating?: Maybe<Scalars['Float']>;
};

export type Country = {
  __typename?: 'Country';
  cities: Array<City>;
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type CountryCitiesArgs = {
  filter?: CityFilter;
  sorting?: Array<CitySort>;
};

export type CountryAggregateGroupBy = {
  __typename?: 'CountryAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  /** Array of edges. */
  edges: Array<CountryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CountryDeleteResponse = {
  __typename?: 'CountryDeleteResponse';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Country */
  node: Country;
};

export type CountryFilter = {
  and?: InputMaybe<Array<CountryFilter>>;
  cities?: InputMaybe<CountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CountryFilterCityFilter = {
  and?: InputMaybe<Array<CountryFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountrySort = {
  direction: SortDirection;
  field: CountrySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CountrySortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CreateAddressInput = {
  building?: InputMaybe<Scalars['String']>;
  cityId: Scalars['String'];
  postalCode: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type CreateBrandInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateCartItemInput = {
  cartId: Scalars['String'];
  productVariantId: Scalars['String'];
  quantity?: Scalars['Float'];
};

export type CreateCategoryInput = {
  children?: Array<SelectCategoryInput>;
  code: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
};

export type CreateCityInput = {
  countryId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateColorInput = {
  code: Scalars['String'];
  hex: Scalars['String'];
  name: Scalars['String'];
};

export type CreateCommentInput = {
  description?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateCountryInput = {
  cities?: InputMaybe<Array<UpdateCityInput>>;
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CreateDeliveryMethodInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  price: CreatePriceInput;
  status?: InputMaybe<DeliveryMethodStatus>;
};

export type CreateEmailAddressInput = {
  address: Scalars['String'];
  name: Scalars['String'];
};

export type CreateOneAddressInput = {
  /** The record to create */
  address: CreateAddressInput;
};

export type CreateOneBrandInput = {
  /** The record to create */
  brand: CreateBrandInput;
};

export type CreateOneCartItemInput = {
  /** The record to create */
  cartItem: CreateCartItemInput;
};

export type CreateOneCategoryInput = {
  /** The record to create */
  category: CreateCategoryInput;
};

export type CreateOneCityInput = {
  /** The record to create */
  city: CreateCityInput;
};

export type CreateOneColorInput = {
  /** The record to create */
  color: CreateColorInput;
};

export type CreateOneCommentInput = {
  /** The record to create */
  comment: CreateCommentInput;
};

export type CreateOneCountryInput = {
  /** The record to create */
  country: CreateCountryInput;
};

export type CreateOneDeliveryMethodInput = {
  /** The record to create */
  deliveryMethod: CreateDeliveryMethodInput;
};

export type CreateOneEmailAddressInput = {
  /** The record to create */
  emailAddress: CreateEmailAddressInput;
};

export type CreateOneOrderFromCurrentUserCartInputType = {
  /** The record to create */
  order: CreateOrderFromCurrentUserCartInput;
};

export type CreateOneOrderInput = {
  /** The record to create */
  order: CreateOrderInput;
};

export type CreateOnePaymentIntentInput = {
  /** The record to create */
  paymentIntent: CreatePaymentIntentInput;
};

export type CreateOnePaymentMethodInput = {
  /** The record to create */
  paymentMethod: CreatePaymentMethodInput;
};

export type CreateOnePermissionInput = {
  /** The record to create */
  permission: CreatePermissionInput;
};

export type CreateOnePickupPointInput = {
  /** The record to create */
  pickupPoint: CreatePickupPointInput;
};

export type CreateOnePriceInput = {
  /** The record to create */
  price: CreatePriceInput;
};

export type CreateOneProductInputType = {
  /** The record to create */
  product: CreateProductInput;
};

export type CreateOneProductVariantInput = {
  /** The record to create */
  productVariant: CreateProductVariantInput;
};

export type CreateOneRoleInput = {
  /** The record to create */
  role: CreateRoleInput;
};

export type CreateOneSizeInput = {
  /** The record to create */
  size: CreateSizeInput;
};

export type CreateOneUserAddressInput = {
  /** The record to create */
  userAddress: CreateUserAddressInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateOneWarehouseInput = {
  /** The record to create */
  warehouse: CreateWarehouseInput;
};

export type CreateOrderFromCurrentUserCartInput = {
  deliveryAddressId?: InputMaybe<Scalars['String']>;
  deliveryMethodId?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['String']>;
};

export type CreateOrderInput = {
  deliveryAddressId: Scalars['String'];
  deliveryMethodId: Scalars['String'];
  paymentMethodId: Scalars['String'];
  status?: InputMaybe<OrderStatus>;
  subtotalPrice: CreatePriceInput;
  userId: Scalars['String'];
};

export type CreatePaymentIntentInput = {
  clientSecret: Scalars['String'];
  orderId: Scalars['ID'];
  paymentMethodId: Scalars['ID'];
  price: CreatePriceInput;
};

export type CreatePaymentMethodInput = {
  code: PaymentMethods;
  name: Scalars['String'];
  status?: InputMaybe<PaymentMethodStatus>;
};

export type CreatePermissionInput = {
  action: Actions;
  conditions?: InputMaybe<Scalars['JSON']>;
  subject: Scalars['String'];
};

export type CreatePickupPointInput = {
  address: CreateAddressInput;
  code: Scalars['String'];
  name: Scalars['String'];
  status?: InputMaybe<PickupPointStatus>;
};

export type CreatePriceInput = {
  amount: Scalars['Float'];
  currency?: InputMaybe<Scalars['String']>;
};

export type CreateProductInput = {
  brandId: Scalars['String'];
  categoryId: Scalars['String'];
  description: Scalars['String'];
  productVariants?: Array<UpdateProductVariantInput>;
  title: Scalars['String'];
};

export type CreateProductVariantInput = {
  colorId: Scalars['String'];
  price: CreatePriceInput;
  productId: Scalars['String'];
  sizeId: Scalars['String'];
};

export type CreateRoleInput = {
  code: Roles;
  name: Scalars['String'];
  permissions?: Array<CreatePermissionInput>;
};

export type CreateSessionResponse = {
  __typename?: 'CreateSessionResponse';
  url: Scalars['String'];
};

export type CreateSizeInput = {
  code: Sizes;
  name: Scalars['String'];
};

export type CreateUserAddressInput = {
  address: CreateAddressInput;
  userId: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type CreateWarehouseInput = {
  address?: InputMaybe<CreateAddressInput>;
  code: Scalars['String'];
  name: Scalars['String'];
  status?: InputMaybe<WarehouseStatus>;
  warehouseItems?: InputMaybe<Array<UpdateWarehouseItemInput>>;
};

export enum Currencies {
  Byn = 'BYN',
  Usd = 'USD'
}

export type CurrenciesFilterComparison = {
  eq?: InputMaybe<Currencies>;
  gt?: InputMaybe<Currencies>;
  gte?: InputMaybe<Currencies>;
  iLike?: InputMaybe<Currencies>;
  in?: InputMaybe<Array<Currencies>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Currencies>;
  lt?: InputMaybe<Currencies>;
  lte?: InputMaybe<Currencies>;
  neq?: InputMaybe<Currencies>;
  notILike?: InputMaybe<Currencies>;
  notIn?: InputMaybe<Array<Currencies>>;
  notLike?: InputMaybe<Currencies>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteOneAddressInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneBrandInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCartInputType = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCartItemInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCityInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneColorInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCommentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneCountryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneDeliveryMethodInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneEmailAddressInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneMediaInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneOrderInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePaymentIntentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePaymentMethodInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePermissionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePickupPointInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePriceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProductInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneProductVariantInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneRoleInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneSizeInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserAddressInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneWarehouseInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeliveryMethod = {
  __typename?: 'DeliveryMethod';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Price;
  priceId: Scalars['ID'];
  status: DeliveryMethodStatus;
};

export type DeliveryMethodAggregateGroupBy = {
  __typename?: 'DeliveryMethodAggregateGroupBy';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  status?: Maybe<DeliveryMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryMethodAvgAggregate = {
  __typename?: 'DeliveryMethodAvgAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Float']>;
};

export type DeliveryMethodConnection = {
  __typename?: 'DeliveryMethodConnection';
  /** Array of edges. */
  edges: Array<DeliveryMethodEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type DeliveryMethodCountAggregate = {
  __typename?: 'DeliveryMethodCountAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type DeliveryMethodDeleteResponse = {
  __typename?: 'DeliveryMethodDeleteResponse';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  status?: Maybe<DeliveryMethodStatus>;
};

export type DeliveryMethodEdge = {
  __typename?: 'DeliveryMethodEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the DeliveryMethod */
  node: DeliveryMethod;
};

export type DeliveryMethodFilter = {
  and?: InputMaybe<Array<DeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DeliveryMethodFilter>>;
  price?: InputMaybe<DeliveryMethodFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DeliveryMethodFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<DeliveryMethodFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DeliveryMethodFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type DeliveryMethodMaxAggregate = {
  __typename?: 'DeliveryMethodMaxAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  status?: Maybe<DeliveryMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryMethodMinAggregate = {
  __typename?: 'DeliveryMethodMinAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  status?: Maybe<DeliveryMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DeliveryMethodSort = {
  direction: SortDirection;
  field: DeliveryMethodSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DeliveryMethodSortFields {
  AvgDeliveryTimeInHours = 'avgDeliveryTimeInHours',
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  PriceId = 'priceId',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum DeliveryMethodStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type DeliveryMethodStatusFilterComparison = {
  eq?: InputMaybe<DeliveryMethodStatus>;
  gt?: InputMaybe<DeliveryMethodStatus>;
  gte?: InputMaybe<DeliveryMethodStatus>;
  iLike?: InputMaybe<DeliveryMethodStatus>;
  in?: InputMaybe<Array<DeliveryMethodStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<DeliveryMethodStatus>;
  lt?: InputMaybe<DeliveryMethodStatus>;
  lte?: InputMaybe<DeliveryMethodStatus>;
  neq?: InputMaybe<DeliveryMethodStatus>;
  notILike?: InputMaybe<DeliveryMethodStatus>;
  notIn?: InputMaybe<Array<DeliveryMethodStatus>>;
  notLike?: InputMaybe<DeliveryMethodStatus>;
};

export type DeliveryMethodSumAggregate = {
  __typename?: 'DeliveryMethodSumAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Float']>;
};

export type EmailAddress = {
  __typename?: 'EmailAddress';
  address: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type EmailAddressAggregateGroupBy = {
  __typename?: 'EmailAddressAggregateGroupBy';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type EmailAddressConfirmation = {
  __typename?: 'EmailAddressConfirmation';
  emailAddress: EmailAddress;
  emailAddressId: Scalars['ID'];
  id: Scalars['ID'];
  token: Scalars['String'];
  user: User;
  userId: Scalars['ID'];
};

export type EmailAddressConfirmationAggregateGroupBy = {
  __typename?: 'EmailAddressConfirmationAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type EmailAddressConfirmationConnection = {
  __typename?: 'EmailAddressConfirmationConnection';
  /** Array of edges. */
  edges: Array<EmailAddressConfirmationEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type EmailAddressConfirmationCountAggregate = {
  __typename?: 'EmailAddressConfirmationCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  emailAddressId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type EmailAddressConfirmationEdge = {
  __typename?: 'EmailAddressConfirmationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the EmailAddressConfirmation */
  node: EmailAddressConfirmation;
};

export type EmailAddressConfirmationFilter = {
  and?: InputMaybe<Array<EmailAddressConfirmationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<EmailAddressConfirmationFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EmailAddressConfirmationFilter>>;
  token?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<EmailAddressConfirmationFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type EmailAddressConfirmationFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<EmailAddressConfirmationFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmailAddressConfirmationFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type EmailAddressConfirmationFilterUserFilter = {
  and?: InputMaybe<Array<EmailAddressConfirmationFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmailAddressConfirmationFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type EmailAddressConfirmationMaxAggregate = {
  __typename?: 'EmailAddressConfirmationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type EmailAddressConfirmationMinAggregate = {
  __typename?: 'EmailAddressConfirmationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type EmailAddressConfirmationSort = {
  direction: SortDirection;
  field: EmailAddressConfirmationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EmailAddressConfirmationSortFields {
  CreatedAt = 'createdAt',
  EmailAddressId = 'emailAddressId',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type EmailAddressConnection = {
  __typename?: 'EmailAddressConnection';
  /** Array of edges. */
  edges: Array<EmailAddressEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type EmailAddressCountAggregate = {
  __typename?: 'EmailAddressCountAggregate';
  address?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  verified?: Maybe<Scalars['Int']>;
};

export type EmailAddressDeleteResponse = {
  __typename?: 'EmailAddressDeleteResponse';
  address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type EmailAddressEdge = {
  __typename?: 'EmailAddressEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the EmailAddress */
  node: EmailAddress;
};

export type EmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<EmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type EmailAddressMaxAggregate = {
  __typename?: 'EmailAddressMaxAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmailAddressMinAggregate = {
  __typename?: 'EmailAddressMinAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EmailAddressSort = {
  direction: SortDirection;
  field: EmailAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EmailAddressSortFields {
  Address = 'address',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Verified = 'verified'
}

export type FloatFieldComparison = {
  between?: InputMaybe<FloatFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<FloatFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int'];
  upper: Scalars['Int'];
};

export type JsonFilterComparison = {
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  iLike?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<Scalars['JSON']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
  notILike?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<Scalars['JSON']>>;
  notLike?: InputMaybe<Scalars['JSON']>;
};

export type LoginInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type Media = {
  __typename?: 'Media';
  filename: Scalars['String'];
  format: MediaType;
  id: Scalars['ID'];
  publicId: Scalars['String'];
  url: Scalars['String'];
};

export type MediaAggregateGroupBy = {
  __typename?: 'MediaAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  format?: Maybe<MediaType>;
  id?: Maybe<Scalars['ID']>;
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type MediaConnection = {
  __typename?: 'MediaConnection';
  /** Array of edges. */
  edges: Array<MediaEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type MediaCountAggregate = {
  __typename?: 'MediaCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  publicId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
};

export type MediaDeleteResponse = {
  __typename?: 'MediaDeleteResponse';
  filename?: Maybe<Scalars['String']>;
  format?: Maybe<MediaType>;
  id?: Maybe<Scalars['ID']>;
  publicId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Media */
  node: Media;
};

export type MediaFilter = {
  and?: InputMaybe<Array<MediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type MediaMaxAggregate = {
  __typename?: 'MediaMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  format?: Maybe<MediaType>;
  id?: Maybe<Scalars['ID']>;
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type MediaMinAggregate = {
  __typename?: 'MediaMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  format?: Maybe<MediaType>;
  id?: Maybe<Scalars['ID']>;
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type MediaSort = {
  direction: SortDirection;
  field: MediaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MediaSortFields {
  CreatedAt = 'createdAt',
  Filename = 'filename',
  Format = 'format',
  Id = 'id',
  PublicId = 'publicId',
  UpdatedAt = 'updatedAt',
  Url = 'url'
}

export enum MediaType {
  Image = 'IMAGE',
  Raw = 'RAW',
  Video = 'VIDEO'
}

export type MediaTypeFilterComparison = {
  eq?: InputMaybe<MediaType>;
  gt?: InputMaybe<MediaType>;
  gte?: InputMaybe<MediaType>;
  iLike?: InputMaybe<MediaType>;
  in?: InputMaybe<Array<MediaType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<MediaType>;
  lt?: InputMaybe<MediaType>;
  lte?: InputMaybe<MediaType>;
  neq?: InputMaybe<MediaType>;
  notILike?: InputMaybe<MediaType>;
  notIn?: InputMaybe<Array<MediaType>>;
  notLike?: InputMaybe<MediaType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCartItemsToCart: Cart;
  addMediaToProduct: Product;
  addProductsToWishlist: Wishlist;
  addWarehouseItemsToWarehouse: Warehouse;
  cancelOrder: Order;
  cancelReservationForWarehouseItemsInWarehouse: Warehouse;
  createCheckoutSession: CreateSessionResponse;
  createOneAddress: Address;
  createOneBrand: Brand;
  createOneCartItem: CartItem;
  createOneCategory: Category;
  createOneCity: City;
  createOneColor: Color;
  createOneComment: Comment;
  createOneCountry: Country;
  createOneDeliveryMethod: DeliveryMethod;
  createOneEmailAddress: EmailAddress;
  createOneMedia: Media;
  createOneOrder: Order;
  createOneOrderFromCurrentUserCart: Order;
  createOnePaymentIntent: PaymentIntent;
  createOnePaymentMethod: PaymentMethod;
  createOnePermission: Permission;
  createOnePickupPoint: PickupPoint;
  createOnePrice: Price;
  createOneProduct: Product;
  createOneProductVariant: ProductVariant;
  createOneRole: Role;
  createOneSize: Size;
  createOneUser: User;
  createOneUserAddress: UserAddress;
  createOneWarehouse: Warehouse;
  deleteOneAddress: AddressDeleteResponse;
  deleteOneBrand: BrandDeleteResponse;
  deleteOneCartItem: CartItemDeleteResponse;
  deleteOneCategory: CategoryDeleteResponse;
  deleteOneCity: CityDeleteResponse;
  deleteOneColor: ColorDeleteResponse;
  deleteOneComment: CommentDeleteResponse;
  deleteOneCountry: CountryDeleteResponse;
  deleteOneDeliveryMethod: DeliveryMethodDeleteResponse;
  deleteOneEmailAddress: EmailAddressDeleteResponse;
  deleteOneMedia: MediaDeleteResponse;
  deleteOneOrder: OrderDeleteResponse;
  deleteOnePaymentIntent: PaymentIntentDeleteResponse;
  deleteOnePaymentMethod: PaymentMethodDeleteResponse;
  deleteOnePermission: PermissionDeleteResponse;
  deleteOnePickupPoint: PickupPointDeleteResponse;
  deleteOnePrice: PriceDeleteResponse;
  deleteOneProduct: ProductDeleteResponse;
  deleteOneProductVariant: ProductVariantDeleteResponse;
  deleteOneRole: RoleDeleteResponse;
  deleteOneSize: SizeDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneUserAddress: UserAddressDeleteResponse;
  deleteOneWarehouse: WarehouseDeleteResponse;
  emptyCart: Cart;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  reissueAccessToken: AccessTokenResponse;
  releaseWarehouseItemsInWarehouse: Warehouse;
  removeCartItemsFromCart: Cart;
  removeMediaFromProduct: Product;
  removeProductsFromWishlist: Wishlist;
  removeWarehouseItemsFromWarehouse: Warehouse;
  reserveWarehouseItemsInWarehouse: Warehouse;
  restoreOneUser: User;
  sendConfirmationEmail: EmailAddressConfirmation;
  signup: SignupResponse;
  updateAvatar: User;
  updateOneAddress: Address;
  updateOneBrand: Brand;
  updateOneCartItem: CartItem;
  updateOneCategory: Category;
  updateOneCity: City;
  updateOneColor: Color;
  updateOneComment: Comment;
  updateOneCountry: Country;
  updateOneDeliveryMethod: DeliveryMethod;
  updateOneEmailAddress: EmailAddress;
  updateOneMedia: Media;
  updateOneOrder: Order;
  updateOnePaymentIntent: PaymentIntent;
  updateOnePaymentMethod: PaymentMethod;
  updateOnePermission: Permission;
  updateOnePickupPoint: PickupPoint;
  updateOnePrice: Price;
  updateOneProduct: Product;
  updateOneProductVariant: ProductVariant;
  updateOneRole: Role;
  updateOneSize: Size;
  updateOneUser: User;
  updateOneUserAddress: UserAddress;
  updateOneWarehouse: Warehouse;
};


export type MutationAddCartItemsToCartArgs = {
  input: UpdateOneCartInputType;
};


export type MutationAddMediaToProductArgs = {
  files?: Array<Scalars['Upload']>;
  input: SelectProductInput;
};


export type MutationAddProductsToWishlistArgs = {
  input: AddProductsToWishlistInputType;
};


export type MutationAddWarehouseItemsToWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
};


export type MutationCancelOrderArgs = {
  input: CancelOrderInputType;
};


export type MutationCancelReservationForWarehouseItemsInWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
};


export type MutationCreateOneAddressArgs = {
  input: CreateOneAddressInput;
};


export type MutationCreateOneBrandArgs = {
  input: CreateOneBrandInput;
};


export type MutationCreateOneCartItemArgs = {
  input: CreateOneCartItemInput;
};


export type MutationCreateOneCategoryArgs = {
  input: CreateOneCategoryInput;
};


export type MutationCreateOneCityArgs = {
  input: CreateOneCityInput;
};


export type MutationCreateOneColorArgs = {
  input: CreateOneColorInput;
};


export type MutationCreateOneCommentArgs = {
  input: CreateOneCommentInput;
};


export type MutationCreateOneCountryArgs = {
  input: CreateOneCountryInput;
};


export type MutationCreateOneDeliveryMethodArgs = {
  input: CreateOneDeliveryMethodInput;
};


export type MutationCreateOneEmailAddressArgs = {
  input: CreateOneEmailAddressInput;
};


export type MutationCreateOneMediaArgs = {
  file: Scalars['Upload'];
};


export type MutationCreateOneOrderArgs = {
  input: CreateOneOrderInput;
};


export type MutationCreateOneOrderFromCurrentUserCartArgs = {
  input: CreateOneOrderFromCurrentUserCartInputType;
};


export type MutationCreateOnePaymentIntentArgs = {
  input: CreateOnePaymentIntentInput;
};


export type MutationCreateOnePaymentMethodArgs = {
  input: CreateOnePaymentMethodInput;
};


export type MutationCreateOnePermissionArgs = {
  input: CreateOnePermissionInput;
};


export type MutationCreateOnePickupPointArgs = {
  input: CreateOnePickupPointInput;
};


export type MutationCreateOnePriceArgs = {
  input: CreateOnePriceInput;
};


export type MutationCreateOneProductArgs = {
  files?: Array<Scalars['Upload']>;
  input: CreateOneProductInputType;
};


export type MutationCreateOneProductVariantArgs = {
  input: CreateOneProductVariantInput;
};


export type MutationCreateOneRoleArgs = {
  input: CreateOneRoleInput;
};


export type MutationCreateOneSizeArgs = {
  input: CreateOneSizeInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationCreateOneUserAddressArgs = {
  input: CreateOneUserAddressInput;
};


export type MutationCreateOneWarehouseArgs = {
  input: CreateOneWarehouseInput;
};


export type MutationDeleteOneAddressArgs = {
  input: DeleteOneAddressInput;
};


export type MutationDeleteOneBrandArgs = {
  input: DeleteOneBrandInput;
};


export type MutationDeleteOneCartItemArgs = {
  input: DeleteOneCartItemInput;
};


export type MutationDeleteOneCategoryArgs = {
  input: DeleteOneCategoryInput;
};


export type MutationDeleteOneCityArgs = {
  input: DeleteOneCityInput;
};


export type MutationDeleteOneColorArgs = {
  input: DeleteOneColorInput;
};


export type MutationDeleteOneCommentArgs = {
  input: DeleteOneCommentInput;
};


export type MutationDeleteOneCountryArgs = {
  input: DeleteOneCountryInput;
};


export type MutationDeleteOneDeliveryMethodArgs = {
  input: DeleteOneDeliveryMethodInput;
};


export type MutationDeleteOneEmailAddressArgs = {
  input: DeleteOneEmailAddressInput;
};


export type MutationDeleteOneMediaArgs = {
  input: DeleteOneMediaInput;
};


export type MutationDeleteOneOrderArgs = {
  input: DeleteOneOrderInput;
};


export type MutationDeleteOnePaymentIntentArgs = {
  input: DeleteOnePaymentIntentInput;
};


export type MutationDeleteOnePaymentMethodArgs = {
  input: DeleteOnePaymentMethodInput;
};


export type MutationDeleteOnePermissionArgs = {
  input: DeleteOnePermissionInput;
};


export type MutationDeleteOnePickupPointArgs = {
  input: DeleteOnePickupPointInput;
};


export type MutationDeleteOnePriceArgs = {
  input: DeleteOnePriceInput;
};


export type MutationDeleteOneProductArgs = {
  input: DeleteOneProductInput;
};


export type MutationDeleteOneProductVariantArgs = {
  input: DeleteOneProductVariantInput;
};


export type MutationDeleteOneRoleArgs = {
  input: DeleteOneRoleInput;
};


export type MutationDeleteOneSizeArgs = {
  input: DeleteOneSizeInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationDeleteOneUserAddressArgs = {
  input: DeleteOneUserAddressInput;
};


export type MutationDeleteOneWarehouseArgs = {
  input: DeleteOneWarehouseInput;
};


export type MutationEmptyCartArgs = {
  input: DeleteOneCartInputType;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationReleaseWarehouseItemsInWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
};


export type MutationRemoveCartItemsFromCartArgs = {
  input: UpdateOneCartInputType;
};


export type MutationRemoveMediaFromProductArgs = {
  input: RemoveMediaInputType;
};


export type MutationRemoveProductsFromWishlistArgs = {
  input: RemoveProductsFromWishlistInputType;
};


export type MutationRemoveWarehouseItemsFromWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
};


export type MutationReserveWarehouseItemsInWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
};


export type MutationRestoreOneUserArgs = {
  input: Scalars['ID'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUpdateAvatarArgs = {
  file: Scalars['Upload'];
  input: SelectUserInput;
};


export type MutationUpdateOneAddressArgs = {
  input: UpdateOneAddressInput;
};


export type MutationUpdateOneBrandArgs = {
  input: UpdateOneBrandInput;
};


export type MutationUpdateOneCartItemArgs = {
  input: UpdateOneCartItemInput;
};


export type MutationUpdateOneCategoryArgs = {
  input: UpdateOneCategoryInput;
};


export type MutationUpdateOneCityArgs = {
  input: UpdateOneCityInput;
};


export type MutationUpdateOneColorArgs = {
  input: UpdateOneColorInput;
};


export type MutationUpdateOneCommentArgs = {
  input: UpdateOneCommentInput;
};


export type MutationUpdateOneCountryArgs = {
  input: UpdateOneCountryInput;
};


export type MutationUpdateOneDeliveryMethodArgs = {
  input: UpdateOneDeliveryMethodInput;
};


export type MutationUpdateOneEmailAddressArgs = {
  input: UpdateOneEmailAddressInput;
};


export type MutationUpdateOneMediaArgs = {
  file: Scalars['Upload'];
  input: SelectMediaInput;
};


export type MutationUpdateOneOrderArgs = {
  input: UpdateOneOrderInput;
};


export type MutationUpdateOnePaymentIntentArgs = {
  input: UpdateOnePaymentIntentInput;
};


export type MutationUpdateOnePaymentMethodArgs = {
  input: UpdateOnePaymentMethodInput;
};


export type MutationUpdateOnePermissionArgs = {
  input: UpdateOnePermissionInput;
};


export type MutationUpdateOnePickupPointArgs = {
  input: UpdateOnePickupPointInput;
};


export type MutationUpdateOnePriceArgs = {
  input: UpdateOnePriceInput;
};


export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};


export type MutationUpdateOneProductVariantArgs = {
  input: UpdateOneProductVariantInput;
};


export type MutationUpdateOneRoleArgs = {
  input: UpdateOneRoleInput;
};


export type MutationUpdateOneSizeArgs = {
  input: UpdateOneSizeInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};


export type MutationUpdateOneUserAddressArgs = {
  input: UpdateOneUserAddressInput;
};


export type MutationUpdateOneWarehouseArgs = {
  input: UpdateOneWarehouseInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type Order = {
  __typename?: 'Order';
  deliveryAddress: Address;
  deliveryAddressId: Scalars['ID'];
  deliveryMethod: DeliveryMethod;
  deliveryMethodId: Scalars['ID'];
  deliveryPrice: Price;
  deliveryPriceId: Scalars['ID'];
  id: Scalars['ID'];
  orderItems: Array<OrderItem>;
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['ID'];
  status: OrderStatus;
  subtotalPrice: Price;
  subtotalPriceId: Scalars['ID'];
  taxPrice: Price;
  taxPriceId: Scalars['ID'];
  totalPrice: Price;
  totalPriceId: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};


export type OrderOrderItemsArgs = {
  filter?: OrderItemFilter;
  sorting?: Array<OrderItemSort>;
};

export type OrderAggregateGroupBy = {
  __typename?: 'OrderAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  status?: Maybe<OrderStatus>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Array of edges. */
  edges: Array<OrderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deliveryAddressId?: Maybe<Scalars['Int']>;
  deliveryMethodId?: Maybe<Scalars['Int']>;
  deliveryPriceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  paymentMethodId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  subtotalPriceId?: Maybe<Scalars['Int']>;
  taxPriceId?: Maybe<Scalars['Int']>;
  totalPriceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  status?: Maybe<OrderStatus>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Order */
  node: Order;
};

export type OrderFilter = {
  and?: InputMaybe<Array<OrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilter>>;
  orderItems?: InputMaybe<OrderFilterOrderItemFilter>;
  paymentMethod?: InputMaybe<OrderFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPrice?: InputMaybe<OrderFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  order: Order;
  orderId: Scalars['ID'];
  price: Price;
  priceId: Scalars['ID'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  warehouse: Warehouse;
  warehouseId: Scalars['ID'];
};

export type OrderItemAggregateGroupBy = {
  __typename?: 'OrderItemAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  warehouseId?: Maybe<Scalars['ID']>;
};

export type OrderItemAvgAggregate = {
  __typename?: 'OrderItemAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderItemCountAggregate = {
  __typename?: 'OrderItemCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  productVariantId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  warehouseId?: Maybe<Scalars['Int']>;
};

export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderItem */
  node: OrderItem;
};

export type OrderItemFilter = {
  and?: InputMaybe<Array<OrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderItemFilter>>;
  order?: InputMaybe<OrderItemFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<OrderItemFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariant?: InputMaybe<OrderItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouse?: InputMaybe<OrderItemFilterWarehouseFilter>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderItemFilterOrderFilter = {
  and?: InputMaybe<Array<OrderItemFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderItemFilterOrderFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderItemFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderItemFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderItemFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderItemFilterProductVariantFilter>>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderItemFilterProductVariantFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderItemFilterWarehouseFilter = {
  and?: InputMaybe<Array<OrderItemFilterWarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderItemFilterWarehouseFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderItemMaxAggregate = {
  __typename?: 'OrderItemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  warehouseId?: Maybe<Scalars['ID']>;
};

export type OrderItemMinAggregate = {
  __typename?: 'OrderItemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  warehouseId?: Maybe<Scalars['ID']>;
};

export type OrderItemSort = {
  direction: SortDirection;
  field: OrderItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderItemSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  PriceId = 'priceId',
  ProductVariantId = 'productVariantId',
  Quantity = 'quantity',
  UpdatedAt = 'updatedAt',
  WarehouseId = 'warehouseId'
}

export type OrderItemSumAggregate = {
  __typename?: 'OrderItemSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  status?: Maybe<OrderStatus>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  status?: Maybe<OrderStatus>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type OrderSort = {
  direction: SortDirection;
  field: OrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderSortFields {
  CreatedAt = 'createdAt',
  DeliveryAddressId = 'deliveryAddressId',
  DeliveryMethodId = 'deliveryMethodId',
  DeliveryPriceId = 'deliveryPriceId',
  Id = 'id',
  PaymentMethodId = 'paymentMethodId',
  Status = 'status',
  SubtotalPriceId = 'subtotalPriceId',
  TaxPriceId = 'taxPriceId',
  TotalPriceId = 'totalPriceId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Created = 'CREATED',
  InShipping = 'IN_SHIPPING',
  OnTheWayToWarehouse = 'ON_THE_WAY_TO_WAREHOUSE',
  Rejected = 'REJECTED',
  WaitingForPayment = 'WAITING_FOR_PAYMENT'
}

export type OrderStatusFilterComparison = {
  eq?: InputMaybe<OrderStatus>;
  gt?: InputMaybe<OrderStatus>;
  gte?: InputMaybe<OrderStatus>;
  iLike?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<OrderStatus>;
  lt?: InputMaybe<OrderStatus>;
  lte?: InputMaybe<OrderStatus>;
  neq?: InputMaybe<OrderStatus>;
  notILike?: InputMaybe<OrderStatus>;
  notIn?: InputMaybe<Array<OrderStatus>>;
  notLike?: InputMaybe<OrderStatus>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  clientSecret: Scalars['String'];
  id: Scalars['ID'];
  order: Order;
  orderId: Scalars['ID'];
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['ID'];
  price: PaymentMethod;
  priceId: Scalars['ID'];
};

export type PaymentIntentAggregateGroupBy = {
  __typename?: 'PaymentIntentAggregateGroupBy';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentIntentConnection = {
  __typename?: 'PaymentIntentConnection';
  /** Array of edges. */
  edges: Array<PaymentIntentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PaymentIntentCountAggregate = {
  __typename?: 'PaymentIntentCountAggregate';
  clientSecret?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  paymentMethodId?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PaymentIntentDeleteResponse = {
  __typename?: 'PaymentIntentDeleteResponse';
  clientSecret?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
};

export type PaymentIntentEdge = {
  __typename?: 'PaymentIntentEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PaymentIntent */
  node: PaymentIntent;
};

export type PaymentIntentFilter = {
  and?: InputMaybe<Array<PaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentIntentFilter>>;
  order?: InputMaybe<PaymentIntentFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  paymentMethod?: InputMaybe<PaymentIntentFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<PaymentIntentFilterPaymentMethodFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PaymentIntentFilterOrderFilter = {
  and?: InputMaybe<Array<PaymentIntentFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentIntentFilterOrderFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type PaymentIntentFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<PaymentIntentFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PaymentIntentFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PaymentIntentMaxAggregate = {
  __typename?: 'PaymentIntentMaxAggregate';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentIntentMinAggregate = {
  __typename?: 'PaymentIntentMinAggregate';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentIntentSort = {
  direction: SortDirection;
  field: PaymentIntentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PaymentIntentSortFields {
  ClientSecret = 'clientSecret',
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  PaymentMethodId = 'paymentMethodId',
  PriceId = 'priceId',
  UpdatedAt = 'updatedAt'
}

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  code: PaymentMethods;
  id: Scalars['ID'];
  name: Scalars['String'];
  status: PaymentMethodStatus;
};

export type PaymentMethodAggregateGroupBy = {
  __typename?: 'PaymentMethodAggregateGroupBy';
  code?: Maybe<PaymentMethods>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentMethodConnection = {
  __typename?: 'PaymentMethodConnection';
  /** Array of edges. */
  edges: Array<PaymentMethodEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PaymentMethodCountAggregate = {
  __typename?: 'PaymentMethodCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PaymentMethodDeleteResponse = {
  __typename?: 'PaymentMethodDeleteResponse';
  code?: Maybe<PaymentMethods>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentMethodStatus>;
};

export type PaymentMethodEdge = {
  __typename?: 'PaymentMethodEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PaymentMethod */
  node: PaymentMethod;
};

export type PaymentMethodFilter = {
  and?: InputMaybe<Array<PaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PaymentMethodMaxAggregate = {
  __typename?: 'PaymentMethodMaxAggregate';
  code?: Maybe<PaymentMethods>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentMethodMinAggregate = {
  __typename?: 'PaymentMethodMinAggregate';
  code?: Maybe<PaymentMethods>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentMethodSort = {
  direction: SortDirection;
  field: PaymentMethodSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PaymentMethodSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum PaymentMethodStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type PaymentMethodStatusFilterComparison = {
  eq?: InputMaybe<PaymentMethodStatus>;
  gt?: InputMaybe<PaymentMethodStatus>;
  gte?: InputMaybe<PaymentMethodStatus>;
  iLike?: InputMaybe<PaymentMethodStatus>;
  in?: InputMaybe<Array<PaymentMethodStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<PaymentMethodStatus>;
  lt?: InputMaybe<PaymentMethodStatus>;
  lte?: InputMaybe<PaymentMethodStatus>;
  neq?: InputMaybe<PaymentMethodStatus>;
  notILike?: InputMaybe<PaymentMethodStatus>;
  notIn?: InputMaybe<Array<PaymentMethodStatus>>;
  notLike?: InputMaybe<PaymentMethodStatus>;
};

export enum PaymentMethods {
  Card = 'CARD',
  CashOnDelivery = 'CASH_ON_DELIVERY'
}

export type PaymentMethodsFilterComparison = {
  eq?: InputMaybe<PaymentMethods>;
  gt?: InputMaybe<PaymentMethods>;
  gte?: InputMaybe<PaymentMethods>;
  iLike?: InputMaybe<PaymentMethods>;
  in?: InputMaybe<Array<PaymentMethods>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<PaymentMethods>;
  lt?: InputMaybe<PaymentMethods>;
  lte?: InputMaybe<PaymentMethods>;
  neq?: InputMaybe<PaymentMethods>;
  notILike?: InputMaybe<PaymentMethods>;
  notIn?: InputMaybe<Array<PaymentMethods>>;
  notLike?: InputMaybe<PaymentMethods>;
};

export type Permission = {
  __typename?: 'Permission';
  action: Actions;
  conditions?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  subject: Scalars['String'];
};

export type PermissionAggregateGroupBy = {
  __typename?: 'PermissionAggregateGroupBy';
  conditions?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  /** Array of edges. */
  edges: Array<PermissionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PermissionCountAggregate = {
  __typename?: 'PermissionCountAggregate';
  conditions?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  subject?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PermissionDeleteResponse = {
  __typename?: 'PermissionDeleteResponse';
  action?: Maybe<Actions>;
  conditions?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
};

export type PermissionEdge = {
  __typename?: 'PermissionEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Permission */
  node: Permission;
};

export type PermissionFilter = {
  and?: InputMaybe<Array<PermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PermissionMaxAggregate = {
  __typename?: 'PermissionMaxAggregate';
  conditions?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PermissionMinAggregate = {
  __typename?: 'PermissionMinAggregate';
  conditions?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PermissionSort = {
  direction: SortDirection;
  field: PermissionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PermissionSortFields {
  Conditions = 'conditions',
  CreatedAt = 'createdAt',
  Id = 'id',
  Subject = 'subject',
  UpdatedAt = 'updatedAt'
}

export type PickupPoint = {
  __typename?: 'PickupPoint';
  address: Address;
  addressId: Scalars['ID'];
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type PickupPointAggregateGroupBy = {
  __typename?: 'PickupPointAggregateGroupBy';
  addressId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PickupPointConnection = {
  __typename?: 'PickupPointConnection';
  /** Array of edges. */
  edges: Array<PickupPointEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PickupPointCountAggregate = {
  __typename?: 'PickupPointCountAggregate';
  addressId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PickupPointDeleteResponse = {
  __typename?: 'PickupPointDeleteResponse';
  addressId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type PickupPointEdge = {
  __typename?: 'PickupPointEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PickupPoint */
  node: PickupPoint;
};

export type PickupPointFilter = {
  address?: InputMaybe<PickupPointFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<PickupPointFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PickupPointFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PickupPointFilterAddressFilter = {
  and?: InputMaybe<Array<PickupPointFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PickupPointFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PickupPointMaxAggregate = {
  __typename?: 'PickupPointMaxAggregate';
  addressId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PickupPointMinAggregate = {
  __typename?: 'PickupPointMinAggregate';
  addressId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PickupPointSort = {
  direction: SortDirection;
  field: PickupPointSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PickupPointSortFields {
  AddressId = 'addressId',
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum PickupPointStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float'];
  currency: Currencies;
  id: Scalars['ID'];
};

export type PriceAggregateGroupBy = {
  __typename?: 'PriceAggregateGroupBy';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Currencies>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PriceAvgAggregate = {
  __typename?: 'PriceAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type PriceConnection = {
  __typename?: 'PriceConnection';
  /** Array of edges. */
  edges: Array<PriceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PriceCountAggregate = {
  __typename?: 'PriceCountAggregate';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PriceDeleteResponse = {
  __typename?: 'PriceDeleteResponse';
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Currencies>;
  id?: Maybe<Scalars['ID']>;
};

export type PriceEdge = {
  __typename?: 'PriceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Price */
  node: Price;
};

export type PriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<PriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PriceMaxAggregate = {
  __typename?: 'PriceMaxAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Currencies>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PriceMinAggregate = {
  __typename?: 'PriceMinAggregate';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Currencies>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PriceSort = {
  direction: SortDirection;
  field: PriceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PriceSortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Currency = 'currency',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type PriceSumAggregate = {
  __typename?: 'PriceSumAggregate';
  amount?: Maybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  brand: Brand;
  brandId: Scalars['ID'];
  category: Category;
  categoryId: Scalars['ID'];
  description: Scalars['String'];
  id: Scalars['ID'];
  media: Array<Media>;
  productVariants: Array<ProductVariant>;
  title: Scalars['String'];
};


export type ProductMediaArgs = {
  filter?: MediaFilter;
  sorting?: Array<MediaSort>;
};


export type ProductProductVariantsArgs = {
  filter?: ProductVariantFilter;
  sorting?: Array<ProductVariantSort>;
};

export type ProductAggregateGroupBy = {
  __typename?: 'ProductAggregateGroupBy';
  brandId?: Maybe<Scalars['ID']>;
  categoryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Array of edges. */
  edges: Array<ProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  brandId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductDeleteResponse = {
  __typename?: 'ProductDeleteResponse';
  brandId?: Maybe<Scalars['ID']>;
  categoryId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Product */
  node: Product;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  brand?: InputMaybe<ProductFilterBrandFilter>;
  brandId?: InputMaybe<IdFilterComparison>;
  category?: InputMaybe<ProductFilterCategoryFilter>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
  productVariants?: InputMaybe<ProductFilterProductVariantFilter>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterBrandFilter = {
  and?: InputMaybe<Array<ProductFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterCategoryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilter>>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  brandId?: Maybe<Scalars['ID']>;
  categoryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  brandId?: Maybe<Scalars['ID']>;
  categoryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  BrandId = 'brandId',
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ProductVariant = {
  __typename?: 'ProductVariant';
  color: Color;
  colorId: Scalars['ID'];
  id: Scalars['ID'];
  price: Price;
  priceId: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  size: Size;
  sizeId: Scalars['ID'];
  sku: Scalars['ID'];
};

export type ProductVariantAggregateGroupBy = {
  __typename?: 'ProductVariantAggregateGroupBy';
  colorId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  sizeId?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** Array of edges. */
  edges: Array<ProductVariantEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductVariantCountAggregate = {
  __typename?: 'ProductVariantCountAggregate';
  colorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  sizeId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductVariantDeleteResponse = {
  __typename?: 'ProductVariantDeleteResponse';
  colorId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  sizeId?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['ID']>;
};

export type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ProductVariant */
  node: ProductVariant;
};

export type ProductVariantFilter = {
  and?: InputMaybe<Array<ProductVariantFilter>>;
  color?: InputMaybe<ProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductVariantFilter>>;
  price?: InputMaybe<ProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<ProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<ProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<ProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<ProductVariantFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductVariantFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<ProductVariantFilterSizeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductVariantFilterSizeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductVariantMaxAggregate = {
  __typename?: 'ProductVariantMaxAggregate';
  colorId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  sizeId?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantMinAggregate = {
  __typename?: 'ProductVariantMinAggregate';
  colorId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  sizeId?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductVariantSort = {
  direction: SortDirection;
  field: ProductVariantSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductVariantSortFields {
  ColorId = 'colorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  PriceId = 'priceId',
  ProductId = 'productId',
  SizeId = 'sizeId',
  Sku = 'sku',
  UpdatedAt = 'updatedAt'
}

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses: AddressConnection;
  brand?: Maybe<Brand>;
  brands: BrandConnection;
  cart?: Maybe<Cart>;
  cartItem?: Maybe<CartItem>;
  cartItems: CartItemConnection;
  carts: CartConnection;
  categories: CategoryConnection;
  category?: Maybe<Category>;
  cities: CityConnection;
  city?: Maybe<City>;
  color?: Maybe<Color>;
  colors: ColorConnection;
  comment?: Maybe<Comment>;
  comments: CommentConnection;
  countries: CountryConnection;
  country?: Maybe<Country>;
  deliveryMethod?: Maybe<DeliveryMethod>;
  deliveryMethods: DeliveryMethodConnection;
  emailAddress?: Maybe<EmailAddress>;
  emailAddressConfirmation?: Maybe<EmailAddressConfirmation>;
  emailAddressConfirmations: EmailAddressConfirmationConnection;
  emailAddresses: EmailAddressConnection;
  healthCheckRedis: Scalars['Boolean'];
  me?: Maybe<User>;
  media: MediaConnection;
  myCart: Cart;
  myWishlist: Wishlist;
  order?: Maybe<Order>;
  orders: OrderConnection;
  paymentIntent?: Maybe<PaymentIntent>;
  paymentIntents: PaymentIntentConnection;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethods: PaymentMethodConnection;
  permission?: Maybe<Permission>;
  permissions: PermissionConnection;
  pickupPoint?: Maybe<PickupPoint>;
  pickupPoints: PickupPointConnection;
  price?: Maybe<Price>;
  prices: PriceConnection;
  product?: Maybe<Product>;
  productVariant?: Maybe<ProductVariant>;
  productVariants: ProductVariantConnection;
  products: ProductConnection;
  role?: Maybe<Role>;
  roles: RoleConnection;
  size?: Maybe<Size>;
  sizes: SizeConnection;
  user?: Maybe<User>;
  userAddress?: Maybe<UserAddress>;
  userAddresses: UserAddressConnection;
  users: UserConnection;
  warehouse?: Maybe<Warehouse>;
  warehouses: WarehouseConnection;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressesArgs = {
  filter?: AddressFilter;
  paging?: CursorPaging;
  sorting?: Array<AddressSort>;
};


export type QueryBrandArgs = {
  id: Scalars['ID'];
};


export type QueryBrandsArgs = {
  filter?: BrandFilter;
  paging?: CursorPaging;
  sorting?: Array<BrandSort>;
};


export type QueryCartArgs = {
  id: Scalars['ID'];
};


export type QueryCartItemArgs = {
  id: Scalars['ID'];
};


export type QueryCartItemsArgs = {
  filter?: CartItemFilter;
  paging?: CursorPaging;
  sorting?: Array<CartItemSort>;
};


export type QueryCartsArgs = {
  filter?: CartFilter;
  paging?: CursorPaging;
  sorting?: Array<CartSort>;
};


export type QueryCategoriesArgs = {
  filter?: CategoryFilter;
  paging?: CursorPaging;
  sorting?: Array<CategorySort>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryCitiesArgs = {
  filter?: CityFilter;
  paging?: CursorPaging;
  sorting?: Array<CitySort>;
};


export type QueryCityArgs = {
  id: Scalars['ID'];
};


export type QueryColorArgs = {
  id: Scalars['ID'];
};


export type QueryColorsArgs = {
  filter?: ColorFilter;
  paging?: CursorPaging;
  sorting?: Array<ColorSort>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  filter?: CommentFilter;
  paging?: CursorPaging;
  sorting?: Array<CommentSort>;
};


export type QueryCountriesArgs = {
  filter?: CountryFilter;
  paging?: CursorPaging;
  sorting?: Array<CountrySort>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryDeliveryMethodArgs = {
  id: Scalars['ID'];
};


export type QueryDeliveryMethodsArgs = {
  filter?: DeliveryMethodFilter;
  paging?: CursorPaging;
  sorting?: Array<DeliveryMethodSort>;
};


export type QueryEmailAddressArgs = {
  id: Scalars['ID'];
};


export type QueryEmailAddressConfirmationArgs = {
  id: Scalars['ID'];
};


export type QueryEmailAddressConfirmationsArgs = {
  filter?: EmailAddressConfirmationFilter;
  paging?: CursorPaging;
  sorting?: Array<EmailAddressConfirmationSort>;
};


export type QueryEmailAddressesArgs = {
  filter?: EmailAddressFilter;
  paging?: CursorPaging;
  sorting?: Array<EmailAddressSort>;
};


export type QueryMediaArgs = {
  filter?: MediaFilter;
  paging?: CursorPaging;
  sorting?: Array<MediaSort>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  filter?: OrderFilter;
  paging?: CursorPaging;
  sorting?: Array<OrderSort>;
};


export type QueryPaymentIntentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentIntentsArgs = {
  filter?: PaymentIntentFilter;
  paging?: CursorPaging;
  sorting?: Array<PaymentIntentSort>;
};


export type QueryPaymentMethodArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentMethodsArgs = {
  filter?: PaymentMethodFilter;
  paging?: CursorPaging;
  sorting?: Array<PaymentMethodSort>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionsArgs = {
  filter?: PermissionFilter;
  paging?: CursorPaging;
  sorting?: Array<PermissionSort>;
};


export type QueryPickupPointArgs = {
  id: Scalars['ID'];
};


export type QueryPickupPointsArgs = {
  filter?: PickupPointFilter;
  paging?: CursorPaging;
  sorting?: Array<PickupPointSort>;
};


export type QueryPriceArgs = {
  id: Scalars['ID'];
};


export type QueryPricesArgs = {
  filter?: PriceFilter;
  paging?: CursorPaging;
  sorting?: Array<PriceSort>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantArgs = {
  id: Scalars['ID'];
};


export type QueryProductVariantsArgs = {
  filter?: ProductVariantFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductVariantSort>;
};


export type QueryProductsArgs = {
  filter?: ProductFilter;
  paging?: CursorPaging;
  sorting?: Array<ProductSort>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: RoleFilter;
  paging?: CursorPaging;
  sorting?: Array<RoleSort>;
};


export type QuerySizeArgs = {
  id: Scalars['ID'];
};


export type QuerySizesArgs = {
  filter?: SizeFilter;
  paging?: CursorPaging;
  sorting?: Array<SizeSort>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserAddressArgs = {
  id: Scalars['ID'];
};


export type QueryUserAddressesArgs = {
  filter?: UserAddressFilter;
  paging?: CursorPaging;
  sorting?: Array<UserAddressSort>;
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: CursorPaging;
  sorting?: Array<UserSort>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID'];
};


export type QueryWarehousesArgs = {
  filter?: WarehouseFilter;
  paging?: CursorPaging;
  sorting?: Array<WarehouseSort>;
};

export type RemoveMediaInputType = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveProductsFromWishlist = {
  products: Array<SelectProductInput>;
};

export type RemoveProductsFromWishlistInputType = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: RemoveProductsFromWishlist;
};

export type Role = {
  __typename?: 'Role';
  code: Roles;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions: Array<Permission>;
};


export type RolePermissionsArgs = {
  filter?: PermissionFilter;
  sorting?: Array<PermissionSort>;
};

export type RoleAggregateGroupBy = {
  __typename?: 'RoleAggregateGroupBy';
  code?: Maybe<Roles>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** Array of edges. */
  edges: Array<RoleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type RoleDeleteResponse = {
  __typename?: 'RoleDeleteResponse';
  code?: Maybe<Roles>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Role */
  node: Role;
};

export type RoleFilter = {
  and?: InputMaybe<Array<RoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<RoleFilter>>;
  permissions?: InputMaybe<RoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RoleFilterPermissionFilter = {
  and?: InputMaybe<Array<RoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  code?: Maybe<Roles>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  code?: Maybe<Roles>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RoleSort = {
  direction: SortDirection;
  field: RoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RoleSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export enum Roles {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  CustomerSupport = 'CUSTOMER_SUPPORT',
  Partner = 'PARTNER'
}

export type RolesFilterComparison = {
  eq?: InputMaybe<Roles>;
  gt?: InputMaybe<Roles>;
  gte?: InputMaybe<Roles>;
  iLike?: InputMaybe<Roles>;
  in?: InputMaybe<Array<Roles>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Roles>;
  lt?: InputMaybe<Roles>;
  lte?: InputMaybe<Roles>;
  neq?: InputMaybe<Roles>;
  notILike?: InputMaybe<Roles>;
  notIn?: InputMaybe<Array<Roles>>;
  notLike?: InputMaybe<Roles>;
};

export type SelectCategoryInput = {
  id: Scalars['String'];
};

export type SelectMediaInput = {
  id: Scalars['String'];
};

export type SelectProductInput = {
  id: Scalars['String'];
};

export type SelectUserInput = {
  id: Scalars['String'];
};

export type SignupInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordConfirmation: Scalars['String'];
};

export type SignupResponse = {
  __typename?: 'SignupResponse';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Size = {
  __typename?: 'Size';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SizeAggregateGroupBy = {
  __typename?: 'SizeAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SizeConnection = {
  __typename?: 'SizeConnection';
  /** Array of edges. */
  edges: Array<SizeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SizeCountAggregate = {
  __typename?: 'SizeCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type SizeDeleteResponse = {
  __typename?: 'SizeDeleteResponse';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SizeEdge = {
  __typename?: 'SizeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Size */
  node: Size;
};

export type SizeFilter = {
  and?: InputMaybe<Array<SizeFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SizeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SizeMaxAggregate = {
  __typename?: 'SizeMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SizeMinAggregate = {
  __typename?: 'SizeMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SizeSort = {
  direction: SortDirection;
  field: SizeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SizeSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export enum Sizes {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type UpdateAddressInput = {
  building?: InputMaybe<Scalars['String']>;
  cityId?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type UpdateBrandInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCartInput = {
  cartItems?: InputMaybe<Array<UpdateCartItemInput>>;
};

export type UpdateCartItemInput = {
  productVariantId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
};

export type UpdateCategoryInput = {
  children?: InputMaybe<Array<SelectCategoryInput>>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
};

export type UpdateCityInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateColorInput = {
  code?: InputMaybe<Scalars['String']>;
  hex?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type UpdateCountryInput = {
  cities?: InputMaybe<Array<UpdateCityInput>>;
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateDeliveryMethodInput = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<CreatePriceInput>;
  status?: InputMaybe<DeliveryMethodStatus>;
};

export type UpdateEmailAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateOneAddressInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAddressInput;
};

export type UpdateOneBrandInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateBrandInput;
};

export type UpdateOneCartInputType = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCartInput;
};

export type UpdateOneCartItemInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCartItemInput;
};

export type UpdateOneCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCategoryInput;
};

export type UpdateOneCityInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCityInput;
};

export type UpdateOneColorInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateColorInput;
};

export type UpdateOneCommentInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCommentInput;
};

export type UpdateOneCountryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCountryInput;
};

export type UpdateOneDeliveryMethodInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateDeliveryMethodInput;
};

export type UpdateOneEmailAddressInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateEmailAddressInput;
};

export type UpdateOneOrderInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateOrderInput;
};

export type UpdateOnePaymentIntentInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePaymentIntentInput;
};

export type UpdateOnePaymentMethodInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePaymentMethodInput;
};

export type UpdateOnePermissionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePermissionInput;
};

export type UpdateOnePickupPointInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePickupPointInput;
};

export type UpdateOnePriceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePriceInput;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductInput;
};

export type UpdateOneProductVariantInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateProductVariantInput;
};

export type UpdateOneRoleInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateRoleInput;
};

export type UpdateOneSizeInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSizeInput;
};

export type UpdateOneUserAddressInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserAddressInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateOneWarehouseInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateWarehouseInput;
};

export type UpdateOneWarehouseInputType = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: WarehouseInput;
};

export type UpdateOrderInput = {
  status?: InputMaybe<OrderStatus>;
};

export type UpdatePaymentIntentInput = {
  clientSecret?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<CreatePriceInput>;
};

export type UpdatePaymentMethodInput = {
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PaymentMethodStatus>;
};

export type UpdatePermissionInput = {
  action?: InputMaybe<Actions>;
  conditions?: InputMaybe<Scalars['JSON']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type UpdatePickupPointInput = {
  address: UpdateAddressInput;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PickupPointStatus>;
};

export type UpdatePriceInput = {
  amount?: InputMaybe<Scalars['Float']>;
  currency?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  brandId?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProductVariantInput = {
  colorId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<CreatePriceInput>;
  sizeId?: InputMaybe<Scalars['String']>;
};

export type UpdateRoleInput = {
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<CreatePermissionInput>>;
};

export type UpdateSizeInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserAddressInput = {
  address: UpdateAddressInput;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateWarehouseInput = {
  address?: InputMaybe<CreateAddressInput>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<WarehouseStatus>;
  warehouseItems?: InputMaybe<Array<UpdateWarehouseItemInput>>;
};

export type UpdateWarehouseItemInput = {
  productVariantId?: InputMaybe<Scalars['String']>;
  reserved?: InputMaybe<Scalars['Float']>;
  stock?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Media>;
  avatarId?: Maybe<Scalars['ID']>;
  brands: Array<Brand>;
  cart: Cart;
  emailAddress: EmailAddress;
  emailAddressId: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  permissions: Array<Permission>;
  phone?: Maybe<Scalars['String']>;
  userAddresses: Array<UserAddress>;
  wishlist: Wishlist;
};


export type UserBrandsArgs = {
  filter?: BrandFilter;
  sorting?: Array<BrandSort>;
};


export type UserUserAddressesArgs = {
  filter?: UserAddressFilter;
  sorting?: Array<UserAddressSort>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  address: Address;
  addressId: Scalars['ID'];
  id: Scalars['ID'];
  user: User;
  userId: Scalars['ID'];
};

export type UserAddressAggregateGroupBy = {
  __typename?: 'UserAddressAggregateGroupBy';
  addressId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  /** Array of edges. */
  edges: Array<UserAddressEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserAddressCountAggregate = {
  __typename?: 'UserAddressCountAggregate';
  addressId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserAddressDeleteResponse = {
  __typename?: 'UserAddressDeleteResponse';
  addressId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserAddressEdge = {
  __typename?: 'UserAddressEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UserAddress */
  node: UserAddress;
};

export type UserAddressFilter = {
  address?: InputMaybe<UserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<UserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<UserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type UserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<UserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserAddressFilterUserFilter = {
  and?: InputMaybe<Array<UserAddressFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserAddressMaxAggregate = {
  __typename?: 'UserAddressMaxAggregate';
  addressId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserAddressMinAggregate = {
  __typename?: 'UserAddressMinAggregate';
  addressId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserAddressSort = {
  direction: SortDirection;
  field: UserAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserAddressSortFields {
  AddressId = 'addressId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  avatarId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  avatarId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  emailAddressId?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  avatarId?: Maybe<Scalars['ID']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permission>>;
  phone?: Maybe<Scalars['String']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  avatar?: InputMaybe<UserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<UserFilterBrandFilter>;
  cart?: InputMaybe<UserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<UserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<UserFilterUserAddressFilter>;
  wishlist?: InputMaybe<UserFilterWishlistFilter>;
};

export type UserFilterBrandFilter = {
  and?: InputMaybe<Array<UserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type UserFilterCartFilter = {
  and?: InputMaybe<Array<UserFilterCartFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterCartFilter>>;
  quantity?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type UserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<UserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type UserFilterMediaFilter = {
  and?: InputMaybe<Array<UserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
};

export type UserFilterUserAddressFilter = {
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<UserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type UserFilterWishlistFilter = {
  and?: InputMaybe<Array<UserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterWishlistFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatarId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatarId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  AvatarId = 'avatarId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EmailAddressId = 'emailAddressId',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Phone = 'phone',
  UpdatedAt = 'updatedAt'
}

export type Warehouse = {
  __typename?: 'Warehouse';
  address?: Maybe<Address>;
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
  warehouseItems: Array<WarehouseItem>;
};


export type WarehouseWarehouseItemsArgs = {
  filter?: WarehouseItemFilter;
  sorting?: Array<WarehouseItemSort>;
};

export type WarehouseAggregateGroupBy = {
  __typename?: 'WarehouseAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WarehouseConnection = {
  __typename?: 'WarehouseConnection';
  /** Array of edges. */
  edges: Array<WarehouseEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type WarehouseCountAggregate = {
  __typename?: 'WarehouseCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type WarehouseDeleteResponse = {
  __typename?: 'WarehouseDeleteResponse';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type WarehouseEdge = {
  __typename?: 'WarehouseEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Warehouse */
  node: Warehouse;
};

export type WarehouseFilter = {
  address?: InputMaybe<WarehouseFilterAddressFilter>;
  and?: InputMaybe<Array<WarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WarehouseFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseItems?: InputMaybe<WarehouseFilterWarehouseItemFilter>;
};

export type WarehouseFilterAddressFilter = {
  and?: InputMaybe<Array<WarehouseFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehouseFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type WarehouseFilterWarehouseItemFilter = {
  and?: InputMaybe<Array<WarehouseFilterWarehouseItemFilter>>;
  available?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehouseFilterWarehouseItemFilter>>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  reserved?: InputMaybe<IntFieldComparison>;
  stock?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type WarehouseInput = {
  warehouseItems: Array<WarehouseItemsInput>;
};

export type WarehouseItem = {
  __typename?: 'WarehouseItem';
  available: Scalars['Int'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  reserved: Scalars['Int'];
  stock: Scalars['Int'];
  warehouseId: Scalars['ID'];
};

export type WarehouseItemAggregateGroupBy = {
  __typename?: 'WarehouseItemAggregateGroupBy';
  available?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  reserved?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  warehouseId?: Maybe<Scalars['ID']>;
};

export type WarehouseItemAvgAggregate = {
  __typename?: 'WarehouseItemAvgAggregate';
  available?: Maybe<Scalars['Float']>;
  reserved?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

export type WarehouseItemCountAggregate = {
  __typename?: 'WarehouseItemCountAggregate';
  available?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  productVariantId?: Maybe<Scalars['Int']>;
  reserved?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  warehouseId?: Maybe<Scalars['Int']>;
};

export type WarehouseItemEdge = {
  __typename?: 'WarehouseItemEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the WarehouseItem */
  node: WarehouseItem;
};

export type WarehouseItemFilter = {
  and?: InputMaybe<Array<WarehouseItemFilter>>;
  available?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehouseItemFilter>>;
  productVariant?: InputMaybe<WarehouseItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  reserved?: InputMaybe<IntFieldComparison>;
  stock?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type WarehouseItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<WarehouseItemFilterProductVariantFilter>>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WarehouseItemFilterProductVariantFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type WarehouseItemMaxAggregate = {
  __typename?: 'WarehouseItemMaxAggregate';
  available?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  reserved?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  warehouseId?: Maybe<Scalars['ID']>;
};

export type WarehouseItemMinAggregate = {
  __typename?: 'WarehouseItemMinAggregate';
  available?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  reserved?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  warehouseId?: Maybe<Scalars['ID']>;
};

export type WarehouseItemSort = {
  direction: SortDirection;
  field: WarehouseItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehouseItemSortFields {
  Available = 'available',
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductVariantId = 'productVariantId',
  Reserved = 'reserved',
  Stock = 'stock',
  UpdatedAt = 'updatedAt',
  WarehouseId = 'warehouseId'
}

export type WarehouseItemSumAggregate = {
  __typename?: 'WarehouseItemSumAggregate';
  available?: Maybe<Scalars['Float']>;
  reserved?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Float']>;
};

export type WarehouseItemsInput = {
  productVariantId: Scalars['String'];
  quantity?: Scalars['Float'];
};

export type WarehouseMaxAggregate = {
  __typename?: 'WarehouseMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WarehouseMinAggregate = {
  __typename?: 'WarehouseMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WarehouseSort = {
  direction: SortDirection;
  field: WarehouseSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WarehouseSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum WarehouseStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Wishlist = {
  __typename?: 'Wishlist';
  id: Scalars['ID'];
  products: Array<Product>;
  user: User;
  userId: Scalars['ID'];
};


export type WishlistProductsArgs = {
  filter?: ProductFilter;
  sorting?: Array<ProductSort>;
};

export type WishlistAggregateGroupBy = {
  __typename?: 'WishlistAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type WishlistCountAggregate = {
  __typename?: 'WishlistCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type WishlistEdge = {
  __typename?: 'WishlistEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Wishlist */
  node: Wishlist;
};

export type WishlistMaxAggregate = {
  __typename?: 'WishlistMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type WishlistMinAggregate = {
  __typename?: 'WishlistMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type FullCountryFragment = { __typename?: 'Country', id: string, code: string, name: string };

export type UserWithIdAndPermissionsFragment = { __typename?: 'User', id: string, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, refreshToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: { __typename?: 'CountryConnection', edges: Array<{ __typename?: 'CountryEdge', node: { __typename?: 'Country', id: string, code: string, name: string } }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, fullName: string, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } | null };

export const FullCountryFragmentDoc = gql`
    fragment FullCountry on Country {
  id
  code
  name
}
    `;
export const UserWithIdAndPermissionsFragmentDoc = gql`
    fragment UserWithIdAndPermissions on User {
  id
  permissions {
    id
    action
    subject
    conditions
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const CountriesDocument = gql`
    query Countries {
  countries {
    edges {
      node {
        ...FullCountry
      }
    }
  }
}
    ${FullCountryFragmentDoc}`;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
      }
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    fullName
    permissions {
      id
      action
      subject
      conditions
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;