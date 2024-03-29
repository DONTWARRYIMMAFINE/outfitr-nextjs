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
  Cancel = 'CANCEL',
  Complete = 'COMPLETE',
  Create = 'CREATE',
  Delete = 'DELETE',
  Manage = 'MANAGE',
  Read = 'READ',
  Reject = 'REJECT',
  TransferToDelivery = 'TRANSFER_TO_DELIVERY',
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
  country: Country;
  countryId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  formattedAddress: Scalars['String'];
  id: Scalars['ID'];
  postalCode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  /** Array of nodes. */
  nodes: Array<Address>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type AddressDeleteResponse = {
  __typename?: 'AddressDeleteResponse';
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['ID']>;
  countryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  formattedAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AddressFilter = {
  and?: InputMaybe<Array<AddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  city?: InputMaybe<AddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  country?: InputMaybe<AddressFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
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

export type AddressFilterCountryFilter = {
  and?: InputMaybe<Array<AddressFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AddressFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AddressSort = {
  direction: SortDirection;
  field: AddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AddressSortFields {
  Building = 'building',
  CityId = 'cityId',
  CountryId = 'countryId',
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** Array of nodes. */
  nodes: Array<Brand>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type BrandDeleteResponse = {
  __typename?: 'BrandDeleteResponse';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
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

export type CancelPaymentIntentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Cart = {
  __typename?: 'Cart';
  cartItems: Array<CartItem>;
  createdAt: Scalars['DateTime'];
  deliveryAddress?: Maybe<Address>;
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethod?: Maybe<DeliveryMethod>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPrice: Price;
  deliveryPriceId: Scalars['ID'];
  id: Scalars['ID'];
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  quantity: Scalars['Float'];
  subtotalPrice: Price;
  subtotalPriceId: Scalars['ID'];
  taxPrice: Price;
  taxPriceId: Scalars['ID'];
  totalPrice: Price;
  totalPriceId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};


export type CartCartItemsArgs = {
  filter?: CartItemFilter;
  sorting?: Array<CartItemSort>;
};

export type CartConnection = {
  __typename?: 'CartConnection';
  /** Array of nodes. */
  nodes: Array<Cart>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CartFilter = {
  and?: InputMaybe<Array<CartFilter>>;
  cartItems?: InputMaybe<CartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<CartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<CartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<CartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartFilter>>;
  paymentMethod?: InputMaybe<CartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<CartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<CartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<CartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<CartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type CartFilterAddressFilter = {
  and?: InputMaybe<Array<CartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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

export type CartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<CartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CartFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<CartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<CartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  price: Price;
  priceId: Scalars['ID'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CartItemConnection = {
  __typename?: 'CartItemConnection';
  /** Array of nodes. */
  nodes: Array<CartItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CartItemDeleteResponse = {
  __typename?: 'CartItemDeleteResponse';
  cartId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productVariantId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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

export type CartSort = {
  direction: SortDirection;
  field: CartSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CartSortFields {
  CreatedAt = 'createdAt',
  DeliveryAddressId = 'deliveryAddressId',
  DeliveryMethodId = 'deliveryMethodId',
  DeliveryPriceId = 'deliveryPriceId',
  Id = 'id',
  PaymentMethodId = 'paymentMethodId',
  Quantity = 'quantity',
  SubtotalPriceId = 'subtotalPriceId',
  TaxPriceId = 'taxPriceId',
  TotalPriceId = 'totalPriceId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CartUpdateFilter = {
  and?: InputMaybe<Array<CartUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CartUpdateFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export enum Categories {
  Blazers = 'BLAZERS',
  Coats = 'COATS',
  Dresses = 'DRESSES',
  Hoodies = 'HOODIES',
  Jeans = 'JEANS',
  Men = 'MEN',
  Pants = 'PANTS',
  Root = 'ROOT',
  Shirts = 'SHIRTS',
  Shorts = 'SHORTS',
  Skirts = 'SKIRTS',
  Sleepwear = 'SLEEPWEAR',
  Swimwear = 'SWIMWEAR',
  Tops = 'TOPS',
  TShirt = 'T_SHIRT',
  Women = 'WOMEN'
}

export type CategoriesFilterComparison = {
  eq?: InputMaybe<Categories>;
  gt?: InputMaybe<Categories>;
  gte?: InputMaybe<Categories>;
  iLike?: InputMaybe<Categories>;
  in?: InputMaybe<Array<Categories>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Categories>;
  lt?: InputMaybe<Categories>;
  lte?: InputMaybe<Categories>;
  neq?: InputMaybe<Categories>;
  notILike?: InputMaybe<Categories>;
  notIn?: InputMaybe<Array<Categories>>;
  notLike?: InputMaybe<Categories>;
};

export type Category = {
  __typename?: 'Category';
  children?: Maybe<Array<Category>>;
  code: Categories;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};


export type CategoryChildrenArgs = {
  filter?: CategoryFilter;
  sorting?: Array<CategorySort>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** Array of nodes. */
  nodes: Array<Category>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CategoryDeleteResponse = {
  __typename?: 'CategoryDeleteResponse';
  code?: Maybe<Categories>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryFilter = {
  and?: InputMaybe<Array<CategoryFilter>>;
  children?: InputMaybe<CategoryFilterCategoryFilter>;
  code?: InputMaybe<CategoriesFilterComparison>;
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
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CityConnection = {
  __typename?: 'CityConnection';
  /** Array of nodes. */
  nodes: Array<City>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CityDeleteResponse = {
  __typename?: 'CityDeleteResponse';
  countryId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  createdAt: Scalars['DateTime'];
  hex: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ColorConnection = {
  __typename?: 'ColorConnection';
  /** Array of nodes. */
  nodes: Array<Color>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ColorDeleteResponse = {
  __typename?: 'ColorDeleteResponse';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  hex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media: Array<Media>;
  product: Product;
  productId: Scalars['ID'];
  rating: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};


export type CommentMediaArgs = {
  filter?: MediaFilter;
  sorting?: Array<MediaSort>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** Array of nodes. */
  nodes: Array<Comment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CommentDeleteResponse = {
  __typename?: 'CommentDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
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
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<CommentFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type CommentFilterMediaFilter = {
  and?: InputMaybe<Array<CommentFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommentFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
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
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ConfirmPaymentIntentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type Country = {
  __typename?: 'Country';
  cities: Array<City>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CountryCitiesArgs = {
  filter?: CityFilter;
  sorting?: Array<CitySort>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  /** Array of nodes. */
  nodes: Array<Country>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type CountryDeleteResponse = {
  __typename?: 'CountryDeleteResponse';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  countryId: Scalars['String'];
  postalCode: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type CreateBrandInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateCartInput = {
  cartItems?: InputMaybe<Array<UpdateCartItemInput>>;
  deliveryAddressId?: InputMaybe<Scalars['String']>;
  deliveryMethodId?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['String']>;
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
  rating: Scalars['Float'];
  title: Scalars['String'];
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

export type CreateManyCartsInput = {
  /** Array of records to create */
  carts: Array<CreateCartInput>;
};

export type CreateOneAddressInput = {
  /** The record to create */
  address: CreateAddressInput;
};

export type CreateOneBrandInput = {
  /** The record to create */
  brand: CreateBrandInput;
};

export type CreateOneCartInput = {
  /** The record to create */
  cart: CreateCartInput;
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

export type CreateOneCommentInputType = {
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

export type CreateOnePromotionInput = {
  /** The record to create */
  promotion: CreatePromotionInput;
};

export type CreateOnePromotionProductInput = {
  /** The record to create */
  promotionProduct: CreatePromotionProductInput;
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

export type CreateOrderInput = {
  deliveryAddressId: Scalars['String'];
  deliveryMethodId: Scalars['String'];
  paymentIntentId: Scalars['String'];
  paymentMethodId: Scalars['String'];
  userId: Scalars['String'];
};

export type CreatePaymentIntentInput = {
  clientSecret: Scalars['String'];
  paymentMethodId: Scalars['ID'];
  price: CreatePriceInput;
};

export type CreatePaymentMethodInput = {
  code: PaymentMethods;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  online?: Scalars['Boolean'];
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

export type CreatePromotionInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  price: CreatePriceInput;
};

export type CreatePromotionProductInput = {
  productId: Scalars['String'];
  promotionId: Scalars['String'];
  promotionLengthInDays?: Scalars['Float'];
};

export type CreateRoleInput = {
  code: Roles;
  name: Scalars['String'];
  permissions?: Array<CreatePermissionInput>;
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
  passwordConfirmation: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
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

export type DeleteOnePromotionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePromotionProductInput = {
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Price;
  priceId: Scalars['ID'];
  status: DeliveryMethodStatus;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DeliveryMethodConnection = {
  __typename?: 'DeliveryMethodConnection';
  /** Array of nodes. */
  nodes: Array<DeliveryMethod>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type DeliveryMethodDeleteResponse = {
  __typename?: 'DeliveryMethodDeleteResponse';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  status?: Maybe<DeliveryMethodStatus>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  type?: InputMaybe<StringFieldComparison>;
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
  Type = 'type',
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

export type EmailAddress = {
  __typename?: 'EmailAddress';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type EmailAddressConfirmation = {
  __typename?: 'EmailAddressConfirmation';
  createdAt: Scalars['DateTime'];
  emailAddress: EmailAddress;
  emailAddressId: Scalars['ID'];
  id: Scalars['ID'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type EmailAddressConfirmationConnection = {
  __typename?: 'EmailAddressConfirmationConnection';
  /** Array of nodes. */
  nodes: Array<EmailAddressConfirmation>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  /** Array of nodes. */
  nodes: Array<EmailAddress>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type EmailAddressDeleteResponse = {
  __typename?: 'EmailAddressDeleteResponse';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
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
  phone?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type Media = {
  __typename?: 'Media';
  createdAt: Scalars['DateTime'];
  filename: Scalars['String'];
  format: MediaType;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  publicId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Float']>;
};

export type MediaConnection = {
  __typename?: 'MediaConnection';
  /** Array of nodes. */
  nodes: Array<Media>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type MediaDeleteResponse = {
  __typename?: 'MediaDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  format?: Maybe<MediaType>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  publicId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaFilter = {
  and?: InputMaybe<Array<MediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
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
  Height = 'height',
  Id = 'id',
  PublicId = 'publicId',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  Width = 'width'
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
  cancelOnePaymentIntent: PaymentIntent;
  cancelOrder: Order;
  cancelReservationForWarehouseItemsInWarehouse: Warehouse;
  completeOrder: Order;
  confirmEmail: EmailAddressConfirmation;
  confirmOnePaymentIntent: PaymentIntent;
  createManyCarts: Array<Cart>;
  createOneAddress: Address;
  createOneBrand: Brand;
  createOneCart: Cart;
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
  createOnePaymentIntent: PaymentIntent;
  createOnePaymentIntentFromCart: PaymentIntent;
  createOnePaymentMethod: PaymentMethod;
  createOnePermission: Permission;
  createOnePickupPoint: PickupPoint;
  createOnePrice: Price;
  createOneProduct: Product;
  createOneProductVariant: ProductVariant;
  createOnePromotion: Promotion;
  createOnePromotionProduct: PromotionProduct;
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
  deleteOnePromotion: PromotionDeleteResponse;
  deleteOnePromotionProduct: PromotionProductDeleteResponse;
  deleteOneRole: RoleDeleteResponse;
  deleteOneSize: SizeDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneUserAddress: UserAddressDeleteResponse;
  deleteOneWarehouse: WarehouseDeleteResponse;
  emptyCart: Cart;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  placeOrderFromUserCart: Array<Order>;
  reissueAccessToken: AccessTokenResponse;
  rejectOrder: Order;
  releaseWarehouseItemsInWarehouse: Warehouse;
  removeCartItemsFromCart: Cart;
  removeMediaFromProduct: Product;
  removeProductsFromWishlist: Wishlist;
  removeWarehouseItemsFromWarehouse: Warehouse;
  reserveWarehouseItemsInWarehouse: Warehouse;
  resetPassword: User;
  restoreOneUser: User;
  sendConfirmationEmail: EmailAddressConfirmation;
  setWarehouseItemsInWarehouse: Warehouse;
  signup: SignupResponse;
  signupAsPartner: SignupResponse;
  transferOrderToDelivery: Order;
  updateAvatar: User;
  updateManyCarts: UpdateManyResponse;
  updateOneAddress: Address;
  updateOneBrand: Brand;
  updateOneCart: Cart;
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
  updateOnePromotion: Promotion;
  updateOnePromotionProduct: PromotionProduct;
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


export type MutationCancelOnePaymentIntentArgs = {
  input: CancelPaymentIntentInput;
};


export type MutationCancelOrderArgs = {
  input: UpdateOrderInputType;
};


export type MutationCancelReservationForWarehouseItemsInWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
};


export type MutationCompleteOrderArgs = {
  input: UpdateOrderInputType;
};


export type MutationConfirmOnePaymentIntentArgs = {
  input: ConfirmPaymentIntentInput;
};


export type MutationCreateManyCartsArgs = {
  input: CreateManyCartsInput;
};


export type MutationCreateOneAddressArgs = {
  input: CreateOneAddressInput;
};


export type MutationCreateOneBrandArgs = {
  input: CreateOneBrandInput;
};


export type MutationCreateOneCartArgs = {
  input: CreateOneCartInput;
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
  files?: Array<Scalars['Upload']>;
  input: CreateOneCommentInputType;
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


export type MutationCreateOnePaymentIntentArgs = {
  input: CreateOnePaymentIntentInput;
};


export type MutationCreateOnePaymentMethodArgs = {
  file?: InputMaybe<Scalars['Upload']>;
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


export type MutationCreateOnePromotionArgs = {
  input: CreateOnePromotionInput;
};


export type MutationCreateOnePromotionProductArgs = {
  input: CreateOnePromotionProductInput;
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


export type MutationDeleteOnePromotionArgs = {
  input: DeleteOnePromotionInput;
};


export type MutationDeleteOnePromotionProductArgs = {
  input: DeleteOnePromotionProductInput;
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


export type MutationRejectOrderArgs = {
  input: UpdateOrderInputType;
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


export type MutationResetPasswordArgs = {
  input: ResetPasswordInputType;
};


export type MutationRestoreOneUserArgs = {
  input: Scalars['ID'];
};


export type MutationSetWarehouseItemsInWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
};


export type MutationSignupArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  input: SignupInput;
};


export type MutationSignupAsPartnerArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  input: SignupInput;
};


export type MutationTransferOrderToDeliveryArgs = {
  input: UpdateOrderInputType;
};


export type MutationUpdateAvatarArgs = {
  file: Scalars['Upload'];
  input: SelectUserInput;
};


export type MutationUpdateManyCartsArgs = {
  input: UpdateManyCartsInput;
};


export type MutationUpdateOneAddressArgs = {
  input: UpdateOneAddressInput;
};


export type MutationUpdateOneBrandArgs = {
  input: UpdateOneBrandInput;
};


export type MutationUpdateOneCartArgs = {
  input: UpdateOneCartInput;
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


export type MutationUpdateOnePromotionArgs = {
  input: UpdateOnePromotionInput;
};


export type MutationUpdateOnePromotionProductArgs = {
  input: UpdateOnePromotionProductInput;
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

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  deliveryAddress: Address;
  deliveryAddressId: Scalars['ID'];
  deliveryMethod: DeliveryMethod;
  deliveryMethodId: Scalars['ID'];
  deliveryPrice: Price;
  deliveryPriceId: Scalars['ID'];
  id: Scalars['ID'];
  orderHistories: Array<OrderHistory>;
  orderItems: Array<OrderItem>;
  paymentIntent?: Maybe<PaymentIntent>;
  paymentIntentId?: Maybe<Scalars['ID']>;
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['ID'];
  status: OrderStatus;
  subtotalPrice: Price;
  subtotalPriceId: Scalars['ID'];
  taxPrice: Price;
  taxPriceId: Scalars['ID'];
  totalPrice: Price;
  totalPriceId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};


export type OrderOrderHistoriesArgs = {
  filter?: OrderHistoryFilter;
  sorting?: Array<OrderHistorySort>;
};


export type OrderOrderItemsArgs = {
  filter?: OrderItemFilter;
  sorting?: Array<OrderItemSort>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Array of nodes. */
  nodes: Array<Order>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type OrderDeleteResponse = {
  __typename?: 'OrderDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentIntentId?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  status?: Maybe<OrderStatus>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
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
  orderHistories?: InputMaybe<OrderFilterOrderHistoryFilter>;
  orderItems?: InputMaybe<OrderFilterOrderItemFilter>;
  paymentIntent?: InputMaybe<OrderFilterPaymentIntentFilter>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
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
  city?: InputMaybe<OrderFilterAddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  country?: InputMaybe<OrderFilterAddressFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCityFilter>>;
  country?: InputMaybe<OrderFilterAddressFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCityFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterAddressFilterCityFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCityFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCityFilterCountryFilterCityFilter>>;
  country?: InputMaybe<OrderFilterAddressFilterCityFilterCountryFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCityFilterCountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCityFilterCountryFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCityFilterCountryFilterCityFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCityFilterCountryFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterAddressFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCountryFilterCityFilter>>;
  country?: InputMaybe<OrderFilterAddressFilterCountryFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCountryFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCountryFilterCityFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterAddressFilterCountryFilterCityFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCountryFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterAddressFilterCountryFilterCityFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterAddressFilterCountryFilterCityFilterCountryFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterAddressFilterCountryFilterCityFilterCountryFilterCityFilter>>;
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
  price?: InputMaybe<OrderFilterDeliveryMethodFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterDeliveryMethodFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterDeliveryMethodFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterDeliveryMethodFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilter>>;
  order?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilter>>;
  orderHistories?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>;
  orderItems?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>;
  paymentIntent?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
  paymentMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  city?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  country?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilter>>;
  country?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterAddressFilterCountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>>;
  price?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>>;
  order?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilter>>;
  orderHistories?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>;
  orderItems?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>;
  paymentIntent?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
  paymentMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>>;
  order?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariant?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouse?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilter>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilter>>;
  orderHistories?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>;
  orderItems?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter>;
  paymentIntent?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
  paymentMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterOrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilter>>;
  color?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilter>>;
  price?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilter = {
  address?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseItems?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>>;
  available?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  reserved?: InputMaybe<IntFieldComparison>;
  stock?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>>;
  paymentMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilter>>;
  avatar?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilter>;
  cart?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilter>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilter>>;
  cartItems?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilter>>;
  paymentMethod?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterCartItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterCartItemFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterCartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilter>>;
  permissions?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilterPermissionFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterRoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilter = {
  address?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterUserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilter>>;
  products?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderHistoryFilterOrderFilterUserFilterWishlistFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilter>>;
  order?: InputMaybe<OrderFilterOrderItemFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<OrderFilterOrderItemFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariant?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouse?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilter>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderItemFilterOrderFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilter>>;
  orderHistories?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>;
  orderItems?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilter>;
  paymentIntent?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
  paymentMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  city?: InputMaybe<OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  country?: InputMaybe<OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilter>>;
  country?: InputMaybe<OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterAddressFilterCountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>>;
  price?: InputMaybe<OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterDeliveryMethodFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>>;
  order?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilter>>;
  orderHistories?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>;
  orderItems?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>;
  paymentIntent?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
  paymentMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderHistoryFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterOrderItemFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentIntentFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderHistoryFilterOrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilter>>;
  order?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariant?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouse?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilter>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilter>>;
  orderHistories?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>;
  orderItems?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter>;
  paymentIntent?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
  paymentMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderHistoryFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterOrderItemFilter>>;
  orderId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterOrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilter>>;
  color?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilter>>;
  price?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilter = {
  address?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseItems?: InputMaybe<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>>;
  available?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  reserved?: InputMaybe<IntFieldComparison>;
  stock?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilter>>;
  paymentMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentIntentFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterOrderItemFilterOrderFilterPaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterPaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilter>>;
  avatar?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilter>;
  cart?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilter>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilter>>;
  cartItems?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilter>>;
  paymentMethod?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterCartItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterCartItemFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterCartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilter>>;
  permissions?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilterPermissionFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterRoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilter = {
  address?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterUserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilter>>;
  products?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterOrderFilterUserFilterWishlistFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilter>>;
  color?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilter>>;
  price?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilter>>;
  brand?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilter>;
  brandId?: InputMaybe<IdFilterComparison>;
  category?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilter>;
  categoryId?: InputMaybe<IdFilterComparison>;
  comments?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilter>>;
  productVariants?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilter>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilter>>;
  children?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilterCategoryFilter>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilter>>;
  parent?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilterCategoryFilter>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilterCategoryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilterCategoryFilter>>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCategoryFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterMediaFilter>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilter>>;
  product?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  rating?: InputMaybe<FloatFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterCommentFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilter>>;
  color?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilter>>;
  price?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterProductFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilter = {
  address?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterAddressFilter>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseItems?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>;
};

export type OrderFilterOrderItemFilterWarehouseFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  city?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  country?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilter>>;
  country?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterAddressFilterCountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>>;
  available?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilter>>;
  productVariant?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  reserved?: InputMaybe<IntFieldComparison>;
  stock?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouse?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilter>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilter>>;
  color?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilter>>;
  price?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilter = {
  address?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterAddressFilter>;
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseItems?: InputMaybe<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterWarehouseItemFilter>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterWarehouseItemFilter = {
  and?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterWarehouseItemFilter>>;
  available?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterOrderItemFilterWarehouseFilterWarehouseItemFilterWarehouseFilterWarehouseItemFilter>>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  reserved?: InputMaybe<IntFieldComparison>;
  stock?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  warehouseId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentIntentFilter>>;
  paymentMethod?: InputMaybe<OrderFilterPaymentIntentFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<OrderFilterPaymentIntentFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterPaymentIntentFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentIntentFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentIntentFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentIntentFilterPaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterPaymentIntentFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterPaymentIntentFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentIntentFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterPaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterPaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
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
  avatar?: InputMaybe<OrderFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<OrderFilterUserFilterBrandFilter>;
  cart?: InputMaybe<OrderFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<OrderFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<OrderFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<OrderFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<OrderFilterUserFilterWishlistFilter>;
};

export type OrderFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilter>>;
  avatar?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterBrandFilter>;
  cart?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterWishlistFilter>;
};

export type OrderFilterUserFilterBrandFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilter>>;
  cartItems?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilter>>;
  paymentMethod?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterCartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterCartFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterCartFilterCartItemFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterCartItemFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterCartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterCartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterCartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterCartFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterCartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterRoleFilter>>;
  permissions?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterRoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterRoleFilterPermissionFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterRoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterRoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterUserAddressFilter = {
  address?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterUserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterWishlistFilter>>;
  products?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterWishlistFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterBrandFilterUserFilterWishlistFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterWishlistFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterWishlistFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterWishlistFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterBrandFilterUserFilterWishlistFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterWishlistFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterBrandFilterUserFilterWishlistFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilter>>;
  cartItems?: InputMaybe<OrderFilterUserFilterCartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterUserFilterCartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterUserFilterCartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterUserFilterCartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilter>>;
  paymentMethod?: InputMaybe<OrderFilterUserFilterCartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<OrderFilterUserFilterCartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterUserFilterCartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterUserFilterCartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterCartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterCartFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  city?: InputMaybe<OrderFilterUserFilterCartFilterAddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  country?: InputMaybe<OrderFilterUserFilterCartFilterAddressFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterAddressFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCityFilter>>;
  country?: InputMaybe<OrderFilterUserFilterCartFilterAddressFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterAddressFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCityFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterAddressFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterUserFilterCartFilterAddressFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterAddressFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCountryFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterAddressFilterCountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterCartItemFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilter>>;
  price?: InputMaybe<OrderFilterUserFilterCartFilterCartItemFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariant?: InputMaybe<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilter>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterCartItemFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilter>>;
  color?: InputMaybe<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilter>>;
  price?: InputMaybe<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterCartItemFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterDeliveryMethodFilter>>;
  price?: InputMaybe<OrderFilterUserFilterCartFilterDeliveryMethodFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterDeliveryMethodFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterDeliveryMethodFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterDeliveryMethodFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterUserFilterCartFilterPaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterPaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterPaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterPaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterUserFilterCartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilter>>;
  avatar?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterBrandFilter>;
  cart?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterWishlistFilter>;
};

export type OrderFilterUserFilterCartFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilter>>;
  cartItems?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilter>>;
  paymentMethod?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterCartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterCartFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterCartFilterCartItemFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterCartItemFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterCartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterCartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterCartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterCartFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterCartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterRoleFilter>>;
  permissions?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterRoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterRoleFilterPermissionFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterRoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterRoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterUserAddressFilter = {
  address?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterUserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterUserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterUserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterUserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterUserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterUserAddressFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterUserAddressFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterUserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterWishlistFilter>>;
  products?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterWishlistFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterCartFilterUserFilterWishlistFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterWishlistFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterWishlistFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterWishlistFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterCartFilterUserFilterWishlistFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterWishlistFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterCartFilterUserFilterWishlistFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OrderFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterRoleFilter>>;
  permissions?: InputMaybe<OrderFilterUserFilterRoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterRoleFilterPermissionFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterRoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterRoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilter = {
  address?: InputMaybe<OrderFilterUserFilterUserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterUserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  city?: InputMaybe<OrderFilterUserFilterUserAddressFilterAddressFilterCityFilter>;
  cityId?: InputMaybe<IdFilterComparison>;
  country?: InputMaybe<OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterAddressFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCityFilter>>;
  country?: InputMaybe<OrderFilterUserFilterUserAddressFilterAddressFilterCityFilterCountryFilter>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterAddressFilterCityFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCityFilterCountryFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCityFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilter>>;
  cities?: InputMaybe<OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilterCityFilter>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilterCityFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilterCityFilter>>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterAddressFilterCountryFilterCityFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilter>>;
  avatar?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterBrandFilter>;
  cart?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilter>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilter>>;
  cartItems?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilter>>;
  paymentMethod?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterCartFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterCartFilterCartItemFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterCartItemFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterCartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterCartFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterCartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterRoleFilter>>;
  permissions?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterRoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterRoleFilterPermissionFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterRoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterRoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilter = {
  address?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterUserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilter>>;
  products?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterUserAddressFilterUserFilterWishlistFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilter>>;
  products?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilter>>;
  brand?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterBrandFilter>;
  brandId?: InputMaybe<IdFilterComparison>;
  category?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterCategoryFilter>;
  categoryId?: InputMaybe<IdFilterComparison>;
  comments?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterCommentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilter>>;
  productVariants?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilter>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterCategoryFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCategoryFilter>>;
  children?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterCategoryFilterCategoryFilter>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCategoryFilter>>;
  parent?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterCategoryFilterCategoryFilter>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterCategoryFilterCategoryFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCategoryFilterCategoryFilter>>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCategoryFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterCommentFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterMediaFilter>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilter>>;
  product?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  rating?: InputMaybe<FloatFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterCommentFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterCommentFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterCommentFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterCommentFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilter>>;
  color?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilter>>;
  price?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterProductFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilter>>;
  avatar?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterBrandFilter>;
  cart?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilter>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterBrandFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilter>>;
  cartItems?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterCartItemFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddress?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterAddressFilter>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethod?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterDeliveryMethodFilter>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPrice?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPriceFilter>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilter>>;
  paymentMethod?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPrice?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPriceFilter>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPrice?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPriceFilter>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPrice?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPriceFilter>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterCartFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterCartFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterCartFilterCartItemFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterCartItemFilter>>;
  cartId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterCartItemFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productVariantId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<IntFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterCartFilterDeliveryMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterDeliveryMethodFilter>>;
  avgDeliveryTimeInHours?: InputMaybe<IntFieldComparison>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterDeliveryMethodFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<DeliveryMethodStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterCartFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterCartFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterCartFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterCartFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterRoleFilter>>;
  permissions?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterRoleFilterPermissionFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterRoleFilterPermissionFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterRoleFilterPermissionFilter>>;
  conditions?: InputMaybe<JsonFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterRoleFilterPermissionFilter>>;
  subject?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilter = {
  address?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterAddressFilter>;
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterAddressFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterAddressFilter>>;
  building?: InputMaybe<StringFieldComparison>;
  cityId?: InputMaybe<IdFilterComparison>;
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterUserAddressFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilter>>;
  products?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterProductFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterUserFilter = {
  and?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterUserFilter>>;
  avatarId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilterUserFilterWishlistFilterUserFilterWishlistFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderHistory = {
  __typename?: 'OrderHistory';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderId: Scalars['ID'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime'];
};

export type OrderHistoryFilter = {
  and?: InputMaybe<Array<OrderHistoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderHistoryFilter>>;
  order?: InputMaybe<OrderHistoryFilterOrderFilter>;
  orderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderHistoryFilterOrderFilter = {
  and?: InputMaybe<Array<OrderHistoryFilterOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderHistoryFilterOrderFilter>>;
  paymentIntentId?: InputMaybe<IdFilterComparison>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type OrderHistorySort = {
  direction: SortDirection;
  field: OrderHistorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderHistorySortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  order: Order;
  orderId: Scalars['ID'];
  price: Price;
  priceId: Scalars['ID'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  warehouse: Warehouse;
  warehouseId: Scalars['ID'];
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
  paymentIntentId?: InputMaybe<IdFilterComparison>;
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
  stock?: InputMaybe<NumberFieldComparison>;
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
  PaymentIntentId = 'paymentIntentId',
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
  Paid = 'PAID',
  ReadyForShipping = 'READY_FOR_SHIPPING',
  Rejected = 'REJECTED',
  ReservedInWarehouse = 'RESERVED_IN_WAREHOUSE',
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  intentId: Scalars['String'];
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['ID'];
  price?: Maybe<Price>;
  priceId?: Maybe<Scalars['ID']>;
  status: PaymentIntentStatus;
  updatedAt: Scalars['DateTime'];
};

export type PaymentIntentConnection = {
  __typename?: 'PaymentIntentConnection';
  /** Array of nodes. */
  nodes: Array<PaymentIntent>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PaymentIntentDeleteResponse = {
  __typename?: 'PaymentIntentDeleteResponse';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  intentId?: Maybe<Scalars['String']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  status?: Maybe<PaymentIntentStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentIntentFilter = {
  and?: InputMaybe<Array<PaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PaymentIntentFilter>>;
  paymentMethod?: InputMaybe<PaymentIntentFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<PaymentIntentFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PaymentIntentFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<PaymentIntentFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PaymentIntentFilterPaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PaymentIntentFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<PaymentIntentFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentIntentFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  IntentId = 'intentId',
  PaymentMethodId = 'paymentMethodId',
  PriceId = 'priceId',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum PaymentIntentStatus {
  Canceled = 'CANCELED',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
  RequiresAction = 'REQUIRES_ACTION',
  RequiresCapture = 'REQUIRES_CAPTURE',
  RequiresConfirmation = 'REQUIRES_CONFIRMATION',
  RequiresPaymentMethod = 'REQUIRES_PAYMENT_METHOD',
  Succeeded = 'SUCCEEDED'
}

export type PaymentIntentStatusFilterComparison = {
  eq?: InputMaybe<PaymentIntentStatus>;
  gt?: InputMaybe<PaymentIntentStatus>;
  gte?: InputMaybe<PaymentIntentStatus>;
  iLike?: InputMaybe<PaymentIntentStatus>;
  in?: InputMaybe<Array<PaymentIntentStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<PaymentIntentStatus>;
  lt?: InputMaybe<PaymentIntentStatus>;
  lte?: InputMaybe<PaymentIntentStatus>;
  neq?: InputMaybe<PaymentIntentStatus>;
  notILike?: InputMaybe<PaymentIntentStatus>;
  notIn?: InputMaybe<Array<PaymentIntentStatus>>;
  notLike?: InputMaybe<PaymentIntentStatus>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  code: PaymentMethods;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media?: Maybe<Media>;
  name: Scalars['String'];
  online: Scalars['Boolean'];
  status: PaymentMethodStatus;
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethodConnection = {
  __typename?: 'PaymentMethodConnection';
  /** Array of nodes. */
  nodes: Array<PaymentMethod>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PaymentMethodDeleteResponse = {
  __typename?: 'PaymentMethodDeleteResponse';
  code?: Maybe<PaymentMethods>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PaymentMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentMethodFilter = {
  and?: InputMaybe<Array<PaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<PaymentMethodFilterMediaFilter>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PaymentMethodFilter>>;
  status?: InputMaybe<PaymentMethodStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PaymentMethodFilterMediaFilter = {
  and?: InputMaybe<Array<PaymentMethodFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentMethodFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type PaymentMethodSort = {
  direction: SortDirection;
  field: PaymentMethodSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PaymentMethodSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Online = 'online',
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
  Cash = 'CASH'
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subject: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  /** Array of nodes. */
  nodes: Array<Permission>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PermissionDeleteResponse = {
  __typename?: 'PermissionDeleteResponse';
  action?: Maybe<Actions>;
  conditions?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PickupPointConnection = {
  __typename?: 'PickupPointConnection';
  /** Array of nodes. */
  nodes: Array<PickupPoint>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PickupPointDeleteResponse = {
  __typename?: 'PickupPointDeleteResponse';
  addressId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  countryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PickupPointFilterAddressFilter>>;
  postalCode?: InputMaybe<StringFieldComparison>;
  state?: InputMaybe<StringFieldComparison>;
  street?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  createdAt: Scalars['DateTime'];
  currency: Currencies;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type PriceConnection = {
  __typename?: 'PriceConnection';
  /** Array of nodes. */
  nodes: Array<Price>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PriceDeleteResponse = {
  __typename?: 'PriceDeleteResponse';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Currencies>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type Product = {
  __typename?: 'Product';
  brand: Brand;
  brandId: Scalars['ID'];
  category: Category;
  categoryId: Scalars['ID'];
  colors: Array<Color>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  media: Array<Media>;
  productVariants: Array<ProductVariant>;
  sizes: Array<Size>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ProductCommentsArgs = {
  filter?: CommentFilter;
  sorting?: Array<CommentSort>;
};


export type ProductMediaArgs = {
  filter?: MediaFilter;
  sorting?: Array<MediaSort>;
};


export type ProductProductVariantsArgs = {
  filter?: ProductVariantFilter;
  sorting?: Array<ProductVariantSort>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type ProductDeleteResponse = {
  __typename?: 'ProductDeleteResponse';
  brandId?: Maybe<Scalars['ID']>;
  categoryId?: Maybe<Scalars['ID']>;
  colors?: Maybe<Array<Color>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  sizes?: Maybe<Array<Size>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  brand?: InputMaybe<ProductFilterBrandFilter>;
  brandId?: InputMaybe<IdFilterComparison>;
  category?: InputMaybe<ProductFilterCategoryFilter>;
  categoryId?: InputMaybe<IdFilterComparison>;
  comments?: InputMaybe<ProductFilterCommentFilter>;
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
  user?: InputMaybe<ProductFilterBrandFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterBrandFilterUserFilter = {
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilter>>;
  avatar?: InputMaybe<ProductFilterBrandFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<ProductFilterBrandFilterUserFilterBrandFilter>;
  cart?: InputMaybe<ProductFilterBrandFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<ProductFilterBrandFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<ProductFilterBrandFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<ProductFilterBrandFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<ProductFilterBrandFilterUserFilterWishlistFilter>;
};

export type ProductFilterBrandFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterBrandFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilterCartFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilterCartFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterBrandFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type ProductFilterBrandFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type ProductFilterBrandFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilterRoleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterBrandFilterUserFilterUserAddressFilter = {
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterBrandFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<ProductFilterBrandFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterBrandFilterUserFilterWishlistFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterCategoryFilter>>;
  children?: InputMaybe<ProductFilterCategoryFilterCategoryFilter>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCategoryFilter>>;
  parent?: InputMaybe<ProductFilterCategoryFilterCategoryFilter>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterCategoryFilterCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterCategoryFilterCategoryFilter>>;
  children?: InputMaybe<ProductFilterCategoryFilterCategoryFilterCategoryFilter>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCategoryFilterCategoryFilter>>;
  parent?: InputMaybe<ProductFilterCategoryFilterCategoryFilterCategoryFilter>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterCategoryFilterCategoryFilterCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterCategoryFilterCategoryFilterCategoryFilter>>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCategoryFilterCategoryFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterCommentFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  media?: InputMaybe<ProductFilterCommentFilterMediaFilter>;
  or?: InputMaybe<Array<ProductFilterCommentFilter>>;
  product?: InputMaybe<ProductFilterCommentFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  rating?: InputMaybe<FloatFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<ProductFilterCommentFilterUserFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCommentFilterMediaFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type ProductFilterCommentFilterProductFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterProductFilter>>;
  brand?: InputMaybe<ProductFilterCommentFilterProductFilterBrandFilter>;
  brandId?: InputMaybe<IdFilterComparison>;
  category?: InputMaybe<ProductFilterCommentFilterProductFilterCategoryFilter>;
  categoryId?: InputMaybe<IdFilterComparison>;
  comments?: InputMaybe<ProductFilterCommentFilterProductFilterCommentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterProductFilter>>;
  productVariants?: InputMaybe<ProductFilterCommentFilterProductFilterProductVariantFilter>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterCommentFilterProductFilterBrandFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterProductFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterProductFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCommentFilterProductFilterCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterProductFilterCategoryFilter>>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterProductFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterCommentFilterProductFilterCommentFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterProductFilterCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterProductFilterCommentFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  rating?: InputMaybe<FloatFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCommentFilterProductFilterProductVariantFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterProductFilterProductVariantFilter>>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterProductFilterProductVariantFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterCommentFilterUserFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilter>>;
  avatar?: InputMaybe<ProductFilterCommentFilterUserFilterMediaFilter>;
  avatarId?: InputMaybe<IdFilterComparison>;
  brands?: InputMaybe<ProductFilterCommentFilterUserFilterBrandFilter>;
  cart?: InputMaybe<ProductFilterCommentFilterUserFilterCartFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  emailAddress?: InputMaybe<ProductFilterCommentFilterUserFilterEmailAddressFilter>;
  emailAddressId?: InputMaybe<IdFilterComparison>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  roles?: InputMaybe<ProductFilterCommentFilterUserFilterRoleFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userAddresses?: InputMaybe<ProductFilterCommentFilterUserFilterUserAddressFilter>;
  wishlist?: InputMaybe<ProductFilterCommentFilterUserFilterWishlistFilter>;
};

export type ProductFilterCommentFilterUserFilterBrandFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCommentFilterUserFilterCartFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilterCartFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilterCartFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCommentFilterUserFilterEmailAddressFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilterEmailAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilterEmailAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  verified?: InputMaybe<BooleanFieldComparison>;
};

export type ProductFilterCommentFilterUserFilterMediaFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilterMediaFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  filename?: InputMaybe<StringFieldComparison>;
  format?: InputMaybe<MediaTypeFilterComparison>;
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type ProductFilterCommentFilterUserFilterRoleFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilterRoleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterCommentFilterUserFilterUserAddressFilter = {
  addressId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilterUserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilterUserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterCommentFilterUserFilterWishlistFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilterUserFilterWishlistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilterUserFilterWishlistFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterProductVariantFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilter>>;
  color?: InputMaybe<ProductFilterProductVariantFilterColorFilter>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilter>>;
  price?: InputMaybe<ProductFilterProductVariantFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  product?: InputMaybe<ProductFilterProductVariantFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  size?: InputMaybe<ProductFilterProductVariantFilterSizeFilter>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilterColorFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilterColorFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  hex?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterColorFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ProductFilterProductVariantFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilterProductFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilter>>;
  brand?: InputMaybe<ProductFilterProductVariantFilterProductFilterBrandFilter>;
  brandId?: InputMaybe<IdFilterComparison>;
  category?: InputMaybe<ProductFilterProductVariantFilterProductFilterCategoryFilter>;
  categoryId?: InputMaybe<IdFilterComparison>;
  comments?: InputMaybe<ProductFilterProductVariantFilterProductFilterCommentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilter>>;
  productVariants?: InputMaybe<ProductFilterProductVariantFilterProductFilterProductVariantFilter>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilterProductFilterBrandFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterBrandFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterBrandFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterProductVariantFilterProductFilterCategoryFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterCategoryFilter>>;
  code?: InputMaybe<CategoriesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilterProductFilterCommentFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterCommentFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  rating?: InputMaybe<FloatFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProductFilterProductVariantFilterProductFilterProductVariantFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterProductVariantFilter>>;
  colorId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterProductFilterProductVariantFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  productId?: InputMaybe<IdFilterComparison>;
  sizeId?: InputMaybe<IdFilterComparison>;
  sku?: InputMaybe<IdFilterComparison>;
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilterSizeFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilterSizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  price: Price;
  priceId: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  size: Size;
  sizeId: Scalars['ID'];
  sku: Scalars['ID'];
  stock: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** Array of edges. */
  edges: Array<ProductVariantEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductVariantDeleteResponse = {
  __typename?: 'ProductVariantDeleteResponse';
  colorId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  sizeId?: Maybe<Scalars['ID']>;
  sku?: Maybe<Scalars['ID']>;
  stock?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  stock?: InputMaybe<NumberFieldComparison>;
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
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductVariantFilterSizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  Stock = 'stock',
  UpdatedAt = 'updatedAt'
}

export type Promotion = {
  __typename?: 'Promotion';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Price;
  priceId: Scalars['ID'];
  products: Array<PromotionProduct>;
  updatedAt: Scalars['DateTime'];
};


export type PromotionProductsArgs = {
  filter?: PromotionProductFilter;
  sorting?: Array<PromotionProductSort>;
};

export type PromotionConnection = {
  __typename?: 'PromotionConnection';
  /** Array of nodes. */
  nodes: Array<Promotion>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type PromotionDeleteResponse = {
  __typename?: 'PromotionDeleteResponse';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionFilter = {
  and?: InputMaybe<Array<PromotionFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PromotionFilter>>;
  price?: InputMaybe<PromotionFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
  products?: InputMaybe<PromotionFilterPromotionProductFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionFilterPriceFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<PromotionFilterPriceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<CurrenciesFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PromotionFilterPriceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionFilterPromotionProductFilter = {
  and?: InputMaybe<Array<PromotionFilterPromotionProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  expireAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PromotionFilterPromotionProductFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  promotionId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  valid?: InputMaybe<BooleanFieldComparison>;
};

export type PromotionProduct = {
  __typename?: 'PromotionProduct';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  paymentIntent: PaymentIntent;
  product: Product;
  productId: Scalars['ID'];
  promotion: Promotion;
  promotionId: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  valid: Scalars['Boolean'];
};

export type PromotionProductConnection = {
  __typename?: 'PromotionProductConnection';
  /** Array of edges. */
  edges: Array<PromotionProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PromotionProductDeleteResponse = {
  __typename?: 'PromotionProductDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  promotionId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  valid?: Maybe<Scalars['Boolean']>;
};

export type PromotionProductEdge = {
  __typename?: 'PromotionProductEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PromotionProduct */
  node: PromotionProduct;
};

export type PromotionProductFilter = {
  and?: InputMaybe<Array<PromotionProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  expireAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PromotionProductFilter>>;
  paymentIntent?: InputMaybe<PromotionProductFilterPaymentIntentFilter>;
  product?: InputMaybe<PromotionProductFilterProductFilter>;
  productId?: InputMaybe<IdFilterComparison>;
  promotion?: InputMaybe<PromotionProductFilterPromotionFilter>;
  promotionId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  valid?: InputMaybe<BooleanFieldComparison>;
};

export type PromotionProductFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<PromotionProductFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  intentId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PromotionProductFilterPaymentIntentFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<PaymentIntentStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionProductFilterProductFilter = {
  and?: InputMaybe<Array<PromotionProductFilterProductFilter>>;
  brandId?: InputMaybe<IdFilterComparison>;
  categoryId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PromotionProductFilterProductFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionProductFilterPromotionFilter = {
  and?: InputMaybe<Array<PromotionProductFilterPromotionFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<PromotionProductFilterPromotionFilter>>;
  priceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PromotionProductSort = {
  direction: SortDirection;
  field: PromotionProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PromotionProductSortFields {
  CreatedAt = 'createdAt',
  ExpireAt = 'expireAt',
  Id = 'id',
  ProductId = 'productId',
  PromotionId = 'promotionId',
  UpdatedAt = 'updatedAt',
  Valid = 'valid'
}

export type PromotionSort = {
  direction: SortDirection;
  field: PromotionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PromotionSortFields {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  PriceId = 'priceId',
  UpdatedAt = 'updatedAt'
}

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: AddressConnection;
  brand: Brand;
  brands: BrandConnection;
  cart: Cart;
  cartItem: CartItem;
  cartItems: CartItemConnection;
  carts: CartConnection;
  categories: CategoryConnection;
  category: Category;
  categoryTree: Array<Category>;
  cities: CityConnection;
  city: City;
  color: Color;
  colors: ColorConnection;
  comment: Comment;
  comments: CommentConnection;
  countries: CountryConnection;
  country: Country;
  deliveryMethod: DeliveryMethod;
  deliveryMethods: DeliveryMethodConnection;
  emailAddress: EmailAddress;
  emailAddressConfirmation: EmailAddressConfirmation;
  emailAddressConfirmations: EmailAddressConfirmationConnection;
  emailAddresses: EmailAddressConnection;
  healthCheckRedis: Scalars['Boolean'];
  me?: Maybe<User>;
  media: MediaConnection;
  myCart: Cart;
  myWishlist: Wishlist;
  order: Order;
  orders: OrderConnection;
  paymentIntent: PaymentIntent;
  paymentIntents: PaymentIntentConnection;
  paymentMethod: PaymentMethod;
  paymentMethods: PaymentMethodConnection;
  permission: Permission;
  permissions: PermissionConnection;
  pickupPoint: PickupPoint;
  pickupPoints: PickupPointConnection;
  price: Price;
  prices: PriceConnection;
  product: Product;
  productVariant: ProductVariant;
  productVariants: ProductVariantConnection;
  products: ProductConnection;
  promotion: Promotion;
  promotionProduct: PromotionProduct;
  promotionProducts: PromotionProductConnection;
  promotions: PromotionConnection;
  role: Role;
  roles: RoleConnection;
  size: Size;
  sizes: SizeConnection;
  user: User;
  userAddress: UserAddress;
  userAddresses: UserAddressConnection;
  users: UserConnection;
  warehouse: Warehouse;
  warehouseItem: WarehouseItem;
  warehouses: WarehouseConnection;
};


export type QueryAddressArgs = {
  id: Scalars['ID'];
};


export type QueryAddressesArgs = {
  filter?: AddressFilter;
  paging?: OffsetPaging;
  sorting?: Array<AddressSort>;
};


export type QueryBrandArgs = {
  id: Scalars['ID'];
};


export type QueryBrandsArgs = {
  filter?: BrandFilter;
  paging?: OffsetPaging;
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
  paging?: OffsetPaging;
  sorting?: Array<CartItemSort>;
};


export type QueryCartsArgs = {
  filter?: CartFilter;
  paging?: OffsetPaging;
  sorting?: Array<CartSort>;
};


export type QueryCategoriesArgs = {
  filter?: CategoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<CategorySort>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryCitiesArgs = {
  filter?: CityFilter;
  paging?: OffsetPaging;
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
  paging?: OffsetPaging;
  sorting?: Array<ColorSort>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  filter?: CommentFilter;
  paging?: OffsetPaging;
  sorting?: Array<CommentSort>;
};


export type QueryCountriesArgs = {
  filter?: CountryFilter;
  paging?: OffsetPaging;
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
  paging?: OffsetPaging;
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
  paging?: OffsetPaging;
  sorting?: Array<EmailAddressConfirmationSort>;
};


export type QueryEmailAddressesArgs = {
  filter?: EmailAddressFilter;
  paging?: OffsetPaging;
  sorting?: Array<EmailAddressSort>;
};


export type QueryMediaArgs = {
  filter?: MediaFilter;
  paging?: OffsetPaging;
  sorting?: Array<MediaSort>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersArgs = {
  filter?: OrderFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrderSort>;
};


export type QueryPaymentIntentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentIntentsArgs = {
  filter?: PaymentIntentFilter;
  paging?: OffsetPaging;
  sorting?: Array<PaymentIntentSort>;
};


export type QueryPaymentMethodArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentMethodsArgs = {
  filter?: PaymentMethodFilter;
  paging?: OffsetPaging;
  sorting?: Array<PaymentMethodSort>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionsArgs = {
  filter?: PermissionFilter;
  paging?: OffsetPaging;
  sorting?: Array<PermissionSort>;
};


export type QueryPickupPointArgs = {
  id: Scalars['ID'];
};


export type QueryPickupPointsArgs = {
  filter?: PickupPointFilter;
  paging?: OffsetPaging;
  sorting?: Array<PickupPointSort>;
};


export type QueryPriceArgs = {
  id: Scalars['ID'];
};


export type QueryPricesArgs = {
  filter?: PriceFilter;
  paging?: OffsetPaging;
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
  paging?: OffsetPaging;
  sorting?: Array<ProductSort>;
};


export type QueryPromotionArgs = {
  id: Scalars['ID'];
};


export type QueryPromotionProductArgs = {
  id: Scalars['ID'];
};


export type QueryPromotionProductsArgs = {
  filter?: PromotionProductFilter;
  paging?: CursorPaging;
  sorting?: Array<PromotionProductSort>;
};


export type QueryPromotionsArgs = {
  filter?: PromotionFilter;
  paging?: OffsetPaging;
  sorting?: Array<PromotionSort>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: RoleFilter;
  paging?: OffsetPaging;
  sorting?: Array<RoleSort>;
};


export type QuerySizeArgs = {
  id: Scalars['ID'];
};


export type QuerySizesArgs = {
  filter?: SizeFilter;
  paging?: OffsetPaging;
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
  paging?: OffsetPaging;
  sorting?: Array<UserAddressSort>;
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID'];
};


export type QueryWarehouseItemArgs = {
  input: ReadWarehouseItemInput;
};


export type QueryWarehousesArgs = {
  filter?: WarehouseFilter;
  paging?: OffsetPaging;
  sorting?: Array<WarehouseSort>;
};

export type ReadWarehouseItemInput = {
  productVariantId: Scalars['ID'];
  warehouseId: Scalars['ID'];
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

export type ResetPassword = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type ResetPasswordInputType = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ResetPassword;
};

export type Role = {
  __typename?: 'Role';
  code: Roles;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime'];
};


export type RolePermissionsArgs = {
  filter?: PermissionFilter;
  sorting?: Array<PermissionSort>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** Array of nodes. */
  nodes: Array<Role>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type RoleDeleteResponse = {
  __typename?: 'RoleDeleteResponse';
  code?: Maybe<Roles>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  passwordConfirmation?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type SignupResponse = {
  __typename?: 'SignupResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: User;
};

export type Size = {
  __typename?: 'Size';
  code: Sizes;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  priority: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type SizeConnection = {
  __typename?: 'SizeConnection';
  /** Array of nodes. */
  nodes: Array<Size>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type SizeDeleteResponse = {
  __typename?: 'SizeDeleteResponse';
  code?: Maybe<Sizes>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SizeFilter = {
  and?: InputMaybe<Array<SizeFilter>>;
  code?: InputMaybe<SizesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SizeFilter>>;
  priority?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  Priority = 'priority',
  UpdatedAt = 'updatedAt'
}

export enum Sizes {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'Xl',
  Xs = 'Xs',
  Xxl = 'Xxl',
  Xxs = 'Xxs',
  Xxxl = 'Xxxl'
}

export type SizesFilterComparison = {
  eq?: InputMaybe<Sizes>;
  gt?: InputMaybe<Sizes>;
  gte?: InputMaybe<Sizes>;
  iLike?: InputMaybe<Sizes>;
  in?: InputMaybe<Array<Sizes>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Sizes>;
  lt?: InputMaybe<Sizes>;
  lte?: InputMaybe<Sizes>;
  neq?: InputMaybe<Sizes>;
  notILike?: InputMaybe<Sizes>;
  notIn?: InputMaybe<Array<Sizes>>;
  notLike?: InputMaybe<Sizes>;
};

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
  countryId?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
};

export type UpdateBrandInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCartInput = {
  cartItems?: InputMaybe<Array<UpdateCartItemInput>>;
  deliveryAddressId?: InputMaybe<Scalars['String']>;
  deliveryMethodId?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['String']>;
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
  rating?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
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

export type UpdateManyCartsInput = {
  /** Filter used to find fields to update */
  filter: CartUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCartInput;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
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

export type UpdateOneCartInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCartInput;
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

export type UpdateOnePromotionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePromotionInput;
};

export type UpdateOnePromotionProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePromotionProductInput;
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
  deliveryAddressId?: InputMaybe<Scalars['String']>;
  deliveryMethodId?: InputMaybe<Scalars['String']>;
  paymentIntentId?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInputType = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type UpdatePaymentIntentInput = {
  clientSecret?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<CreatePriceInput>;
};

export type UpdatePaymentMethodInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  online?: InputMaybe<Scalars['Boolean']>;
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

export type UpdatePromotionInput = {
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<CreatePriceInput>;
};

export type UpdatePromotionProductInput = {
  promotionLengthInDays?: InputMaybe<Scalars['Float']>;
};

export type UpdateRoleInput = {
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<CreatePermissionInput>>;
};

export type UpdateSizeInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserAddressInput = {
  address?: InputMaybe<CreateAddressInput>;
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
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
  createdAt: Scalars['DateTime'];
  emailAddress: EmailAddress;
  emailAddressId: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  permissions: Array<Permission>;
  phone?: Maybe<Scalars['String']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
  userAddresses: Array<UserAddress>;
  wishlist: Wishlist;
};


export type UserBrandsArgs = {
  filter?: BrandFilter;
  sorting?: Array<BrandSort>;
};


export type UserRolesArgs = {
  filter?: RoleFilter;
  sorting?: Array<RoleSort>;
};


export type UserUserAddressesArgs = {
  filter?: UserAddressFilter;
  sorting?: Array<UserAddressSort>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  address: Address;
  addressId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  /** Array of nodes. */
  nodes: Array<UserAddress>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserAddressDeleteResponse = {
  __typename?: 'UserAddressDeleteResponse';
  addressId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
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
  countryId?: InputMaybe<IdFilterComparison>;
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

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  avatarId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  emailAddressId?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permission>>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  roles?: InputMaybe<UserFilterRoleFilter>;
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
  deliveryAddressId?: InputMaybe<IdFilterComparison>;
  deliveryMethodId?: InputMaybe<IdFilterComparison>;
  deliveryPriceId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterCartFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  quantity?: InputMaybe<NumberFieldComparison>;
  subtotalPriceId?: InputMaybe<IdFilterComparison>;
  taxPriceId?: InputMaybe<IdFilterComparison>;
  totalPriceId?: InputMaybe<IdFilterComparison>;
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
  height?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterMediaFilter>>;
  publicId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  url?: InputMaybe<StringFieldComparison>;
  width?: InputMaybe<NumberFieldComparison>;
};

export type UserFilterRoleFilter = {
  and?: InputMaybe<Array<UserFilterRoleFilter>>;
  code?: InputMaybe<RolesFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterRoleFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  warehouseItems: Array<WarehouseItem>;
};


export type WarehouseWarehouseItemsArgs = {
  filter?: WarehouseItemFilter;
  sorting?: Array<WarehouseItemSort>;
};

export type WarehouseConnection = {
  __typename?: 'WarehouseConnection';
  /** Array of nodes. */
  nodes: Array<Warehouse>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type WarehouseDeleteResponse = {
  __typename?: 'WarehouseDeleteResponse';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  countryId?: InputMaybe<IdFilterComparison>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  reserved: Scalars['Int'];
  stock: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  warehouse: Warehouse;
  warehouseId: Scalars['ID'];
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
  warehouse?: InputMaybe<WarehouseItemFilterWarehouseFilter>;
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
  stock?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type WarehouseItemFilterWarehouseFilter = {
  and?: InputMaybe<Array<WarehouseItemFilterWarehouseFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<WarehouseItemFilterWarehouseFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
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

export type WarehouseItemsInput = {
  productVariantId: Scalars['String'];
  quantity?: Scalars['Float'];
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};


export type WishlistProductsArgs = {
  filter?: ProductFilter;
  sorting?: Array<ProductSort>;
};

export type WishlistEdge = {
  __typename?: 'WishlistEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Wishlist */
  node: Wishlist;
};

export type AddressFragment = { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } };

export type BrandFragment = { __typename?: 'Brand', id: string, code: string, name: string };

export type CartFragment = { __typename?: 'Cart', id: string, paymentMethodId?: string | null, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> };

export type CartItemFragment = { __typename?: 'CartItem', id: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } };

export type CategoryFragment = { __typename?: 'Category', id: string, code: Categories, name: string, description?: string | null, parentId?: string | null };

export type CityFragment = { __typename?: 'City', id: string, name: string };

export type ColorFragment = { __typename?: 'Color', id: string, code: string, name: string, hex: string };

export type CommentFragment = { __typename?: 'Comment', id: string, title: string, description?: string | null, rating: number, createdAt: any, user: { __typename?: 'User', fullName: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> };

export type CountryFragment = { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> };

export type DeliveryMethodFragment = { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } };

export type EmailAddressFragment = { __typename?: 'EmailAddress', id: string, address: string, name?: string | null };

export type MediaFragment = { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null };

export type OrderFragment = { __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> };

export type OrderHistoryFragment = { __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any };

export type OrderItemFragment = { __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } };

export type PaymentIntentFragment = { __typename?: 'PaymentIntent', id: string, clientSecret: string, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, price?: { __typename?: 'Price', id: string, amount: number, currency: Currencies } | null };

export type PaymentMethodFragment = { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null };

export type PermissionFragment = { __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null };

export type PriceFragment = { __typename?: 'Price', id: string, amount: number, currency: Currencies };

export type ProductFragment = { __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> };

export type ProductPartialFragment = { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> };

export type ProductVariantFragment = { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } };

export type RoleFragment = { __typename?: 'Role', id: string, code: Roles, name: string };

export type SizeFragment = { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any };

export type UserFragment = { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> };

export type UserAddressFragment = { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } };

export type WarehouseFragment = { __typename?: 'Warehouse', id: string, code: string, name: string, status: string, warehouseItems: Array<{ __typename?: 'WarehouseItem', id: string, stock: number, reserved: number, available: number, warehouseId: string, productVariantId: string, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> };

export type WarehouseItemFragment = { __typename?: 'WarehouseItem', id: string, stock: number, reserved: number, available: number, warehouseId: string, productVariantId: string, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } };

export type WishlistFragment = { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> }> };

export type AddCartItemsToCartMutationVariables = Exact<{
  input: UpdateOneCartInputType;
}>;


export type AddCartItemsToCartMutation = { __typename?: 'Mutation', addCartItemsToCart: { __typename?: 'Cart', id: string, paymentMethodId?: string | null, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> } };

export type AddProductsToWishlistMutationVariables = Exact<{
  input: AddProductsToWishlistInputType;
}>;


export type AddProductsToWishlistMutation = { __typename?: 'Mutation', addProductsToWishlist: { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> }> } };

export type CancelOnePaymentIntentMutationVariables = Exact<{
  input: CancelPaymentIntentInput;
}>;


export type CancelOnePaymentIntentMutation = { __typename?: 'Mutation', cancelOnePaymentIntent: { __typename?: 'PaymentIntent', id: string, clientSecret: string, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, price?: { __typename?: 'Price', id: string, amount: number, currency: Currencies } | null } };

export type CancelOrderMutationVariables = Exact<{
  input: UpdateOrderInputType;
}>;


export type CancelOrderMutation = { __typename?: 'Mutation', cancelOrder: { __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> } };

export type CompleteOrderMutationVariables = Exact<{
  input: UpdateOrderInputType;
}>;


export type CompleteOrderMutation = { __typename?: 'Mutation', completeOrder: { __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> } };

export type CreateOneCommentMutationVariables = Exact<{
  input: CreateOneCommentInputType;
  files?: InputMaybe<Array<Scalars['Upload']> | Scalars['Upload']>;
}>;


export type CreateOneCommentMutation = { __typename?: 'Mutation', createOneComment: { __typename?: 'Comment', id: string, title: string, description?: string | null, rating: number, createdAt: any, user: { __typename?: 'User', fullName: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> } };

export type CreateOneAddressMutationVariables = Exact<{
  input: CreateOneAddressInput;
}>;


export type CreateOneAddressMutation = { __typename?: 'Mutation', createOneAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } };

export type CreateOneBrandMutationVariables = Exact<{
  input: CreateOneBrandInput;
}>;


export type CreateOneBrandMutation = { __typename?: 'Mutation', createOneBrand: { __typename?: 'Brand', id: string, code: string, name: string } };

export type CreateOnePaymentIntentFromCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateOnePaymentIntentFromCartMutation = { __typename?: 'Mutation', createOnePaymentIntentFromCart: { __typename?: 'PaymentIntent', id: string, clientSecret: string, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, price?: { __typename?: 'Price', id: string, amount: number, currency: Currencies } | null } };

export type CreateOneProductMutationVariables = Exact<{
  input: CreateOneProductInputType;
  files?: InputMaybe<Array<Scalars['Upload']> | Scalars['Upload']>;
}>;


export type CreateOneProductMutation = { __typename?: 'Mutation', createOneProduct: { __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> } };

export type CreateOneUserAddressMutationVariables = Exact<{
  input: CreateOneUserAddressInput;
}>;


export type CreateOneUserAddressMutation = { __typename?: 'Mutation', createOneUserAddress: { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } } };

export type DeleteOneBrandMutationVariables = Exact<{
  input: DeleteOneBrandInput;
}>;


export type DeleteOneBrandMutation = { __typename?: 'Mutation', deleteOneBrand: { __typename?: 'BrandDeleteResponse', id?: string | null } };

export type DeleteOneProductMutationVariables = Exact<{
  input: DeleteOneProductInput;
}>;


export type DeleteOneProductMutation = { __typename?: 'Mutation', deleteOneProduct: { __typename?: 'ProductDeleteResponse', id?: string | null } };

export type DeleteOneProductVariantMutationVariables = Exact<{
  input: DeleteOneProductVariantInput;
}>;


export type DeleteOneProductVariantMutation = { __typename?: 'Mutation', deleteOneProductVariant: { __typename?: 'ProductVariantDeleteResponse', id?: string | null, sku?: string | null } };

export type DeleteOneUserAddressMutationVariables = Exact<{
  input: DeleteOneUserAddressInput;
}>;


export type DeleteOneUserAddressMutation = { __typename?: 'Mutation', deleteOneUserAddress: { __typename?: 'UserAddressDeleteResponse', id?: string | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type PlaceOrderFromUserCartMutationVariables = Exact<{ [key: string]: never; }>;


export type PlaceOrderFromUserCartMutation = { __typename?: 'Mutation', placeOrderFromUserCart: Array<{ __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> }> };

export type ReissueAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type ReissueAccessTokenMutation = { __typename?: 'Mutation', reissueAccessToken: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type RejectOrderMutationVariables = Exact<{
  input: UpdateOrderInputType;
}>;


export type RejectOrderMutation = { __typename?: 'Mutation', rejectOrder: { __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> } };

export type RemoveCartItemsFromCartMutationVariables = Exact<{
  input: UpdateOneCartInputType;
}>;


export type RemoveCartItemsFromCartMutation = { __typename?: 'Mutation', removeCartItemsFromCart: { __typename?: 'Cart', id: string, paymentMethodId?: string | null, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> } };

export type RemoveProductsFromWishlistMutationVariables = Exact<{
  input: RemoveProductsFromWishlistInputType;
}>;


export type RemoveProductsFromWishlistMutation = { __typename?: 'Mutation', removeProductsFromWishlist: { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> }> } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInputType;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } };

export type SetWarehouseItemsInWarehouseMutationVariables = Exact<{
  input: UpdateOneWarehouseInputType;
}>;


export type SetWarehouseItemsInWarehouseMutation = { __typename?: 'Mutation', setWarehouseItemsInWarehouse: { __typename?: 'Warehouse', id: string, code: string, name: string, status: string, warehouseItems: Array<{ __typename?: 'WarehouseItem', id: string, stock: number, reserved: number, available: number, warehouseId: string, productVariantId: string, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'SignupResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } } };

export type SignupAsPartnerMutationVariables = Exact<{
  input: SignupInput;
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type SignupAsPartnerMutation = { __typename?: 'Mutation', signupAsPartner: { __typename?: 'SignupResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } } };

export type TransferOrderToDeliveryMutationVariables = Exact<{
  input: UpdateOrderInputType;
}>;


export type TransferOrderToDeliveryMutation = { __typename?: 'Mutation', transferOrderToDelivery: { __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> } };

export type UpdateAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
  input: SelectUserInput;
}>;


export type UpdateAvatarMutation = { __typename?: 'Mutation', updateAvatar: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } };

export type UpdateOneCommentMutationVariables = Exact<{
  input: UpdateOneCommentInput;
}>;


export type UpdateOneCommentMutation = { __typename?: 'Mutation', updateOneComment: { __typename?: 'Comment', id: string, title: string, description?: string | null, rating: number, createdAt: any, user: { __typename?: 'User', fullName: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> } };

export type UpdateOneBrandMutationVariables = Exact<{
  input: UpdateOneBrandInput;
}>;


export type UpdateOneBrandMutation = { __typename?: 'Mutation', updateOneBrand: { __typename?: 'Brand', id: string, code: string, name: string } };

export type UpdateOneCartMutationVariables = Exact<{
  input: UpdateOneCartInput;
}>;


export type UpdateOneCartMutation = { __typename?: 'Mutation', updateOneCart: { __typename?: 'Cart', id: string, paymentMethodId?: string | null, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> } };

export type UpdateOneOrderMutationVariables = Exact<{
  input: UpdateOneOrderInput;
}>;


export type UpdateOneOrderMutation = { __typename?: 'Mutation', updateOneOrder: { __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> } };

export type UpdateOneUserMutationVariables = Exact<{
  input: UpdateOneUserInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } };

export type UpdateOneUserAddressMutationVariables = Exact<{
  input: UpdateOneUserAddressInput;
}>;


export type UpdateOneUserAddressMutation = { __typename?: 'Mutation', updateOneUserAddress: { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } } };

export type BrandsQueryVariables = Exact<{
  filter?: InputMaybe<BrandFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BrandSort> | BrandSort>;
}>;


export type BrandsQuery = { __typename?: 'Query', brands: { __typename?: 'BrandConnection', nodes: Array<{ __typename?: 'Brand', id: string, code: string, name: string }> } };

export type BrandsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandsTotalCountQuery = { __typename?: 'Query', brands: { __typename?: 'BrandConnection', totalCount: number } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryConnection', nodes: Array<{ __typename?: 'Category', id: string, code: Categories, name: string, description?: string | null, parentId?: string | null }> } };

export type CategoryTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryTreeQuery = { __typename?: 'Query', categoryTree: Array<{ __typename?: 'Category', id: string, code: Categories, name: string, description?: string | null, parentId?: string | null, children?: Array<{ __typename?: 'Category', id: string, code: Categories, name: string, description?: string | null, parentId?: string | null, children?: Array<{ __typename?: 'Category', id: string, code: Categories, name: string, description?: string | null, parentId?: string | null }> | null }> | null }> };

export type CitiesQueryVariables = Exact<{
  filter: CityFilter;
}>;


export type CitiesQuery = { __typename?: 'Query', cities: { __typename?: 'CityConnection', nodes: Array<{ __typename?: 'City', id: string, name: string }> } };

export type ColorsQueryVariables = Exact<{
  filter?: InputMaybe<ColorFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ColorSort> | ColorSort>;
}>;


export type ColorsQuery = { __typename?: 'Query', colors: { __typename?: 'ColorConnection', nodes: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }> } };

export type ColorsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ColorsTotalCountQuery = { __typename?: 'Query', colors: { __typename?: 'ColorConnection', totalCount: number } };

export type CommentsQueryVariables = Exact<{
  filter: CommentFilter;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: string, title: string, description?: string | null, rating: number, createdAt: any, user: { __typename?: 'User', fullName: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }> } };

export type CommentsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CommentsTotalCountQuery = { __typename?: 'Query', comments: { __typename?: 'CommentConnection', totalCount: number } };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: { __typename?: 'CountryConnection', nodes: Array<{ __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> }> } };

export type DeliveryMethodQueryVariables = Exact<{
  deliveryMethodId: Scalars['ID'];
}>;


export type DeliveryMethodQuery = { __typename?: 'Query', deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } };

export type DeliveryMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type DeliveryMethodsQuery = { __typename?: 'Query', deliveryMethods: { __typename?: 'DeliveryMethodConnection', nodes: Array<{ __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } | null };

export type MyCartQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCartQuery = { __typename?: 'Query', myCart: { __typename?: 'Cart', id: string, paymentMethodId?: string | null, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> } };

export type MyWishlistQueryVariables = Exact<{ [key: string]: never; }>;


export type MyWishlistQuery = { __typename?: 'Query', myWishlist: { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> }> } };

export type OneProductQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type OneProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> } };

export type OrdersQueryVariables = Exact<{
  filter?: InputMaybe<OrderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<OrderSort> | OrderSort>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders: { __typename?: 'OrderConnection', nodes: Array<{ __typename?: 'Order', id: string, status: OrderStatus, createdAt: any, deliveryAddress: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } }, deliveryMethod: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, orderItems: Array<{ __typename?: 'OrderItem', id: string, quantity: number, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, product: { __typename?: 'Product', id: string, title: string, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }>, orderHistories: Array<{ __typename?: 'OrderHistory', id: string, status: OrderStatus, createdAt: any }> }> } };

export type PaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentMethodsQuery = { __typename?: 'Query', paymentMethods: { __typename?: 'PaymentMethodConnection', nodes: Array<{ __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }> } };

export type ProductsQueryVariables = Exact<{
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProductSort> | ProductSort>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', totalCount: number, nodes: Array<{ __typename?: 'Product', id: string, title: string, description: string, createdAt: any, brand: { __typename?: 'Brand', id: string, code: string, name: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> }> } };

export type ProductsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsTotalCountQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', totalCount: number } };

export type SizesQueryVariables = Exact<{
  filter?: InputMaybe<SizeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SizeSort> | SizeSort>;
}>;


export type SizesQuery = { __typename?: 'Query', sizes: { __typename?: 'SizeConnection', nodes: Array<{ __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any }> } };

export type SizesTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type SizesTotalCountQuery = { __typename?: 'Query', sizes: { __typename?: 'SizeConnection', totalCount: number } };

export type UserAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAddressesQuery = { __typename?: 'Query', userAddresses: { __typename?: 'UserAddressConnection', nodes: Array<{ __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, cityId: string, countryId: string, state?: string | null, street?: string | null, building?: string | null, postalCode: string, formattedAddress: string, city: { __typename?: 'City', id: string, name: string }, country: { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> } } }> } };

export type UserAddressesTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAddressesTotalCountQuery = { __typename?: 'Query', userAddresses: { __typename?: 'UserAddressConnection', totalCount: number } };

export type WarehouseItemQueryVariables = Exact<{
  input: ReadWarehouseItemInput;
}>;


export type WarehouseItemQuery = { __typename?: 'Query', warehouseItem: { __typename?: 'WarehouseItem', id: string, stock: number, reserved: number, available: number, warehouseId: string, productVariantId: string, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } } };

export type WarehousesQueryVariables = Exact<{
  filter?: InputMaybe<WarehouseFilter>;
  sorting?: InputMaybe<Array<WarehouseSort> | WarehouseSort>;
  paging?: InputMaybe<OffsetPaging>;
}>;


export type WarehousesQuery = { __typename?: 'Query', warehouses: { __typename?: 'WarehouseConnection', nodes: Array<{ __typename?: 'Warehouse', id: string, code: string, name: string, status: string, warehouseItems: Array<{ __typename?: 'WarehouseItem', id: string, stock: number, reserved: number, available: number, warehouseId: string, productVariantId: string, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: Sizes, name: string, createdAt: any } } }> }> } };

export const MediaFragmentDoc = gql`
    fragment Media on Media {
  id
  publicId
  url
  filename
  width
  height
}
    `;
export const PaymentMethodFragmentDoc = gql`
    fragment PaymentMethod on PaymentMethod {
  id
  code
  name
  description
  online
  media {
    ...Media
  }
}
    ${MediaFragmentDoc}`;
export const CityFragmentDoc = gql`
    fragment City on City {
  id
  name
}
    `;
export const CountryFragmentDoc = gql`
    fragment Country on Country {
  id
  code
  name
  cities {
    ...City
  }
}
    ${CityFragmentDoc}`;
export const AddressFragmentDoc = gql`
    fragment Address on Address {
  id
  cityId
  city {
    ...City
  }
  countryId
  country {
    ...Country
  }
  state
  street
  building
  postalCode
  formattedAddress
}
    ${CityFragmentDoc}
${CountryFragmentDoc}`;
export const PriceFragmentDoc = gql`
    fragment Price on Price {
  id
  amount
  currency
}
    `;
export const DeliveryMethodFragmentDoc = gql`
    fragment DeliveryMethod on DeliveryMethod {
  id
  code
  name
  price {
    ...Price
  }
  avgDeliveryTimeInHours
}
    ${PriceFragmentDoc}`;
export const ColorFragmentDoc = gql`
    fragment Color on Color {
  id
  code
  name
  hex
}
    `;
export const SizeFragmentDoc = gql`
    fragment Size on Size {
  id
  code
  name
  createdAt
}
    `;
export const ProductVariantFragmentDoc = gql`
    fragment ProductVariant on ProductVariant {
  id
  sku
  price {
    ...Price
  }
  color {
    ...Color
  }
  size {
    ...Size
  }
  stock
}
    ${PriceFragmentDoc}
${ColorFragmentDoc}
${SizeFragmentDoc}`;
export const BrandFragmentDoc = gql`
    fragment Brand on Brand {
  id
  code
  name
}
    `;
export const ProductPartialFragmentDoc = gql`
    fragment ProductPartial on Product {
  id
  title
  brand {
    ...Brand
  }
  media {
    ...Media
  }
}
    ${BrandFragmentDoc}
${MediaFragmentDoc}`;
export const CartItemFragmentDoc = gql`
    fragment CartItem on CartItem {
  id
  price {
    ...Price
  }
  productVariant {
    ...ProductVariant
    product {
      ...ProductPartial
    }
  }
  quantity
}
    ${PriceFragmentDoc}
${ProductVariantFragmentDoc}
${ProductPartialFragmentDoc}`;
export const CartFragmentDoc = gql`
    fragment Cart on Cart {
  id
  paymentMethodId
  paymentMethod {
    ...PaymentMethod
  }
  deliveryAddress {
    ...Address
  }
  deliveryMethod {
    ...DeliveryMethod
  }
  subtotalPrice {
    ...Price
  }
  taxPrice {
    ...Price
  }
  deliveryPrice {
    ...Price
  }
  totalPrice {
    ...Price
  }
  quantity
  cartItems {
    ...CartItem
  }
}
    ${PaymentMethodFragmentDoc}
${AddressFragmentDoc}
${DeliveryMethodFragmentDoc}
${PriceFragmentDoc}
${CartItemFragmentDoc}`;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  code
  name
  description
  parentId
}
    `;
export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  id
  title
  description
  rating
  user {
    fullName
  }
  media {
    ...Media
  }
  createdAt
}
    ${MediaFragmentDoc}`;
export const OrderItemFragmentDoc = gql`
    fragment OrderItem on OrderItem {
  id
  productVariant {
    ...ProductVariant
    product {
      ...ProductPartial
    }
  }
  price {
    ...Price
  }
  quantity
}
    ${ProductVariantFragmentDoc}
${ProductPartialFragmentDoc}
${PriceFragmentDoc}`;
export const OrderHistoryFragmentDoc = gql`
    fragment OrderHistory on OrderHistory {
  id
  status
  createdAt
}
    `;
export const OrderFragmentDoc = gql`
    fragment Order on Order {
  id
  deliveryAddress {
    ...Address
  }
  deliveryMethod {
    ...DeliveryMethod
  }
  paymentMethod {
    ...PaymentMethod
  }
  subtotalPrice {
    ...Price
  }
  taxPrice {
    ...Price
  }
  deliveryPrice {
    ...Price
  }
  totalPrice {
    ...Price
  }
  status
  orderItems {
    ...OrderItem
  }
  orderHistories {
    ...OrderHistory
  }
  createdAt
}
    ${AddressFragmentDoc}
${DeliveryMethodFragmentDoc}
${PaymentMethodFragmentDoc}
${PriceFragmentDoc}
${OrderItemFragmentDoc}
${OrderHistoryFragmentDoc}`;
export const PaymentIntentFragmentDoc = gql`
    fragment PaymentIntent on PaymentIntent {
  id
  clientSecret
  paymentMethod {
    ...PaymentMethod
  }
  price {
    ...Price
  }
}
    ${PaymentMethodFragmentDoc}
${PriceFragmentDoc}`;
export const EmailAddressFragmentDoc = gql`
    fragment EmailAddress on EmailAddress {
  id
  address
  name
}
    `;
export const RoleFragmentDoc = gql`
    fragment Role on Role {
  id
  code
  name
}
    `;
export const PermissionFragmentDoc = gql`
    fragment Permission on Permission {
  id
  action
  subject
  conditions
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  firstName
  lastName
  fullName
  phone
  emailAddress {
    ...EmailAddress
  }
  avatar {
    url
  }
  roles {
    ...Role
  }
  permissions {
    ...Permission
  }
}
    ${EmailAddressFragmentDoc}
${RoleFragmentDoc}
${PermissionFragmentDoc}`;
export const UserAddressFragmentDoc = gql`
    fragment UserAddress on UserAddress {
  id
  address {
    ...Address
  }
}
    ${AddressFragmentDoc}`;
export const WarehouseItemFragmentDoc = gql`
    fragment WarehouseItem on WarehouseItem {
  id
  stock
  reserved
  available
  warehouseId
  productVariantId
  productVariant {
    ...ProductVariant
  }
}
    ${ProductVariantFragmentDoc}`;
export const WarehouseFragmentDoc = gql`
    fragment Warehouse on Warehouse {
  id
  code
  name
  status
  warehouseItems {
    ...WarehouseItem
  }
}
    ${WarehouseItemFragmentDoc}`;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  title
  description
  brand {
    ...Brand
  }
  media {
    ...Media
  }
  productVariants {
    ...ProductVariant
  }
  colors {
    ...Color
  }
  sizes {
    ...Size
  }
  createdAt
}
    ${BrandFragmentDoc}
${MediaFragmentDoc}
${ProductVariantFragmentDoc}
${ColorFragmentDoc}
${SizeFragmentDoc}`;
export const WishlistFragmentDoc = gql`
    fragment Wishlist on Wishlist {
  id
  products {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export const AddCartItemsToCartDocument = gql`
    mutation AddCartItemsToCart($input: UpdateOneCartInputType!) {
  addCartItemsToCart(input: $input) {
    ...Cart
  }
}
    ${CartFragmentDoc}`;
export type AddCartItemsToCartMutationFn = Apollo.MutationFunction<AddCartItemsToCartMutation, AddCartItemsToCartMutationVariables>;

/**
 * __useAddCartItemsToCartMutation__
 *
 * To run a mutation, you first call `useAddCartItemsToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCartItemsToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCartItemsToCartMutation, { data, loading, error }] = useAddCartItemsToCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCartItemsToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddCartItemsToCartMutation, AddCartItemsToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCartItemsToCartMutation, AddCartItemsToCartMutationVariables>(AddCartItemsToCartDocument, options);
      }
export type AddCartItemsToCartMutationHookResult = ReturnType<typeof useAddCartItemsToCartMutation>;
export type AddCartItemsToCartMutationResult = Apollo.MutationResult<AddCartItemsToCartMutation>;
export type AddCartItemsToCartMutationOptions = Apollo.BaseMutationOptions<AddCartItemsToCartMutation, AddCartItemsToCartMutationVariables>;
export const AddProductsToWishlistDocument = gql`
    mutation AddProductsToWishlist($input: AddProductsToWishlistInputType!) {
  addProductsToWishlist(input: $input) {
    id
    products {
      ...Product
    }
  }
}
    ${ProductFragmentDoc}`;
export type AddProductsToWishlistMutationFn = Apollo.MutationFunction<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>;

/**
 * __useAddProductsToWishlistMutation__
 *
 * To run a mutation, you first call `useAddProductsToWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductsToWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductsToWishlistMutation, { data, loading, error }] = useAddProductsToWishlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductsToWishlistMutation(baseOptions?: Apollo.MutationHookOptions<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>(AddProductsToWishlistDocument, options);
      }
export type AddProductsToWishlistMutationHookResult = ReturnType<typeof useAddProductsToWishlistMutation>;
export type AddProductsToWishlistMutationResult = Apollo.MutationResult<AddProductsToWishlistMutation>;
export type AddProductsToWishlistMutationOptions = Apollo.BaseMutationOptions<AddProductsToWishlistMutation, AddProductsToWishlistMutationVariables>;
export const CancelOnePaymentIntentDocument = gql`
    mutation CancelOnePaymentIntent($input: CancelPaymentIntentInput!) {
  cancelOnePaymentIntent(input: $input) {
    ...PaymentIntent
  }
}
    ${PaymentIntentFragmentDoc}`;
export type CancelOnePaymentIntentMutationFn = Apollo.MutationFunction<CancelOnePaymentIntentMutation, CancelOnePaymentIntentMutationVariables>;

/**
 * __useCancelOnePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCancelOnePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOnePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOnePaymentIntentMutation, { data, loading, error }] = useCancelOnePaymentIntentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelOnePaymentIntentMutation(baseOptions?: Apollo.MutationHookOptions<CancelOnePaymentIntentMutation, CancelOnePaymentIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelOnePaymentIntentMutation, CancelOnePaymentIntentMutationVariables>(CancelOnePaymentIntentDocument, options);
      }
export type CancelOnePaymentIntentMutationHookResult = ReturnType<typeof useCancelOnePaymentIntentMutation>;
export type CancelOnePaymentIntentMutationResult = Apollo.MutationResult<CancelOnePaymentIntentMutation>;
export type CancelOnePaymentIntentMutationOptions = Apollo.BaseMutationOptions<CancelOnePaymentIntentMutation, CancelOnePaymentIntentMutationVariables>;
export const CancelOrderDocument = gql`
    mutation CancelOrder($input: UpdateOrderInputType!) {
  cancelOrder(input: $input) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;
export type CancelOrderMutationFn = Apollo.MutationFunction<CancelOrderMutation, CancelOrderMutationVariables>;

/**
 * __useCancelOrderMutation__
 *
 * To run a mutation, you first call `useCancelOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOrderMutation, { data, loading, error }] = useCancelOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelOrderMutation(baseOptions?: Apollo.MutationHookOptions<CancelOrderMutation, CancelOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelOrderMutation, CancelOrderMutationVariables>(CancelOrderDocument, options);
      }
export type CancelOrderMutationHookResult = ReturnType<typeof useCancelOrderMutation>;
export type CancelOrderMutationResult = Apollo.MutationResult<CancelOrderMutation>;
export type CancelOrderMutationOptions = Apollo.BaseMutationOptions<CancelOrderMutation, CancelOrderMutationVariables>;
export const CompleteOrderDocument = gql`
    mutation CompleteOrder($input: UpdateOrderInputType!) {
  completeOrder(input: $input) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;
export type CompleteOrderMutationFn = Apollo.MutationFunction<CompleteOrderMutation, CompleteOrderMutationVariables>;

/**
 * __useCompleteOrderMutation__
 *
 * To run a mutation, you first call `useCompleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeOrderMutation, { data, loading, error }] = useCompleteOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<CompleteOrderMutation, CompleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteOrderMutation, CompleteOrderMutationVariables>(CompleteOrderDocument, options);
      }
export type CompleteOrderMutationHookResult = ReturnType<typeof useCompleteOrderMutation>;
export type CompleteOrderMutationResult = Apollo.MutationResult<CompleteOrderMutation>;
export type CompleteOrderMutationOptions = Apollo.BaseMutationOptions<CompleteOrderMutation, CompleteOrderMutationVariables>;
export const CreateOneCommentDocument = gql`
    mutation CreateOneComment($input: CreateOneCommentInputType!, $files: [Upload!]) {
  createOneComment(input: $input, files: $files) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type CreateOneCommentMutationFn = Apollo.MutationFunction<CreateOneCommentMutation, CreateOneCommentMutationVariables>;

/**
 * __useCreateOneCommentMutation__
 *
 * To run a mutation, you first call `useCreateOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCommentMutation, { data, loading, error }] = useCreateOneCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useCreateOneCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCommentMutation, CreateOneCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCommentMutation, CreateOneCommentMutationVariables>(CreateOneCommentDocument, options);
      }
export type CreateOneCommentMutationHookResult = ReturnType<typeof useCreateOneCommentMutation>;
export type CreateOneCommentMutationResult = Apollo.MutationResult<CreateOneCommentMutation>;
export type CreateOneCommentMutationOptions = Apollo.BaseMutationOptions<CreateOneCommentMutation, CreateOneCommentMutationVariables>;
export const CreateOneAddressDocument = gql`
    mutation CreateOneAddress($input: CreateOneAddressInput!) {
  createOneAddress(input: $input) {
    ...Address
  }
}
    ${AddressFragmentDoc}`;
export type CreateOneAddressMutationFn = Apollo.MutationFunction<CreateOneAddressMutation, CreateOneAddressMutationVariables>;

/**
 * __useCreateOneAddressMutation__
 *
 * To run a mutation, you first call `useCreateOneAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneAddressMutation, { data, loading, error }] = useCreateOneAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneAddressMutation, CreateOneAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneAddressMutation, CreateOneAddressMutationVariables>(CreateOneAddressDocument, options);
      }
export type CreateOneAddressMutationHookResult = ReturnType<typeof useCreateOneAddressMutation>;
export type CreateOneAddressMutationResult = Apollo.MutationResult<CreateOneAddressMutation>;
export type CreateOneAddressMutationOptions = Apollo.BaseMutationOptions<CreateOneAddressMutation, CreateOneAddressMutationVariables>;
export const CreateOneBrandDocument = gql`
    mutation CreateOneBrand($input: CreateOneBrandInput!) {
  createOneBrand(input: $input) {
    ...Brand
  }
}
    ${BrandFragmentDoc}`;
export type CreateOneBrandMutationFn = Apollo.MutationFunction<CreateOneBrandMutation, CreateOneBrandMutationVariables>;

/**
 * __useCreateOneBrandMutation__
 *
 * To run a mutation, you first call `useCreateOneBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneBrandMutation, { data, loading, error }] = useCreateOneBrandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneBrandMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneBrandMutation, CreateOneBrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneBrandMutation, CreateOneBrandMutationVariables>(CreateOneBrandDocument, options);
      }
export type CreateOneBrandMutationHookResult = ReturnType<typeof useCreateOneBrandMutation>;
export type CreateOneBrandMutationResult = Apollo.MutationResult<CreateOneBrandMutation>;
export type CreateOneBrandMutationOptions = Apollo.BaseMutationOptions<CreateOneBrandMutation, CreateOneBrandMutationVariables>;
export const CreateOnePaymentIntentFromCartDocument = gql`
    mutation CreateOnePaymentIntentFromCart {
  createOnePaymentIntentFromCart {
    ...PaymentIntent
  }
}
    ${PaymentIntentFragmentDoc}`;
export type CreateOnePaymentIntentFromCartMutationFn = Apollo.MutationFunction<CreateOnePaymentIntentFromCartMutation, CreateOnePaymentIntentFromCartMutationVariables>;

/**
 * __useCreateOnePaymentIntentFromCartMutation__
 *
 * To run a mutation, you first call `useCreateOnePaymentIntentFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePaymentIntentFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePaymentIntentFromCartMutation, { data, loading, error }] = useCreateOnePaymentIntentFromCartMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateOnePaymentIntentFromCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateOnePaymentIntentFromCartMutation, CreateOnePaymentIntentFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOnePaymentIntentFromCartMutation, CreateOnePaymentIntentFromCartMutationVariables>(CreateOnePaymentIntentFromCartDocument, options);
      }
export type CreateOnePaymentIntentFromCartMutationHookResult = ReturnType<typeof useCreateOnePaymentIntentFromCartMutation>;
export type CreateOnePaymentIntentFromCartMutationResult = Apollo.MutationResult<CreateOnePaymentIntentFromCartMutation>;
export type CreateOnePaymentIntentFromCartMutationOptions = Apollo.BaseMutationOptions<CreateOnePaymentIntentFromCartMutation, CreateOnePaymentIntentFromCartMutationVariables>;
export const CreateOneProductDocument = gql`
    mutation CreateOneProduct($input: CreateOneProductInputType!, $files: [Upload!]) {
  createOneProduct(input: $input, files: $files) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export type CreateOneProductMutationFn = Apollo.MutationFunction<CreateOneProductMutation, CreateOneProductMutationVariables>;

/**
 * __useCreateOneProductMutation__
 *
 * To run a mutation, you first call `useCreateOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneProductMutation, { data, loading, error }] = useCreateOneProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *      files: // value for 'files'
 *   },
 * });
 */
export function useCreateOneProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneProductMutation, CreateOneProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneProductMutation, CreateOneProductMutationVariables>(CreateOneProductDocument, options);
      }
export type CreateOneProductMutationHookResult = ReturnType<typeof useCreateOneProductMutation>;
export type CreateOneProductMutationResult = Apollo.MutationResult<CreateOneProductMutation>;
export type CreateOneProductMutationOptions = Apollo.BaseMutationOptions<CreateOneProductMutation, CreateOneProductMutationVariables>;
export const CreateOneUserAddressDocument = gql`
    mutation CreateOneUserAddress($input: CreateOneUserAddressInput!) {
  createOneUserAddress(input: $input) {
    ...UserAddress
  }
}
    ${UserAddressFragmentDoc}`;
export type CreateOneUserAddressMutationFn = Apollo.MutationFunction<CreateOneUserAddressMutation, CreateOneUserAddressMutationVariables>;

/**
 * __useCreateOneUserAddressMutation__
 *
 * To run a mutation, you first call `useCreateOneUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneUserAddressMutation, { data, loading, error }] = useCreateOneUserAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneUserAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneUserAddressMutation, CreateOneUserAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneUserAddressMutation, CreateOneUserAddressMutationVariables>(CreateOneUserAddressDocument, options);
      }
export type CreateOneUserAddressMutationHookResult = ReturnType<typeof useCreateOneUserAddressMutation>;
export type CreateOneUserAddressMutationResult = Apollo.MutationResult<CreateOneUserAddressMutation>;
export type CreateOneUserAddressMutationOptions = Apollo.BaseMutationOptions<CreateOneUserAddressMutation, CreateOneUserAddressMutationVariables>;
export const DeleteOneBrandDocument = gql`
    mutation DeleteOneBrand($input: DeleteOneBrandInput!) {
  deleteOneBrand(input: $input) {
    id
  }
}
    `;
export type DeleteOneBrandMutationFn = Apollo.MutationFunction<DeleteOneBrandMutation, DeleteOneBrandMutationVariables>;

/**
 * __useDeleteOneBrandMutation__
 *
 * To run a mutation, you first call `useDeleteOneBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneBrandMutation, { data, loading, error }] = useDeleteOneBrandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneBrandMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneBrandMutation, DeleteOneBrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneBrandMutation, DeleteOneBrandMutationVariables>(DeleteOneBrandDocument, options);
      }
export type DeleteOneBrandMutationHookResult = ReturnType<typeof useDeleteOneBrandMutation>;
export type DeleteOneBrandMutationResult = Apollo.MutationResult<DeleteOneBrandMutation>;
export type DeleteOneBrandMutationOptions = Apollo.BaseMutationOptions<DeleteOneBrandMutation, DeleteOneBrandMutationVariables>;
export const DeleteOneProductDocument = gql`
    mutation DeleteOneProduct($input: DeleteOneProductInput!) {
  deleteOneProduct(input: $input) {
    id
  }
}
    `;
export type DeleteOneProductMutationFn = Apollo.MutationFunction<DeleteOneProductMutation, DeleteOneProductMutationVariables>;

/**
 * __useDeleteOneProductMutation__
 *
 * To run a mutation, you first call `useDeleteOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneProductMutation, { data, loading, error }] = useDeleteOneProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneProductMutation, DeleteOneProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneProductMutation, DeleteOneProductMutationVariables>(DeleteOneProductDocument, options);
      }
export type DeleteOneProductMutationHookResult = ReturnType<typeof useDeleteOneProductMutation>;
export type DeleteOneProductMutationResult = Apollo.MutationResult<DeleteOneProductMutation>;
export type DeleteOneProductMutationOptions = Apollo.BaseMutationOptions<DeleteOneProductMutation, DeleteOneProductMutationVariables>;
export const DeleteOneProductVariantDocument = gql`
    mutation DeleteOneProductVariant($input: DeleteOneProductVariantInput!) {
  deleteOneProductVariant(input: $input) {
    id
    sku
  }
}
    `;
export type DeleteOneProductVariantMutationFn = Apollo.MutationFunction<DeleteOneProductVariantMutation, DeleteOneProductVariantMutationVariables>;

/**
 * __useDeleteOneProductVariantMutation__
 *
 * To run a mutation, you first call `useDeleteOneProductVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneProductVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneProductVariantMutation, { data, loading, error }] = useDeleteOneProductVariantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneProductVariantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneProductVariantMutation, DeleteOneProductVariantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneProductVariantMutation, DeleteOneProductVariantMutationVariables>(DeleteOneProductVariantDocument, options);
      }
export type DeleteOneProductVariantMutationHookResult = ReturnType<typeof useDeleteOneProductVariantMutation>;
export type DeleteOneProductVariantMutationResult = Apollo.MutationResult<DeleteOneProductVariantMutation>;
export type DeleteOneProductVariantMutationOptions = Apollo.BaseMutationOptions<DeleteOneProductVariantMutation, DeleteOneProductVariantMutationVariables>;
export const DeleteOneUserAddressDocument = gql`
    mutation DeleteOneUserAddress($input: DeleteOneUserAddressInput!) {
  deleteOneUserAddress(input: $input) {
    id
  }
}
    `;
export type DeleteOneUserAddressMutationFn = Apollo.MutationFunction<DeleteOneUserAddressMutation, DeleteOneUserAddressMutationVariables>;

/**
 * __useDeleteOneUserAddressMutation__
 *
 * To run a mutation, you first call `useDeleteOneUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneUserAddressMutation, { data, loading, error }] = useDeleteOneUserAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneUserAddressMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneUserAddressMutation, DeleteOneUserAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneUserAddressMutation, DeleteOneUserAddressMutationVariables>(DeleteOneUserAddressDocument, options);
      }
export type DeleteOneUserAddressMutationHookResult = ReturnType<typeof useDeleteOneUserAddressMutation>;
export type DeleteOneUserAddressMutationResult = Apollo.MutationResult<DeleteOneUserAddressMutation>;
export type DeleteOneUserAddressMutationOptions = Apollo.BaseMutationOptions<DeleteOneUserAddressMutation, DeleteOneUserAddressMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;
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
export const PlaceOrderFromUserCartDocument = gql`
    mutation PlaceOrderFromUserCart {
  placeOrderFromUserCart {
    ...Order
  }
}
    ${OrderFragmentDoc}`;
export type PlaceOrderFromUserCartMutationFn = Apollo.MutationFunction<PlaceOrderFromUserCartMutation, PlaceOrderFromUserCartMutationVariables>;

/**
 * __usePlaceOrderFromUserCartMutation__
 *
 * To run a mutation, you first call `usePlaceOrderFromUserCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderFromUserCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderFromUserCartMutation, { data, loading, error }] = usePlaceOrderFromUserCartMutation({
 *   variables: {
 *   },
 * });
 */
export function usePlaceOrderFromUserCartMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderFromUserCartMutation, PlaceOrderFromUserCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceOrderFromUserCartMutation, PlaceOrderFromUserCartMutationVariables>(PlaceOrderFromUserCartDocument, options);
      }
export type PlaceOrderFromUserCartMutationHookResult = ReturnType<typeof usePlaceOrderFromUserCartMutation>;
export type PlaceOrderFromUserCartMutationResult = Apollo.MutationResult<PlaceOrderFromUserCartMutation>;
export type PlaceOrderFromUserCartMutationOptions = Apollo.BaseMutationOptions<PlaceOrderFromUserCartMutation, PlaceOrderFromUserCartMutationVariables>;
export const ReissueAccessTokenDocument = gql`
    mutation ReissueAccessToken {
  reissueAccessToken {
    accessToken
  }
}
    `;
export type ReissueAccessTokenMutationFn = Apollo.MutationFunction<ReissueAccessTokenMutation, ReissueAccessTokenMutationVariables>;

/**
 * __useReissueAccessTokenMutation__
 *
 * To run a mutation, you first call `useReissueAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReissueAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reissueAccessTokenMutation, { data, loading, error }] = useReissueAccessTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useReissueAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<ReissueAccessTokenMutation, ReissueAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReissueAccessTokenMutation, ReissueAccessTokenMutationVariables>(ReissueAccessTokenDocument, options);
      }
export type ReissueAccessTokenMutationHookResult = ReturnType<typeof useReissueAccessTokenMutation>;
export type ReissueAccessTokenMutationResult = Apollo.MutationResult<ReissueAccessTokenMutation>;
export type ReissueAccessTokenMutationOptions = Apollo.BaseMutationOptions<ReissueAccessTokenMutation, ReissueAccessTokenMutationVariables>;
export const RejectOrderDocument = gql`
    mutation RejectOrder($input: UpdateOrderInputType!) {
  rejectOrder(input: $input) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;
export type RejectOrderMutationFn = Apollo.MutationFunction<RejectOrderMutation, RejectOrderMutationVariables>;

/**
 * __useRejectOrderMutation__
 *
 * To run a mutation, you first call `useRejectOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectOrderMutation, { data, loading, error }] = useRejectOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRejectOrderMutation(baseOptions?: Apollo.MutationHookOptions<RejectOrderMutation, RejectOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectOrderMutation, RejectOrderMutationVariables>(RejectOrderDocument, options);
      }
export type RejectOrderMutationHookResult = ReturnType<typeof useRejectOrderMutation>;
export type RejectOrderMutationResult = Apollo.MutationResult<RejectOrderMutation>;
export type RejectOrderMutationOptions = Apollo.BaseMutationOptions<RejectOrderMutation, RejectOrderMutationVariables>;
export const RemoveCartItemsFromCartDocument = gql`
    mutation RemoveCartItemsFromCart($input: UpdateOneCartInputType!) {
  removeCartItemsFromCart(input: $input) {
    ...Cart
  }
}
    ${CartFragmentDoc}`;
export type RemoveCartItemsFromCartMutationFn = Apollo.MutationFunction<RemoveCartItemsFromCartMutation, RemoveCartItemsFromCartMutationVariables>;

/**
 * __useRemoveCartItemsFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveCartItemsFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCartItemsFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCartItemsFromCartMutation, { data, loading, error }] = useRemoveCartItemsFromCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCartItemsFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCartItemsFromCartMutation, RemoveCartItemsFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCartItemsFromCartMutation, RemoveCartItemsFromCartMutationVariables>(RemoveCartItemsFromCartDocument, options);
      }
export type RemoveCartItemsFromCartMutationHookResult = ReturnType<typeof useRemoveCartItemsFromCartMutation>;
export type RemoveCartItemsFromCartMutationResult = Apollo.MutationResult<RemoveCartItemsFromCartMutation>;
export type RemoveCartItemsFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveCartItemsFromCartMutation, RemoveCartItemsFromCartMutationVariables>;
export const RemoveProductsFromWishlistDocument = gql`
    mutation RemoveProductsFromWishlist($input: RemoveProductsFromWishlistInputType!) {
  removeProductsFromWishlist(input: $input) {
    id
    products {
      ...Product
    }
  }
}
    ${ProductFragmentDoc}`;
export type RemoveProductsFromWishlistMutationFn = Apollo.MutationFunction<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>;

/**
 * __useRemoveProductsFromWishlistMutation__
 *
 * To run a mutation, you first call `useRemoveProductsFromWishlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductsFromWishlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductsFromWishlistMutation, { data, loading, error }] = useRemoveProductsFromWishlistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveProductsFromWishlistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>(RemoveProductsFromWishlistDocument, options);
      }
export type RemoveProductsFromWishlistMutationHookResult = ReturnType<typeof useRemoveProductsFromWishlistMutation>;
export type RemoveProductsFromWishlistMutationResult = Apollo.MutationResult<RemoveProductsFromWishlistMutation>;
export type RemoveProductsFromWishlistMutationOptions = Apollo.BaseMutationOptions<RemoveProductsFromWishlistMutation, RemoveProductsFromWishlistMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInputType!) {
  resetPassword(input: $input) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SetWarehouseItemsInWarehouseDocument = gql`
    mutation SetWarehouseItemsInWarehouse($input: UpdateOneWarehouseInputType!) {
  setWarehouseItemsInWarehouse(input: $input) {
    ...Warehouse
  }
}
    ${WarehouseFragmentDoc}`;
export type SetWarehouseItemsInWarehouseMutationFn = Apollo.MutationFunction<SetWarehouseItemsInWarehouseMutation, SetWarehouseItemsInWarehouseMutationVariables>;

/**
 * __useSetWarehouseItemsInWarehouseMutation__
 *
 * To run a mutation, you first call `useSetWarehouseItemsInWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetWarehouseItemsInWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setWarehouseItemsInWarehouseMutation, { data, loading, error }] = useSetWarehouseItemsInWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetWarehouseItemsInWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<SetWarehouseItemsInWarehouseMutation, SetWarehouseItemsInWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetWarehouseItemsInWarehouseMutation, SetWarehouseItemsInWarehouseMutationVariables>(SetWarehouseItemsInWarehouseDocument, options);
      }
export type SetWarehouseItemsInWarehouseMutationHookResult = ReturnType<typeof useSetWarehouseItemsInWarehouseMutation>;
export type SetWarehouseItemsInWarehouseMutationResult = Apollo.MutationResult<SetWarehouseItemsInWarehouseMutation>;
export type SetWarehouseItemsInWarehouseMutationOptions = Apollo.BaseMutationOptions<SetWarehouseItemsInWarehouseMutation, SetWarehouseItemsInWarehouseMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($input: SignupInput!, $file: Upload) {
  signup(input: $input, file: $file) {
    accessToken
    refreshToken
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const SignupAsPartnerDocument = gql`
    mutation SignupAsPartner($input: SignupInput!, $file: Upload) {
  signupAsPartner(input: $input, file: $file) {
    accessToken
    refreshToken
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;
export type SignupAsPartnerMutationFn = Apollo.MutationFunction<SignupAsPartnerMutation, SignupAsPartnerMutationVariables>;

/**
 * __useSignupAsPartnerMutation__
 *
 * To run a mutation, you first call `useSignupAsPartnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupAsPartnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupAsPartnerMutation, { data, loading, error }] = useSignupAsPartnerMutation({
 *   variables: {
 *      input: // value for 'input'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useSignupAsPartnerMutation(baseOptions?: Apollo.MutationHookOptions<SignupAsPartnerMutation, SignupAsPartnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupAsPartnerMutation, SignupAsPartnerMutationVariables>(SignupAsPartnerDocument, options);
      }
export type SignupAsPartnerMutationHookResult = ReturnType<typeof useSignupAsPartnerMutation>;
export type SignupAsPartnerMutationResult = Apollo.MutationResult<SignupAsPartnerMutation>;
export type SignupAsPartnerMutationOptions = Apollo.BaseMutationOptions<SignupAsPartnerMutation, SignupAsPartnerMutationVariables>;
export const TransferOrderToDeliveryDocument = gql`
    mutation TransferOrderToDelivery($input: UpdateOrderInputType!) {
  transferOrderToDelivery(input: $input) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;
export type TransferOrderToDeliveryMutationFn = Apollo.MutationFunction<TransferOrderToDeliveryMutation, TransferOrderToDeliveryMutationVariables>;

/**
 * __useTransferOrderToDeliveryMutation__
 *
 * To run a mutation, you first call `useTransferOrderToDeliveryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTransferOrderToDeliveryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [transferOrderToDeliveryMutation, { data, loading, error }] = useTransferOrderToDeliveryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTransferOrderToDeliveryMutation(baseOptions?: Apollo.MutationHookOptions<TransferOrderToDeliveryMutation, TransferOrderToDeliveryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TransferOrderToDeliveryMutation, TransferOrderToDeliveryMutationVariables>(TransferOrderToDeliveryDocument, options);
      }
export type TransferOrderToDeliveryMutationHookResult = ReturnType<typeof useTransferOrderToDeliveryMutation>;
export type TransferOrderToDeliveryMutationResult = Apollo.MutationResult<TransferOrderToDeliveryMutation>;
export type TransferOrderToDeliveryMutationOptions = Apollo.BaseMutationOptions<TransferOrderToDeliveryMutation, TransferOrderToDeliveryMutationVariables>;
export const UpdateAvatarDocument = gql`
    mutation UpdateAvatar($file: Upload!, $input: SelectUserInput!) {
  updateAvatar(file: $file, input: $input) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type UpdateAvatarMutationFn = Apollo.MutationFunction<UpdateAvatarMutation, UpdateAvatarMutationVariables>;

/**
 * __useUpdateAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvatarMutation, { data, loading, error }] = useUpdateAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAvatarMutation, UpdateAvatarMutationVariables>(UpdateAvatarDocument, options);
      }
export type UpdateAvatarMutationHookResult = ReturnType<typeof useUpdateAvatarMutation>;
export type UpdateAvatarMutationResult = Apollo.MutationResult<UpdateAvatarMutation>;
export type UpdateAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateAvatarMutation, UpdateAvatarMutationVariables>;
export const UpdateOneCommentDocument = gql`
    mutation UpdateOneComment($input: UpdateOneCommentInput!) {
  updateOneComment(input: $input) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type UpdateOneCommentMutationFn = Apollo.MutationFunction<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>;

/**
 * __useUpdateOneCommentMutation__
 *
 * To run a mutation, you first call `useUpdateOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCommentMutation, { data, loading, error }] = useUpdateOneCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>(UpdateOneCommentDocument, options);
      }
export type UpdateOneCommentMutationHookResult = ReturnType<typeof useUpdateOneCommentMutation>;
export type UpdateOneCommentMutationResult = Apollo.MutationResult<UpdateOneCommentMutation>;
export type UpdateOneCommentMutationOptions = Apollo.BaseMutationOptions<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>;
export const UpdateOneBrandDocument = gql`
    mutation UpdateOneBrand($input: UpdateOneBrandInput!) {
  updateOneBrand(input: $input) {
    ...Brand
  }
}
    ${BrandFragmentDoc}`;
export type UpdateOneBrandMutationFn = Apollo.MutationFunction<UpdateOneBrandMutation, UpdateOneBrandMutationVariables>;

/**
 * __useUpdateOneBrandMutation__
 *
 * To run a mutation, you first call `useUpdateOneBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneBrandMutation, { data, loading, error }] = useUpdateOneBrandMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneBrandMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneBrandMutation, UpdateOneBrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneBrandMutation, UpdateOneBrandMutationVariables>(UpdateOneBrandDocument, options);
      }
export type UpdateOneBrandMutationHookResult = ReturnType<typeof useUpdateOneBrandMutation>;
export type UpdateOneBrandMutationResult = Apollo.MutationResult<UpdateOneBrandMutation>;
export type UpdateOneBrandMutationOptions = Apollo.BaseMutationOptions<UpdateOneBrandMutation, UpdateOneBrandMutationVariables>;
export const UpdateOneCartDocument = gql`
    mutation UpdateOneCart($input: UpdateOneCartInput!) {
  updateOneCart(input: $input) {
    ...Cart
  }
}
    ${CartFragmentDoc}`;
export type UpdateOneCartMutationFn = Apollo.MutationFunction<UpdateOneCartMutation, UpdateOneCartMutationVariables>;

/**
 * __useUpdateOneCartMutation__
 *
 * To run a mutation, you first call `useUpdateOneCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCartMutation, { data, loading, error }] = useUpdateOneCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneCartMutation, UpdateOneCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneCartMutation, UpdateOneCartMutationVariables>(UpdateOneCartDocument, options);
      }
export type UpdateOneCartMutationHookResult = ReturnType<typeof useUpdateOneCartMutation>;
export type UpdateOneCartMutationResult = Apollo.MutationResult<UpdateOneCartMutation>;
export type UpdateOneCartMutationOptions = Apollo.BaseMutationOptions<UpdateOneCartMutation, UpdateOneCartMutationVariables>;
export const UpdateOneOrderDocument = gql`
    mutation UpdateOneOrder($input: UpdateOneOrderInput!) {
  updateOneOrder(input: $input) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;
export type UpdateOneOrderMutationFn = Apollo.MutationFunction<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>;

/**
 * __useUpdateOneOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOneOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneOrderMutation, { data, loading, error }] = useUpdateOneOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>(UpdateOneOrderDocument, options);
      }
export type UpdateOneOrderMutationHookResult = ReturnType<typeof useUpdateOneOrderMutation>;
export type UpdateOneOrderMutationResult = Apollo.MutationResult<UpdateOneOrderMutation>;
export type UpdateOneOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation UpdateOneUser($input: UpdateOneUserInput!) {
  updateOneUser(input: $input) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type UpdateOneUserMutationFn = Apollo.MutationFunction<UpdateOneUserMutation, UpdateOneUserMutationVariables>;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, options);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
export const UpdateOneUserAddressDocument = gql`
    mutation UpdateOneUserAddress($input: UpdateOneUserAddressInput!) {
  updateOneUserAddress(input: $input) {
    ...UserAddress
  }
}
    ${UserAddressFragmentDoc}`;
export type UpdateOneUserAddressMutationFn = Apollo.MutationFunction<UpdateOneUserAddressMutation, UpdateOneUserAddressMutationVariables>;

/**
 * __useUpdateOneUserAddressMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserAddressMutation, { data, loading, error }] = useUpdateOneUserAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneUserAddressMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserAddressMutation, UpdateOneUserAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUserAddressMutation, UpdateOneUserAddressMutationVariables>(UpdateOneUserAddressDocument, options);
      }
export type UpdateOneUserAddressMutationHookResult = ReturnType<typeof useUpdateOneUserAddressMutation>;
export type UpdateOneUserAddressMutationResult = Apollo.MutationResult<UpdateOneUserAddressMutation>;
export type UpdateOneUserAddressMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserAddressMutation, UpdateOneUserAddressMutationVariables>;
export const BrandsDocument = gql`
    query Brands($filter: BrandFilter, $paging: OffsetPaging, $sorting: [BrandSort!]) {
  brands(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      ...Brand
    }
  }
}
    ${BrandFragmentDoc}`;

/**
 * __useBrandsQuery__
 *
 * To run a query within a React component, call `useBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useBrandsQuery(baseOptions?: Apollo.QueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
      }
export function useBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export type BrandsQueryHookResult = ReturnType<typeof useBrandsQuery>;
export type BrandsLazyQueryHookResult = ReturnType<typeof useBrandsLazyQuery>;
export type BrandsQueryResult = Apollo.QueryResult<BrandsQuery, BrandsQueryVariables>;
export const BrandsTotalCountDocument = gql`
    query BrandsTotalCount {
  brands {
    totalCount
  }
}
    `;

/**
 * __useBrandsTotalCountQuery__
 *
 * To run a query within a React component, call `useBrandsTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandsTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandsTotalCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useBrandsTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<BrandsTotalCountQuery, BrandsTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandsTotalCountQuery, BrandsTotalCountQueryVariables>(BrandsTotalCountDocument, options);
      }
export function useBrandsTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandsTotalCountQuery, BrandsTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandsTotalCountQuery, BrandsTotalCountQueryVariables>(BrandsTotalCountDocument, options);
        }
export type BrandsTotalCountQueryHookResult = ReturnType<typeof useBrandsTotalCountQuery>;
export type BrandsTotalCountLazyQueryHookResult = ReturnType<typeof useBrandsTotalCountLazyQuery>;
export type BrandsTotalCountQueryResult = Apollo.QueryResult<BrandsTotalCountQuery, BrandsTotalCountQueryVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    nodes {
      ...Category
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryTreeDocument = gql`
    query CategoryTree {
  categoryTree {
    ...Category
    children {
      ...Category
      children {
        ...Category
      }
    }
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCategoryTreeQuery__
 *
 * To run a query within a React component, call `useCategoryTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryTreeQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryTreeQuery(baseOptions?: Apollo.QueryHookOptions<CategoryTreeQuery, CategoryTreeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryTreeQuery, CategoryTreeQueryVariables>(CategoryTreeDocument, options);
      }
export function useCategoryTreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryTreeQuery, CategoryTreeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryTreeQuery, CategoryTreeQueryVariables>(CategoryTreeDocument, options);
        }
export type CategoryTreeQueryHookResult = ReturnType<typeof useCategoryTreeQuery>;
export type CategoryTreeLazyQueryHookResult = ReturnType<typeof useCategoryTreeLazyQuery>;
export type CategoryTreeQueryResult = Apollo.QueryResult<CategoryTreeQuery, CategoryTreeQueryVariables>;
export const CitiesDocument = gql`
    query Cities($filter: CityFilter!) {
  cities(filter: $filter) {
    nodes {
      ...City
    }
  }
}
    ${CityFragmentDoc}`;

/**
 * __useCitiesQuery__
 *
 * To run a query within a React component, call `useCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCitiesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCitiesQuery(baseOptions: Apollo.QueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
      }
export function useCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
        }
export type CitiesQueryHookResult = ReturnType<typeof useCitiesQuery>;
export type CitiesLazyQueryHookResult = ReturnType<typeof useCitiesLazyQuery>;
export type CitiesQueryResult = Apollo.QueryResult<CitiesQuery, CitiesQueryVariables>;
export const ColorsDocument = gql`
    query Colors($filter: ColorFilter, $paging: OffsetPaging, $sorting: [ColorSort!]) {
  colors(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      ...Color
    }
  }
}
    ${ColorFragmentDoc}`;

/**
 * __useColorsQuery__
 *
 * To run a query within a React component, call `useColorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useColorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useColorsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useColorsQuery(baseOptions?: Apollo.QueryHookOptions<ColorsQuery, ColorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ColorsQuery, ColorsQueryVariables>(ColorsDocument, options);
      }
export function useColorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ColorsQuery, ColorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ColorsQuery, ColorsQueryVariables>(ColorsDocument, options);
        }
export type ColorsQueryHookResult = ReturnType<typeof useColorsQuery>;
export type ColorsLazyQueryHookResult = ReturnType<typeof useColorsLazyQuery>;
export type ColorsQueryResult = Apollo.QueryResult<ColorsQuery, ColorsQueryVariables>;
export const ColorsTotalCountDocument = gql`
    query ColorsTotalCount {
  colors {
    totalCount
  }
}
    `;

/**
 * __useColorsTotalCountQuery__
 *
 * To run a query within a React component, call `useColorsTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useColorsTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useColorsTotalCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useColorsTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<ColorsTotalCountQuery, ColorsTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ColorsTotalCountQuery, ColorsTotalCountQueryVariables>(ColorsTotalCountDocument, options);
      }
export function useColorsTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ColorsTotalCountQuery, ColorsTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ColorsTotalCountQuery, ColorsTotalCountQueryVariables>(ColorsTotalCountDocument, options);
        }
export type ColorsTotalCountQueryHookResult = ReturnType<typeof useColorsTotalCountQuery>;
export type ColorsTotalCountLazyQueryHookResult = ReturnType<typeof useColorsTotalCountLazyQuery>;
export type ColorsTotalCountQueryResult = Apollo.QueryResult<ColorsTotalCountQuery, ColorsTotalCountQueryVariables>;
export const CommentsDocument = gql`
    query Comments($filter: CommentFilter!) {
  comments(filter: $filter) {
    nodes {
      ...Comment
    }
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const CommentsTotalCountDocument = gql`
    query CommentsTotalCount {
  comments {
    totalCount
  }
}
    `;

/**
 * __useCommentsTotalCountQuery__
 *
 * To run a query within a React component, call `useCommentsTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsTotalCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCommentsTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<CommentsTotalCountQuery, CommentsTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsTotalCountQuery, CommentsTotalCountQueryVariables>(CommentsTotalCountDocument, options);
      }
export function useCommentsTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsTotalCountQuery, CommentsTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsTotalCountQuery, CommentsTotalCountQueryVariables>(CommentsTotalCountDocument, options);
        }
export type CommentsTotalCountQueryHookResult = ReturnType<typeof useCommentsTotalCountQuery>;
export type CommentsTotalCountLazyQueryHookResult = ReturnType<typeof useCommentsTotalCountLazyQuery>;
export type CommentsTotalCountQueryResult = Apollo.QueryResult<CommentsTotalCountQuery, CommentsTotalCountQueryVariables>;
export const CountriesDocument = gql`
    query Countries {
  countries {
    nodes {
      ...Country
    }
  }
}
    ${CountryFragmentDoc}`;

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
export const DeliveryMethodDocument = gql`
    query DeliveryMethod($deliveryMethodId: ID!) {
  deliveryMethod(id: $deliveryMethodId) {
    ...DeliveryMethod
  }
}
    ${DeliveryMethodFragmentDoc}`;

/**
 * __useDeliveryMethodQuery__
 *
 * To run a query within a React component, call `useDeliveryMethodQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryMethodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryMethodQuery({
 *   variables: {
 *      deliveryMethodId: // value for 'deliveryMethodId'
 *   },
 * });
 */
export function useDeliveryMethodQuery(baseOptions: Apollo.QueryHookOptions<DeliveryMethodQuery, DeliveryMethodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryMethodQuery, DeliveryMethodQueryVariables>(DeliveryMethodDocument, options);
      }
export function useDeliveryMethodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryMethodQuery, DeliveryMethodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryMethodQuery, DeliveryMethodQueryVariables>(DeliveryMethodDocument, options);
        }
export type DeliveryMethodQueryHookResult = ReturnType<typeof useDeliveryMethodQuery>;
export type DeliveryMethodLazyQueryHookResult = ReturnType<typeof useDeliveryMethodLazyQuery>;
export type DeliveryMethodQueryResult = Apollo.QueryResult<DeliveryMethodQuery, DeliveryMethodQueryVariables>;
export const DeliveryMethodsDocument = gql`
    query DeliveryMethods {
  deliveryMethods {
    nodes {
      ...DeliveryMethod
    }
  }
}
    ${DeliveryMethodFragmentDoc}`;

/**
 * __useDeliveryMethodsQuery__
 *
 * To run a query within a React component, call `useDeliveryMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryMethodsQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryMethodsQuery, DeliveryMethodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryMethodsQuery, DeliveryMethodsQueryVariables>(DeliveryMethodsDocument, options);
      }
export function useDeliveryMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryMethodsQuery, DeliveryMethodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryMethodsQuery, DeliveryMethodsQueryVariables>(DeliveryMethodsDocument, options);
        }
export type DeliveryMethodsQueryHookResult = ReturnType<typeof useDeliveryMethodsQuery>;
export type DeliveryMethodsLazyQueryHookResult = ReturnType<typeof useDeliveryMethodsLazyQuery>;
export type DeliveryMethodsQueryResult = Apollo.QueryResult<DeliveryMethodsQuery, DeliveryMethodsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

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
export const MyCartDocument = gql`
    query MyCart {
  myCart {
    ...Cart
  }
}
    ${CartFragmentDoc}`;

/**
 * __useMyCartQuery__
 *
 * To run a query within a React component, call `useMyCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyCartQuery(baseOptions?: Apollo.QueryHookOptions<MyCartQuery, MyCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyCartQuery, MyCartQueryVariables>(MyCartDocument, options);
      }
export function useMyCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyCartQuery, MyCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyCartQuery, MyCartQueryVariables>(MyCartDocument, options);
        }
export type MyCartQueryHookResult = ReturnType<typeof useMyCartQuery>;
export type MyCartLazyQueryHookResult = ReturnType<typeof useMyCartLazyQuery>;
export type MyCartQueryResult = Apollo.QueryResult<MyCartQuery, MyCartQueryVariables>;
export const MyWishlistDocument = gql`
    query MyWishlist {
  myWishlist {
    ...Wishlist
  }
}
    ${WishlistFragmentDoc}`;

/**
 * __useMyWishlistQuery__
 *
 * To run a query within a React component, call `useMyWishlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyWishlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyWishlistQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyWishlistQuery(baseOptions?: Apollo.QueryHookOptions<MyWishlistQuery, MyWishlistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyWishlistQuery, MyWishlistQueryVariables>(MyWishlistDocument, options);
      }
export function useMyWishlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyWishlistQuery, MyWishlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyWishlistQuery, MyWishlistQueryVariables>(MyWishlistDocument, options);
        }
export type MyWishlistQueryHookResult = ReturnType<typeof useMyWishlistQuery>;
export type MyWishlistLazyQueryHookResult = ReturnType<typeof useMyWishlistLazyQuery>;
export type MyWishlistQueryResult = Apollo.QueryResult<MyWishlistQuery, MyWishlistQueryVariables>;
export const OneProductDocument = gql`
    query OneProduct($productId: ID!) {
  product(id: $productId) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useOneProductQuery__
 *
 * To run a query within a React component, call `useOneProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useOneProductQuery(baseOptions: Apollo.QueryHookOptions<OneProductQuery, OneProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OneProductQuery, OneProductQueryVariables>(OneProductDocument, options);
      }
export function useOneProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OneProductQuery, OneProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OneProductQuery, OneProductQueryVariables>(OneProductDocument, options);
        }
export type OneProductQueryHookResult = ReturnType<typeof useOneProductQuery>;
export type OneProductLazyQueryHookResult = ReturnType<typeof useOneProductLazyQuery>;
export type OneProductQueryResult = Apollo.QueryResult<OneProductQuery, OneProductQueryVariables>;
export const OrdersDocument = gql`
    query Orders($filter: OrderFilter, $paging: OffsetPaging, $sorting: [OrderSort!]) {
  orders(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      ...Order
    }
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const PaymentMethodsDocument = gql`
    query PaymentMethods {
  paymentMethods {
    nodes {
      ...PaymentMethod
    }
  }
}
    ${PaymentMethodFragmentDoc}`;

/**
 * __usePaymentMethodsQuery__
 *
 * To run a query within a React component, call `usePaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePaymentMethodsQuery(baseOptions?: Apollo.QueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
      }
export function usePaymentMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentMethodsQuery, PaymentMethodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentMethodsQuery, PaymentMethodsQueryVariables>(PaymentMethodsDocument, options);
        }
export type PaymentMethodsQueryHookResult = ReturnType<typeof usePaymentMethodsQuery>;
export type PaymentMethodsLazyQueryHookResult = ReturnType<typeof usePaymentMethodsLazyQuery>;
export type PaymentMethodsQueryResult = Apollo.QueryResult<PaymentMethodsQuery, PaymentMethodsQueryVariables>;
export const ProductsDocument = gql`
    query Products($filter: ProductFilter, $paging: OffsetPaging, $sorting: [ProductSort!]) {
  products(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      ...Product
    }
    totalCount
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductsTotalCountDocument = gql`
    query ProductsTotalCount {
  products {
    totalCount
  }
}
    `;

/**
 * __useProductsTotalCountQuery__
 *
 * To run a query within a React component, call `useProductsTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsTotalCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<ProductsTotalCountQuery, ProductsTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsTotalCountQuery, ProductsTotalCountQueryVariables>(ProductsTotalCountDocument, options);
      }
export function useProductsTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsTotalCountQuery, ProductsTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsTotalCountQuery, ProductsTotalCountQueryVariables>(ProductsTotalCountDocument, options);
        }
export type ProductsTotalCountQueryHookResult = ReturnType<typeof useProductsTotalCountQuery>;
export type ProductsTotalCountLazyQueryHookResult = ReturnType<typeof useProductsTotalCountLazyQuery>;
export type ProductsTotalCountQueryResult = Apollo.QueryResult<ProductsTotalCountQuery, ProductsTotalCountQueryVariables>;
export const SizesDocument = gql`
    query Sizes($filter: SizeFilter, $paging: OffsetPaging, $sorting: [SizeSort!]) {
  sizes(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      ...Size
    }
  }
}
    ${SizeFragmentDoc}`;

/**
 * __useSizesQuery__
 *
 * To run a query within a React component, call `useSizesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSizesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSizesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useSizesQuery(baseOptions?: Apollo.QueryHookOptions<SizesQuery, SizesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SizesQuery, SizesQueryVariables>(SizesDocument, options);
      }
export function useSizesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SizesQuery, SizesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SizesQuery, SizesQueryVariables>(SizesDocument, options);
        }
export type SizesQueryHookResult = ReturnType<typeof useSizesQuery>;
export type SizesLazyQueryHookResult = ReturnType<typeof useSizesLazyQuery>;
export type SizesQueryResult = Apollo.QueryResult<SizesQuery, SizesQueryVariables>;
export const SizesTotalCountDocument = gql`
    query SizesTotalCount {
  sizes {
    totalCount
  }
}
    `;

/**
 * __useSizesTotalCountQuery__
 *
 * To run a query within a React component, call `useSizesTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useSizesTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSizesTotalCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useSizesTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<SizesTotalCountQuery, SizesTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SizesTotalCountQuery, SizesTotalCountQueryVariables>(SizesTotalCountDocument, options);
      }
export function useSizesTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SizesTotalCountQuery, SizesTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SizesTotalCountQuery, SizesTotalCountQueryVariables>(SizesTotalCountDocument, options);
        }
export type SizesTotalCountQueryHookResult = ReturnType<typeof useSizesTotalCountQuery>;
export type SizesTotalCountLazyQueryHookResult = ReturnType<typeof useSizesTotalCountLazyQuery>;
export type SizesTotalCountQueryResult = Apollo.QueryResult<SizesTotalCountQuery, SizesTotalCountQueryVariables>;
export const UserAddressesDocument = gql`
    query UserAddresses {
  userAddresses {
    nodes {
      ...UserAddress
    }
  }
}
    ${UserAddressFragmentDoc}`;

/**
 * __useUserAddressesQuery__
 *
 * To run a query within a React component, call `useUserAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAddressesQuery(baseOptions?: Apollo.QueryHookOptions<UserAddressesQuery, UserAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAddressesQuery, UserAddressesQueryVariables>(UserAddressesDocument, options);
      }
export function useUserAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAddressesQuery, UserAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAddressesQuery, UserAddressesQueryVariables>(UserAddressesDocument, options);
        }
export type UserAddressesQueryHookResult = ReturnType<typeof useUserAddressesQuery>;
export type UserAddressesLazyQueryHookResult = ReturnType<typeof useUserAddressesLazyQuery>;
export type UserAddressesQueryResult = Apollo.QueryResult<UserAddressesQuery, UserAddressesQueryVariables>;
export const UserAddressesTotalCountDocument = gql`
    query UserAddressesTotalCount {
  userAddresses {
    totalCount
  }
}
    `;

/**
 * __useUserAddressesTotalCountQuery__
 *
 * To run a query within a React component, call `useUserAddressesTotalCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAddressesTotalCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAddressesTotalCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAddressesTotalCountQuery(baseOptions?: Apollo.QueryHookOptions<UserAddressesTotalCountQuery, UserAddressesTotalCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAddressesTotalCountQuery, UserAddressesTotalCountQueryVariables>(UserAddressesTotalCountDocument, options);
      }
export function useUserAddressesTotalCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAddressesTotalCountQuery, UserAddressesTotalCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAddressesTotalCountQuery, UserAddressesTotalCountQueryVariables>(UserAddressesTotalCountDocument, options);
        }
export type UserAddressesTotalCountQueryHookResult = ReturnType<typeof useUserAddressesTotalCountQuery>;
export type UserAddressesTotalCountLazyQueryHookResult = ReturnType<typeof useUserAddressesTotalCountLazyQuery>;
export type UserAddressesTotalCountQueryResult = Apollo.QueryResult<UserAddressesTotalCountQuery, UserAddressesTotalCountQueryVariables>;
export const WarehouseItemDocument = gql`
    query WarehouseItem($input: ReadWarehouseItemInput!) {
  warehouseItem(input: $input) {
    ...WarehouseItem
  }
}
    ${WarehouseItemFragmentDoc}`;

/**
 * __useWarehouseItemQuery__
 *
 * To run a query within a React component, call `useWarehouseItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseItemQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseItemQuery(baseOptions: Apollo.QueryHookOptions<WarehouseItemQuery, WarehouseItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseItemQuery, WarehouseItemQueryVariables>(WarehouseItemDocument, options);
      }
export function useWarehouseItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseItemQuery, WarehouseItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseItemQuery, WarehouseItemQueryVariables>(WarehouseItemDocument, options);
        }
export type WarehouseItemQueryHookResult = ReturnType<typeof useWarehouseItemQuery>;
export type WarehouseItemLazyQueryHookResult = ReturnType<typeof useWarehouseItemLazyQuery>;
export type WarehouseItemQueryResult = Apollo.QueryResult<WarehouseItemQuery, WarehouseItemQueryVariables>;
export const WarehousesDocument = gql`
    query Warehouses($filter: WarehouseFilter, $sorting: [WarehouseSort!], $paging: OffsetPaging) {
  warehouses(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      ...Warehouse
    }
  }
}
    ${WarehouseFragmentDoc}`;

/**
 * __useWarehousesQuery__
 *
 * To run a query within a React component, call `useWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehousesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useWarehousesQuery(baseOptions?: Apollo.QueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
      }
export function useWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export type WarehousesQueryHookResult = ReturnType<typeof useWarehousesQuery>;
export type WarehousesLazyQueryHookResult = ReturnType<typeof useWarehousesLazyQuery>;
export type WarehousesQueryResult = Apollo.QueryResult<WarehousesQuery, WarehousesQueryVariables>;