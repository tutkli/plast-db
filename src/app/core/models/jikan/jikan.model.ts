export interface JikanResponse {
  data: JikanData[];
  pagination?: JikanPagination;
}

export interface JikanData {
  [key: string]: unknown;
  mal_id: number;
}

export interface JikanPagination {
  last_visible_page: number;
  has_next_page: boolean;
  items: JikanPaginationItems;
}

export interface JikanPaginationItems {
  count: number;
  total: number;
  per_page: number;
}
