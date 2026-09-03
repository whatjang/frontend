"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { LogOutIcon, Pencil, Trash2 } from "lucide-react";

import { useLogout } from "../../_hooks/useLogout";
import type { Profile } from "@/src/types/mypage";

import DeleteModal from "./DeleteModal";
import StatCard from "./StatCard";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const router = useRouter();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { logout, isLoggingOut } = useLogout();

  const handleDeleteAccount = () => {
    alert("회원 탈퇴가 완료되었습니다.");
    setIsDeleteModalOpen(false);
    router.replace("/");
  };

  return (
    <>
      <section>
        <div className="shadow-deep-gray flex flex-col gap-3 rounded-xl bg-white/20 p-4 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-deep-gray border-green h-13 w-13 rounded-full border" />

                <span className="bg-green absolute -right-1 -bottom-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-white">
                  <Pencil size={13} />
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold">{profile.nickname} 님</h2>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={logout}
                disabled={isLoggingOut}
                className="text-deep-gray flex cursor-pointer items-center gap-1 text-xs font-bold disabled:cursor-not-allowed disabled:opacity-50"
              >
                <LogOutIcon size={14} />
                {isLoggingOut ? "로그아웃 중..." : "로그아웃"}
              </button>

              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(true)}
                className="text-red flex cursor-pointer items-center gap-1 text-xs font-medium"
              >
                <Trash2 size={13} />
                회원탈퇴
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard
              label="즐겨찾는 시장"
              value={profile.favoriteMarketCount}
              unit="곳"
            />

            <StatCard
              label="제보 횟수"
              value={profile.reportCount}
              unit="회"
              highlighted
            />
          </div>
        </div>
      </section>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteAccount}
        title="정말 탈퇴하시겠어요?"
        description="탈퇴하면 계정 정보와 작성한 기록을 복구하기 어려울 수 있어요."
      />
    </>
  );
}
