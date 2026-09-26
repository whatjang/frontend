"use client";

import { ReportActions } from "@/src/components/report/ReportActions";
import type { ReportDetailComment, ReportReaction } from "@/src/types/report";

import { mapReportComments } from "../_utils/mapReportComments";
import { CommentSection } from "./CommentSection";

interface ReportInteractionSectionProps {
  reportId: number;
  helpfulCount: number;
  commentCount: number;
  incorrectCount: number;
  myReaction: ReportReaction;
  comments: ReportDetailComment[];
}

export function ReportInteractionSection({
  reportId,
  helpfulCount,
  commentCount,
  incorrectCount,
  myReaction,
  comments,
}: ReportInteractionSectionProps) {
  const mappedComments = mapReportComments(comments);

  return (
    <>
      <ReportActions
        reportId={reportId}
        helpfulCount={helpfulCount}
        commentCount={commentCount}
        incorrectCount={incorrectCount}
        initialReaction={myReaction}
        className="pl-5"
      />

      <CommentSection
        reportId={reportId}
        comments={mappedComments}
        totalCount={commentCount}
      />
    </>
  );
}
