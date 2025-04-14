/**
 * @author Andy Francisco Olarte Cardona
 * @email andy.olarte@mredb.ee
 * @create date 2023-10-23 15:02:31
 * @desc this function is to be used at the moment of consuming services
 * in order to pass the parameters in an object and make the code more readable.
 */
export function formatParams(params: {
  [key: string]: string | string[];
}): string {
  const formattedParams: string[] = [];
  for (const key in params) {
    if (Array.isArray(params[key])) {
      for (const value of params[key]) {
        formattedParams.push(`${key}[]=${value}`);
      }
    } else {
      formattedParams.push(`${key}=${params[key]}`);
    }
  }
  return formattedParams.join('&');
}

type OriginalProductData = Record<
  string,
  {
    appliedPromotions?: Record<string, any>;
    brand?: string;
    images?: any[];
    name?: string;
    prices?: Record<string, number>;
    promotions?: any[];
    ribbons?: any[];
    stock?: number;
  }
>;

export type FormattedProductData = {
  id: string;
  appliedPromotions: Record<string, any>;
  brand: string;
  images: {
    alt: string;
    disBaseLink: string;
    link: string;
    title: string;
    type: string;
  }[];
  name: string;
  prices: Record<string, number>;
  promotions: any[];
  ribbons: any[];
  stock: number;
};

export function formatProductlistData(
  data: OriginalProductData,
): FormattedProductData[] {
  const formattedData = Object.keys(data).map(key => {
    const item = data[key];
    return {
      id: key,
      appliedPromotions: item.appliedPromotions || {},
      brand: item.brand || '',
      images: item.images || [],
      name: item.name || '',
      prices: item.prices || {},
      promotions: item.promotions || [],
      ribbons: item.ribbons || [],
      stock: item.stock || 0,
    };
  });

  return formattedData;
}
