export interface SearchProps {
  setIsModalVisible: any;
}

export interface ApiProductSearchRequest {
  q?: string | null;
  limit: number;
  offset: number;
  refine?: string[] | null;
  sort?: string | null;
}

export interface ProductSearchResult {
  limit?: number | null;
  hits?: ProductSearchHit[] | null;
  query?: string | null;
  refinements?: ProductSearchRefinement[] | null;
  sortingOptions?: ProductSearchSortingOption[] | null;
}

export interface ProductSearchHit {
  currency?: Currency | null;
  hitType: string;
  image?: ProductImage | null;
  orderable?: boolean;
  price?: number | null;
  stock?: number | null;
  productId: string;
  productName: string;
  productTypeItem?: boolean;
  representedProductId: string;
  representedProductIds?: string[] | null;
}

export enum Currency {
  USD = 'usd',
  CLP = 'clp',
}

export interface ProductImage {
  alt?: string | null;
  disBaseLink: string;
  link: string;
  title: string;
}

export interface ProductSearchRefinementValue {
  hitCount?: number | null;
  label: string;
  value: string;
}

export interface ProductSearchRefinement {
  attributeId?: string | null;
  label: string;
  values?: ProductSearchRefinementValue[] | null;
}

export interface ProductSearchSortingOption {
  id?: string | null;
  label: string;
}
