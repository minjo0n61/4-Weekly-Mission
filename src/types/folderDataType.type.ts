export interface FolderDataType {
  created_at?: string;
  favorite?: boolean;
  id: number | string;
  link?: { [key: string]: number };
  name: string;
  user_id?: number;
}
export interface FolderList {
  id: string;
  name: string;
}
