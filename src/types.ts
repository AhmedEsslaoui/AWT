interface TooltipItem {
  text: string;
  tooltip: string;
}

type ListItem = string | TooltipItem;

export interface Phase {
  level: number;
  awt: string;
  conditions: ListItem[];
  actions?: string[];
  actionsRequired?: string[];
  titles?: {
    phase: string;
    conditions: string;
    actions?: string;
    actionsRequired?: string;
  };
}

export interface Team {
  name: string;
  phases: Phase[];
  important: string[];
  titles?: {
    important: string;
  };
}
