
export interface repository {
  name?: string;
  avatar_url?: string;
  ownerName?: string;
}

export interface repositoriesResponse {
  total_count : number;
  repositories : repository[]
}
