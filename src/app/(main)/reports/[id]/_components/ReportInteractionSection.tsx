"use client";

import { useState } from "react";

import { ReportActions } from "@/src/components/reports/ReportActions";
import type { ReportComment } from "@/src/types/report";

import { CommentSection } from "./CommentSection";

interface ReportInteractionSectionProps {
  helpfulCount: number;
  commentCount: number;
  incorrectCount: number;
  comments: ReportComment[];
}

export function ReportInteractionSection({
  helpfulCount,
  commentCount,
  incorrectCount,
  comments,
}: ReportInteractionSectionProps) {
  const [currentCommentCount, setCurrentCommentCount] = useState(commentCount);

  const handleCommentCreated = () => {
    setCurrentCommentCount((prev) => prev + 1);
  };

  return (
    <>
      <ReportActions
        helpfulCount={helpfulCount}
        commentCount={currentCommentCount}
        incorrectCount={incorrectCount}
        className="pl-5"
      />

      <CommentSection
        comments={comments}
        totalCount={currentCommentCount}
        onCommentCreated={handleCommentCreated}
      />
    </>
  );
}
