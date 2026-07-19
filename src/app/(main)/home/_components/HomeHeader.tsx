type HomeHeaderProps = {
  userName: string;
};

export default function HomeHeader({ userName }: HomeHeaderProps) {
  return (
    <header className="flex flex-col gap-1">
      <p className="text-green text-xs font-bold">GANGWON PROVINCE</p>

      <h1 className="text-green text-lg font-bold">
        {userName}님, <br />
        오늘은 어느 <span className="text-light-brown">전통 장터</span>로
        떠나볼까요?
      </h1>
    </header>
  );
}
