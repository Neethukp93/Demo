export interface ErrorMessage {
  severity?: string;
  summary?: string;
  detail?: string;
  action?: string;
  otherAction?: string;
  id?: any;
  key?: string;
  sticky?: boolean;
  closable?: boolean;
  data?: any;
  fatal?: boolean;
}
