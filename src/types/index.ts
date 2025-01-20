export interface Phase {
  level: number;
  awt: string;
  conditions: string[];
  actions: string[];
}

export interface TeamPlan {
  name: string;
  phases: Phase[];
  important: string[];
}