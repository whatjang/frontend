"use client";

import { useState } from "react";

import { ReportActions } from "@/src/components/reports/ReportActions";
import type { ReportDetailComment, ReportReaction } from "@/src/types/report";

import { mapReportComments } from "../_utils/mapReportComments";
import { CommentSection } from "./CommentSection";

interface ReportInteractionSectionProps {
  helpfulCount: number;
  commentCount: number;
  incorrectCount: number;
  myReaction: ReportReaction;
  comments: ReportDetailComment[];
}

export function ReportInteractionSection({
  helpfulCount,
  commentCount,
  incorrectCount,
  myReaction,
  comments,
}: ReportInteractionSectionProps) {
  const [currentCommentCount, setCurrentCommentCount] = useState(commentCount);

  const mappedComments = mapReportComments(comments);

  const handleCommentCreated = () => {
    setCurrentCommentCount((prev) => prev + 1);
  };

  return (
    <>
      <ReportActions
        helpfulCount={helpfulCount}
        commentCount={currentCommentCount}
        incorrectCount={incorrectCount}
        initialReaction={myReaction}
        className="pl-5"
      />

      <CommentSection
        comments={mappedComments}
        totalCount={currentCommentCount}
        onCommentCreated={handleCommentCreated}
      />
    </>
  );
}
