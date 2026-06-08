export interface SortConfig {
  method: string;
  reverse?: boolean;
  ignore_case?: boolean;
  attribute?: string;
  first?: number;
  count?: number;
  numeric?: boolean;
  ip?: boolean;
}

interface FilterConfig {
  domain?: string;
  entity_id?: string;
  state?: string;
  name?: string;
  group?: string;

  area?: string;
  device?: string;
  device_manufacturer?: string;
  device_model?: string;

  attributes?: Record<string, string>;

  last_changed?: string | number;
  last_updated?: string | number;
  last_triggered?: string | number;

  entity_category?: string;
  integration?: string;
  hidden_by?: string;

  not?: FilterConfig;
  or?: FilterConfig[];

  options?: any;
  sort?: SortConfig;
  type?: string;
}

export interface AutoEntitiesConfig {
  card: any;
  entities: Array<LovelaceRowConfig | string>;
  filter: {
    template?: string;
    include?: FilterConfig[];
    exclude?: FilterConfig[];
  };

  card_param?: string;

  show_empty?: boolean;
  else?: any;
  unique?: boolean | string;
  sort?: any;

  // Separators between generated cards (works with stack/grid children)
  separator?: boolean;
  separator_top?: boolean;      // also draw a line above the first card
  separator_bottom?: boolean;   // also draw a line below the last card
  separator_style?: string;     // CSS border value, default "1px solid var(--divider-color)"
  separator_selector?: string;  // child selector, default "#root > *"

  entity_ids?: any[];
}

export interface LovelaceRowConfig {
  entity?: string;
  type?: string;
}
export interface LovelaceCard extends HTMLElement {
  hass: any;
  setConfig(config: any): void;
  getCardSize?(): number;
}
export interface HuiErrorCard extends LovelaceCard {
  _config: any;
}

export interface HAState {
  entity_id: string;
  state: string;
  attributes?: Record<string, any>;
  last_changed: number;
  last_updated: number;
}

export interface HassObject {
  states: HAState[];
  callWS: (_: any) => any;
  formatEntityState: (stateObj, state?) => string;
  formatEntityAttributeValue: (stateObj, attribute, value?) => string;
  formatEntityAttributeName: (stateObj, attribute) => string;
}

export type MatchValue = string | number;

export type EntityList = Array<LovelaceRowConfig>;

export interface CardEntity {}
