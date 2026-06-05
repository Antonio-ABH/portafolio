export type Step = {
  type: "command" | "output" | "prompt";
  text: string;
  color?: string;
};