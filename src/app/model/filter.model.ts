
export interface FilterOption {
  id: number;
  name: string;
  parentId?: number;
}

export interface FilterConfig {
  name: string;
  displayName: string;
  options?: FilterOption[];
  parent?: string;
  value?: number | null;
  visible?: boolean;
  disabled?: boolean;
}
