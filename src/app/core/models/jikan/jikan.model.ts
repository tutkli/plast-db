interface JikanResponse {
  data: JikanData[];
  pagination?: JikanPagination;
}

interface JikanData {
  [key: string]: any;
  mal_id: number;
}

interface JikanPagination {
  last_visible_page: number;
  has_next_page: boolean;
  items: JikanPaginationItems;
}

interface JikanPaginationItems {
  count: number;
  total: number;
  per_page: number;
}

export { JikanResponse, JikanData, JikanPagination, JikanPaginationItems };
