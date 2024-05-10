"use client";

export default function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-end">
        <span className="flex items-center bg-background px-2 text-sm text-muted-foreground">{children}</span>
      </div>
    </div>
  );
}
