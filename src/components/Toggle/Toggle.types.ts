export type ToggleProps = {
  value: boolean;
  dark?: boolean;
  onValueChange: (value: boolean) => void;
  backgroundColor?: string | { true: string; false: string };
  thumbColor?: string;
};
