export interface CategoryProps {
  categories: Category[];
}

export interface Category {
  id: string;
  icon: React.JSX.Element;
  title: string;
  subCategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  title: string;
}

export interface CategoryTree {
  type: string;
  id: string;
  name: string;
}

export interface CategoryItem {
  id: string;
  type: 'category';
  description: string;
  name: string;
  pageTitle: string;
  parentCategoryId: string;
  enableCompare: boolean;
  hasCustomBanner: boolean;
  navigationIcon: string;
  promotionalAsset: string;
  showInMeny: boolean;
  pageUrl: string;
  path: string;
  slug: string;
  parentCategoryTree: CategoryTree;
  categories: CategoryItem[];
}

export interface CategoryState {
  categoriesList: CategoryItem[];
  loading: boolean;
  error: any;
}
