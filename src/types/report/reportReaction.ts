export type ReportReaction = "HELPFUL" | "INCORRECT" | null;

export type ReportReactionType = Exclude<ReportReaction, null>;

export interface ReportReactionResult {
  helpful_count: number;
  incorrect_count: number;
  my_reaction: ReportReaction;
}
