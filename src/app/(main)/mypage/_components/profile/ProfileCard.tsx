import { Pencil, LogOutIcon } from "lucide-react";

import type { Profile } from "@/src/types/mypage";
import StatCard from "./StatCard";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
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

          <button className="text-deep-gray flex items-center gap-1 text-xs font-bold">
            <LogOutIcon size={14} />
            로그아웃
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <StatCard
            label="기록한 시장"
            value={profile.recordedMarketCount}
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
  );
}
