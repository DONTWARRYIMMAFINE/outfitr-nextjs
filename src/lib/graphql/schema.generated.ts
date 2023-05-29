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
  createdAt: Scalars['DateTime'];
  formattedAddress: Scalars['String'];
  id: Scalars['ID'];
  postalCode: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<Address>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<Brand>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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

export type CartAggregateGroupBy = {
  __typename?: 'CartAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Float']>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CartAvgAggregate = {
  __typename?: 'CartAvgAggregate';
  quantity?: Maybe<Scalars['Float']>;
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

export type CartCountAggregate = {
  __typename?: 'CartCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deliveryAddressId?: Maybe<Scalars['Int']>;
  deliveryMethodId?: Maybe<Scalars['Int']>;
  deliveryPriceId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  paymentMethodId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  subtotalPriceId?: Maybe<Scalars['Int']>;
  taxPriceId?: Maybe<Scalars['Int']>;
  totalPriceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
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
  image?: Maybe<Media>;
  price: Price;
  priceId: Scalars['ID'];
  productTitle: Scalars['String'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<CartItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Media>;
  priceId?: Maybe<Scalars['ID']>;
  productTitle?: Maybe<Scalars['String']>;
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
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Float']>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CartMinAggregate = {
  __typename?: 'CartMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAddressId?: Maybe<Scalars['ID']>;
  deliveryMethodId?: Maybe<Scalars['ID']>;
  deliveryPriceId?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  quantity?: Maybe<Scalars['Float']>;
  subtotalPriceId?: Maybe<Scalars['ID']>;
  taxPriceId?: Maybe<Scalars['ID']>;
  totalPriceId?: Maybe<Scalars['ID']>;
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

export type CartSumAggregate = {
  __typename?: 'CartSumAggregate';
  quantity?: Maybe<Scalars['Float']>;
};

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

export type Category = {
  __typename?: 'Category';
  children?: Maybe<Array<Category>>;
  code: Scalars['String'];
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
  /** Array of nodes. */
  nodes: Array<Category>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<City>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt: Scalars['DateTime'];
  hex: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<Color>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  media: Array<Media>;
  product: Product;
  productId: Scalars['ID'];
  rating: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<Comment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<Country>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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

export type CreateOrderFromCurrentUserCartInput = {
  deliveryAddressId?: InputMaybe<Scalars['String']>;
  deliveryMethodId?: InputMaybe<Scalars['String']>;
  paymentMethodId?: InputMaybe<Scalars['String']>;
};

export type CreateOrderInput = {
  deliveryAddressId: Scalars['String'];
  deliveryMethodId: Scalars['String'];
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

export type DeliveryMethodAggregateGroupBy = {
  __typename?: 'DeliveryMethodAggregateGroupBy';
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

export type DeliveryMethodAvgAggregate = {
  __typename?: 'DeliveryMethodAvgAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Float']>;
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

export type DeliveryMethodCountAggregate = {
  __typename?: 'DeliveryMethodCountAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
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

export type DeliveryMethodMaxAggregate = {
  __typename?: 'DeliveryMethodMaxAggregate';
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

export type DeliveryMethodMinAggregate = {
  __typename?: 'DeliveryMethodMinAggregate';
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

export type DeliveryMethodSumAggregate = {
  __typename?: 'DeliveryMethodSumAggregate';
  avgDeliveryTimeInHours?: Maybe<Scalars['Float']>;
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
  createdAt: Scalars['DateTime'];
  emailAddress: EmailAddress;
  emailAddressId: Scalars['ID'];
  id: Scalars['ID'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<EmailAddressConfirmation>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  /** Array of nodes. */
  nodes: Array<EmailAddress>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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

export type MediaAggregateGroupBy = {
  __typename?: 'MediaAggregateGroupBy';
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

export type MediaAvgAggregate = {
  __typename?: 'MediaAvgAggregate';
  height?: Maybe<Scalars['Float']>;
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

export type MediaCountAggregate = {
  __typename?: 'MediaCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  publicId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
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

export type MediaMaxAggregate = {
  __typename?: 'MediaMaxAggregate';
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

export type MediaMinAggregate = {
  __typename?: 'MediaMinAggregate';
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

export type MediaSumAggregate = {
  __typename?: 'MediaSumAggregate';
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

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
  confirmEmail: EmailAddressConfirmation;
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
  createOneOrderFromCurrentUserCart: Order;
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
  reissueAccessToken: AccessTokenResponse;
  releaseWarehouseItemsInWarehouse: Warehouse;
  removeCartItemsFromCart: Cart;
  removeMediaFromProduct: Product;
  removeProductsFromWishlist: Wishlist;
  removeWarehouseItemsFromWarehouse: Warehouse;
  reserveWarehouseItemsInWarehouse: Warehouse;
  resetPassword: User;
  restoreOneUser: User;
  sendConfirmationEmail: EmailAddressConfirmation;
  signup: SignupResponse;
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


export type MutationCancelOrderArgs = {
  input: CancelOrderInputType;
};


export type MutationCancelReservationForWarehouseItemsInWarehouseArgs = {
  input: UpdateOneWarehouseInputType;
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


export type MutationSignupArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  input: SignupInput;
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
  orderItems: Array<OrderItem>;
  paymentIntent?: Maybe<PaymentIntent>;
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
  /** Array of nodes. */
  nodes: Array<Order>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  paymentIntent?: InputMaybe<OrderFilterPaymentIntentFilter>;
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
  type?: InputMaybe<StringFieldComparison>;
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

export type OrderFilterPaymentIntentFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilterPaymentIntentFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFilterPaymentMethodFilter = {
  and?: InputMaybe<Array<OrderFilterPaymentMethodFilter>>;
  code?: InputMaybe<PaymentMethodsFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  online?: InputMaybe<BooleanFieldComparison>;
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
  Paid = 'PAID',
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['ID'];
  price?: Maybe<Price>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['DateTime'];
};

export type PaymentIntentAggregateGroupBy = {
  __typename?: 'PaymentIntentAggregateGroupBy';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type PaymentIntentCountAggregate = {
  __typename?: 'PaymentIntentCountAggregate';
  clientSecret?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  paymentMethodId?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PaymentIntentDeleteResponse = {
  __typename?: 'PaymentIntentDeleteResponse';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentIntentFilter = {
  and?: InputMaybe<Array<PaymentIntentFilter>>;
  clientSecret?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentIntentFilter>>;
  paymentMethod?: InputMaybe<PaymentIntentFilterPaymentMethodFilter>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  price?: InputMaybe<PaymentIntentFilterPriceFilter>;
  priceId?: InputMaybe<IdFilterComparison>;
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

export type PaymentIntentMaxAggregate = {
  __typename?: 'PaymentIntentMaxAggregate';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  paymentMethodId?: Maybe<Scalars['ID']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentIntentMinAggregate = {
  __typename?: 'PaymentIntentMinAggregate';
  clientSecret?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
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
  PaymentMethodId = 'paymentMethodId',
  PriceId = 'priceId',
  UpdatedAt = 'updatedAt'
}

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

export type PaymentMethodAggregateGroupBy = {
  __typename?: 'PaymentMethodAggregateGroupBy';
  code?: Maybe<PaymentMethods>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PaymentMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type PaymentMethodCountAggregate = {
  __typename?: 'PaymentMethodCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  online?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
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

export type PaymentMethodMaxAggregate = {
  __typename?: 'PaymentMethodMaxAggregate';
  code?: Maybe<PaymentMethods>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentMethodStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentMethodMinAggregate = {
  __typename?: 'PaymentMethodMinAggregate';
  code?: Maybe<PaymentMethods>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
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
  /** Array of nodes. */
  nodes: Array<Permission>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<PickupPoint>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt: Scalars['DateTime'];
  currency: Currencies;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<Price>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  /** Array of nodes. */
  nodes: Array<Product>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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

export type ProductFilterCommentFilter = {
  and?: InputMaybe<Array<ProductFilterCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterCommentFilter>>;
  productId?: InputMaybe<IdFilterComparison>;
  rating?: InputMaybe<FloatFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
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
  stock?: InputMaybe<NumberFieldComparison>;
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

export type ProductVariantAggregateGroupBy = {
  __typename?: 'ProductVariantAggregateGroupBy';
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

export type ProductVariantAvgAggregate = {
  __typename?: 'ProductVariantAvgAggregate';
  stock?: Maybe<Scalars['Float']>;
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
  stock?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
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
  stock?: Maybe<Scalars['Float']>;
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
  stock?: Maybe<Scalars['Float']>;
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
  Stock = 'stock',
  UpdatedAt = 'updatedAt'
}

export type ProductVariantSumAggregate = {
  __typename?: 'ProductVariantSumAggregate';
  stock?: Maybe<Scalars['Float']>;
};

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

export type PromotionAggregateGroupBy = {
  __typename?: 'PromotionAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type PromotionCountAggregate = {
  __typename?: 'PromotionCountAggregate';
  code?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  priceId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
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

export type PromotionMaxAggregate = {
  __typename?: 'PromotionMaxAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionMinAggregate = {
  __typename?: 'PromotionMinAggregate';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  priceId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type PromotionProductAggregateGroupBy = {
  __typename?: 'PromotionProductAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  expireAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  promotionId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  valid?: Maybe<Scalars['Boolean']>;
};

export type PromotionProductConnection = {
  __typename?: 'PromotionProductConnection';
  /** Array of edges. */
  edges: Array<PromotionProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PromotionProductCountAggregate = {
  __typename?: 'PromotionProductCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  expireAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  promotionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  valid?: Maybe<Scalars['Int']>;
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
  or?: InputMaybe<Array<PromotionProductFilterPaymentIntentFilter>>;
  paymentMethodId?: InputMaybe<IdFilterComparison>;
  priceId?: InputMaybe<IdFilterComparison>;
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

export type PromotionProductMaxAggregate = {
  __typename?: 'PromotionProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expireAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  promotionId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PromotionProductMinAggregate = {
  __typename?: 'PromotionProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expireAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['ID']>;
  promotionId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  categoryTree: Array<Category>;
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
  promotion?: Maybe<Promotion>;
  promotionProduct?: Maybe<PromotionProduct>;
  promotionProducts: PromotionProductConnection;
  promotions: PromotionConnection;
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


export type QueryWarehousesArgs = {
  filter?: WarehouseFilter;
  paging?: OffsetPaging;
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
  /** Array of nodes. */
  nodes: Array<Role>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  /** Array of nodes. */
  nodes: Array<Size>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  paymentMethodId?: InputMaybe<Scalars['String']>;
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
  /** Array of nodes. */
  nodes: Array<UserAddress>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  /** Array of nodes. */
  nodes: Array<Warehouse>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
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
  stock?: InputMaybe<NumberFieldComparison>;
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

export type AddressFragment = { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } };

export type BrandFragment = { __typename?: 'Brand', id: string, code: string, name: string };

export type CartFragment = { __typename?: 'Cart', id: string, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, productTitle: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }, image?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }> };

export type CartItemFragment = { __typename?: 'CartItem', id: string, productTitle: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }, image?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null };

export type CategoryFragment = { __typename?: 'Category', id: string, code: string, name: string, description?: string | null, parentId?: string | null };

export type CityFragment = { __typename?: 'City', id: string, name: string };

export type ColorFragment = { __typename?: 'Color', id: string, code: string, name: string, hex: string };

export type CommentFragment = { __typename?: 'Comment', id: string, description?: string | null, rating: number, createdAt: any, user: { __typename?: 'User', fullName: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> };

export type CountryFragment = { __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> };

export type DeliveryMethodFragment = { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } };

export type EmailAddressFragment = { __typename?: 'EmailAddress', id: string, address: string, name?: string | null };

export type MediaFragment = { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null };

export type PaymentIntentFragment = { __typename?: 'PaymentIntent', id: string, clientSecret: string, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, price?: { __typename?: 'Price', id: string, amount: number, currency: Currencies } | null };

export type PaymentMethodFragment = { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null };

export type PermissionFragment = { __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null };

export type PriceFragment = { __typename?: 'Price', id: string, amount: number, currency: Currencies };

export type ProductFragment = { __typename?: 'Product', id: string, title: string, description: string, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: string, name: string }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }> };

export type ProductVariantFragment = { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } };

export type RoleFragment = { __typename?: 'Role', id: string, code: Roles, name: string };

export type SizeFragment = { __typename?: 'Size', id: string, code: string, name: string };

export type UserFragment = { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> };

export type UserAddressFragment = { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } };

export type WishlistFragment = { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: string, name: string }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }> }> };

export type AddCartItemsToCartMutationVariables = Exact<{
  input: UpdateOneCartInputType;
}>;


export type AddCartItemsToCartMutation = { __typename?: 'Mutation', addCartItemsToCart: { __typename?: 'Cart', id: string, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, productTitle: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }, image?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }> } };

export type AddProductsToWishlistMutationVariables = Exact<{
  input: AddProductsToWishlistInputType;
}>;


export type AddProductsToWishlistMutation = { __typename?: 'Mutation', addProductsToWishlist: { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: string, name: string }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }> }> } };

export type CreateOneAddressMutationVariables = Exact<{
  input: CreateOneAddressInput;
}>;


export type CreateOneAddressMutation = { __typename?: 'Mutation', createOneAddress: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } };

export type CreateOnePaymentIntentFromCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateOnePaymentIntentFromCartMutation = { __typename?: 'Mutation', createOnePaymentIntentFromCart: { __typename?: 'PaymentIntent', id: string, clientSecret: string, paymentMethod: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }, price?: { __typename?: 'Price', id: string, amount: number, currency: Currencies } | null } };

export type CreateOneUserAddressMutationVariables = Exact<{
  input: CreateOneUserAddressInput;
}>;


export type CreateOneUserAddressMutation = { __typename?: 'Mutation', createOneUserAddress: { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } } };

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

export type ReissueAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type ReissueAccessTokenMutation = { __typename?: 'Mutation', reissueAccessToken: { __typename?: 'AccessTokenResponse', accessToken: string } };

export type RemoveCartItemsFromCartMutationVariables = Exact<{
  input: UpdateOneCartInputType;
}>;


export type RemoveCartItemsFromCartMutation = { __typename?: 'Mutation', removeCartItemsFromCart: { __typename?: 'Cart', id: string, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, productTitle: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }, image?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }> } };

export type RemoveProductsFromWishlistMutationVariables = Exact<{
  input: RemoveProductsFromWishlistInputType;
}>;


export type RemoveProductsFromWishlistMutation = { __typename?: 'Mutation', removeProductsFromWishlist: { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: string, name: string }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }> }> } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInputType;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'SignupResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } } };

export type UpdateOneCartMutationVariables = Exact<{
  input: UpdateOneCartInput;
}>;


export type UpdateOneCartMutation = { __typename?: 'Mutation', updateOneCart: { __typename?: 'Cart', id: string, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, productTitle: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }, image?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }> } };

export type UpdateOneUserMutationVariables = Exact<{
  input: UpdateOneUserInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } };

export type UpdateOneUserAddressMutationVariables = Exact<{
  input: UpdateOneUserAddressInput;
}>;


export type UpdateOneUserAddressMutation = { __typename?: 'Mutation', updateOneUserAddress: { __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } } };

export type BrandsQueryVariables = Exact<{
  filter?: InputMaybe<BrandFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<BrandSort> | BrandSort>;
}>;


export type BrandsQuery = { __typename?: 'Query', brands: { __typename?: 'BrandConnection', nodes: Array<{ __typename?: 'Brand', id: string, code: string, name: string }> } };

export type BrandsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandsTotalCountQuery = { __typename?: 'Query', brands: { __typename?: 'BrandConnection', totalCount: number } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryConnection', nodes: Array<{ __typename?: 'Category', id: string, code: string, name: string, description?: string | null, parentId?: string | null }> } };

export type CategoryTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryTreeQuery = { __typename?: 'Query', categoryTree: Array<{ __typename?: 'Category', id: string, code: string, name: string, description?: string | null, parentId?: string | null, children?: Array<{ __typename?: 'Category', id: string, code: string, name: string, description?: string | null, parentId?: string | null, children?: Array<{ __typename?: 'Category', id: string, code: string, name: string, description?: string | null, parentId?: string | null }> | null }> | null }> };

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


export type CommentsQuery = { __typename?: 'Query', comments: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', id: string, description?: string | null, rating: number, createdAt: any, user: { __typename?: 'User', fullName: string }, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }> }> } };

export type CommentsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CommentsTotalCountQuery = { __typename?: 'Query', comments: { __typename?: 'CommentConnection', totalCount: number } };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: { __typename?: 'CountryConnection', nodes: Array<{ __typename?: 'Country', id: string, code: string, name: string, cities: Array<{ __typename?: 'City', id: string, name: string }> }> } };

export type DeliveryMethodQueryVariables = Exact<{
  deliveryMethodId: Scalars['ID'];
}>;


export type DeliveryMethodQuery = { __typename?: 'Query', deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null };

export type DeliveryMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type DeliveryMethodsQuery = { __typename?: 'Query', deliveryMethods: { __typename?: 'DeliveryMethodConnection', nodes: Array<{ __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, fullName: string, phone?: string | null, emailAddress: { __typename?: 'EmailAddress', id: string, address: string, name?: string | null }, avatar?: { __typename?: 'Media', url: string } | null, roles: Array<{ __typename?: 'Role', id: string, code: Roles, name: string }>, permissions: Array<{ __typename?: 'Permission', id: string, action: Actions, subject: string, conditions?: any | null }> } | null };

export type MyCartQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCartQuery = { __typename?: 'Query', myCart: { __typename?: 'Cart', id: string, quantity: number, paymentMethod?: { __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null } | null, deliveryAddress?: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } | null, deliveryMethod?: { __typename?: 'DeliveryMethod', id: string, code: string, name: string, avgDeliveryTimeInHours?: number | null, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies } } | null, subtotalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, taxPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, deliveryPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, totalPrice: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, cartItems: Array<{ __typename?: 'CartItem', id: string, productTitle: string, quantity: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, productVariant: { __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }, image?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }> } };

export type MyWishlistQueryVariables = Exact<{ [key: string]: never; }>;


export type MyWishlistQuery = { __typename?: 'Query', myWishlist: { __typename?: 'Wishlist', id: string, products: Array<{ __typename?: 'Product', id: string, title: string, description: string, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: string, name: string }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }> }> } };

export type OneProductQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type OneProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, title: string, description: string, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: string, name: string }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }> } | null };

export type PaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type PaymentMethodsQuery = { __typename?: 'Query', paymentMethods: { __typename?: 'PaymentMethodConnection', nodes: Array<{ __typename?: 'PaymentMethod', id: string, code: PaymentMethods, name: string, description?: string | null, online: boolean, media?: { __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null } | null }> } };

export type ProductsQueryVariables = Exact<{
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProductSort> | ProductSort>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', nodes: Array<{ __typename?: 'Product', id: string, title: string, description: string, media: Array<{ __typename?: 'Media', id: string, publicId: string, url: string, filename: string, width?: number | null, height?: number | null }>, colors: Array<{ __typename?: 'Color', id: string, code: string, name: string, hex: string }>, sizes: Array<{ __typename?: 'Size', id: string, code: string, name: string }>, productVariants: Array<{ __typename?: 'ProductVariant', id: string, sku: string, stock: number, price: { __typename?: 'Price', id: string, amount: number, currency: Currencies }, color: { __typename?: 'Color', id: string, code: string, name: string, hex: string }, size: { __typename?: 'Size', id: string, code: string, name: string } }> }> } };

export type ProductsTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsTotalCountQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', totalCount: number } };

export type SizesQueryVariables = Exact<{
  filter?: InputMaybe<SizeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SizeSort> | SizeSort>;
}>;


export type SizesQuery = { __typename?: 'Query', sizes: { __typename?: 'SizeConnection', nodes: Array<{ __typename?: 'Size', id: string, code: string, name: string }> } };

export type SizesTotalCountQueryVariables = Exact<{ [key: string]: never; }>;


export type SizesTotalCountQuery = { __typename?: 'Query', sizes: { __typename?: 'SizeConnection', totalCount: number } };

export type UserAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAddressesQuery = { __typename?: 'Query', userAddresses: { __typename?: 'UserAddressConnection', nodes: Array<{ __typename?: 'UserAddress', id: string, address: { __typename?: 'Address', id: string, state?: string | null, street?: string | null, building?: string | null, formattedAddress: string, city: { __typename?: 'City', id: string, name: string } } }> } };

export const BrandFragmentDoc = gql`
    fragment Brand on Brand {
  id
  code
  name
}
    `;
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
export const AddressFragmentDoc = gql`
    fragment Address on Address {
  id
  city {
    ...City
  }
  state
  street
  building
  formattedAddress
}
    ${CityFragmentDoc}`;
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
export const CartItemFragmentDoc = gql`
    fragment CartItem on CartItem {
  id
  price {
    ...Price
  }
  productTitle
  productVariant {
    ...ProductVariant
  }
  image {
    ...Media
  }
  quantity
}
    ${PriceFragmentDoc}
${ProductVariantFragmentDoc}
${MediaFragmentDoc}`;
export const CartFragmentDoc = gql`
    fragment Cart on Cart {
  id
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
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  title
  description
  media {
    ...Media
  }
  colors {
    ...Color
  }
  sizes {
    ...Size
  }
  productVariants {
    ...ProductVariant
  }
}
    ${MediaFragmentDoc}
${ColorFragmentDoc}
${SizeFragmentDoc}
${ProductVariantFragmentDoc}`;
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
      id
      code
      name
      hex
    }
  }
}
    `;

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