export interface ApiResponse {
    tfa: Tfa;
    mostread: MostRead;
    image: Image;
    news: NewsItem[];
    onthisday: OnThisDay[];
  }
  
  export interface Tfa {
    type: string;
    title: string;
    displaytitle: string;
    namespace: Namespace;
    wikibase_item: string;
    titles: Titles;
    pageid: number;
    thumbnail: ImageDetails;
    originalimage: ImageDetails;
    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;
    content_urls: ContentUrls;
    extract: string;
    extract_html: string;
    normalizedtitle: string;
  }
  
  export interface MostRead {
    date: string;
    articles: Article[];
  }
  
  export interface Article {
    views?: number;
    rank?: number;
    view_history?: ViewHistory[];
    type: string;
    title: string;
    displaytitle: string;
    namespace: Namespace;
    wikibase_item: string;
    titles: Titles;
    pageid: number;
    thumbnail: ImageDetails;
    originalimage: ImageDetails;
    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;
    content_urls: ContentUrls;
    extract: string;
    extract_html: string;
    normalizedtitle: string;
  }
  
  export interface Image {
    title: string;
    thumbnail: ImageDetails;
    image: ImageDetails;
    file_page: string;
    artist: Artist;
    credit: Credit;
    license: License;
    description: Description;
    wb_entity_id: string;
    structured: Structured;
  }
  
  export interface ImageDetails {
    source: string;
    width: number;
    height: number;
  }
  
  export interface Artist {
    html: string;
    text: string;
    name: string;
    user_page: string;
  }
  
  export interface Credit {
    html: string;
    text: string;
  }
  
  export interface License {
    type: string;
    code: string;
    url: string;
  }
  
  export interface Description {
    html: string;
    text: string;
    lang: string;
  }
  
  export interface Structured {
    captions: Record<string, any>; // A placeholder for structured captions
  }
  
  export interface NewsItem {
    links: Link[];
    story: string;
  }
  
  export interface Link {
    type: string;
    title: string;
    displaytitle: string;
    namespace: Namespace;
    wikibase_item: string;
    titles: Titles;
    pageid: number;
    thumbnail: ImageDetails;
    originalimage: ImageDetails;
    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;
    content_urls: ContentUrls;
    extract: string;
    extract_html: string;
    normalizedtitle: string;
  }
  
  export interface Namespace {
    id: number;
    text: string;
  }
  
  export interface Titles {
    canonical: string;
    normalized: string;
    display: string;
  }
  
  export interface ContentUrls {
    desktop: Urls;
    mobile: Urls;
  }
  
  export interface Urls {
    page: string;
    revisions: string;
    edit: string;
    talk: string;
  }
  
  export interface ViewHistory {
    date: string;
    views: number;
  }
  
  export interface OnThisDay {
    text: string;
    pages: OnThisDayPage[];
    year: number;
  }
  
  export interface OnThisDayPage {
    type: string;
    title: string;
    displaytitle: string;
    namespace: Namespace;
    wikibase_item: string;
    titles: Titles;
    pageid: number;
    thumbnail: ImageDetails;
    originalimage: ImageDetails;
    lang: string;
    dir: string;
    revision: string;
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;
    content_urls: ContentUrls;
    extract: string;
    extract_html: string;
    normalizedtitle: string;
  }