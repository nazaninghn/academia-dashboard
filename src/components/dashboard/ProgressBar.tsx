type ProgressBarProps = {
  value: number;
  color: string;
};

export default function ProgressBar({ value, color }: ProgressBarProps) {
  return (
    <div className="h-[8px] w-full overflow-hidden rounded-full bg-white/50 shadow-inner ring-1 ring-inset ring-white/40">
      <div
        className="animate-shimmer h-full rounded-full transition-[width] duration-700 ease-out"
        style={{
          width: `${value}%`,
          backgroundImage: `linear-gradient(90deg, ${color}, ${color}cc, ${color})`,
          boxShadow: `0 0 10px -1px ${color}, inset 0 1px 0 rgba(255,255,255,0.4)`,
        }}
      />
    </div>
  );
}
