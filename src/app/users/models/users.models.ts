export interface Pagination {
  count: number;
  hasMoreItems: boolean;
  totalItems: number;
  skipCount: number;
  maxItems: number;
}

export interface Company {
  organization?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  postcode?: string;
}

export interface Entry {
  lastName?: string;
  userStatus?: string;
  jobTitle?: string;
  statusUpdatedAt?: string;
  mobile?: string;
  emailNotificationsEnabled: boolean;
  description?: string;
  telephone?: string;
  enabled: boolean;
  firstName: string;
  skypeId?: string;
  avatarId?: string;
  location?: string;
  company: Company;
  id: string;
  email?: string;
}

export interface Entries {
  entry: Entry;
}

export interface List {
  pagination: Pagination;
  entries: Entries[];
}

export interface Users {
  list: List;
}
