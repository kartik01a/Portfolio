import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function hasPortrait() {
  return fs.existsSync(path.join(process.cwd(), "public/images/profile/kartik.png"));
}

export function Portrait({
  priority = false,
  large = false,
  fill = false,
  className,
}: {
  priority?: boolean;
  large?: boolean;
  fill?: boolean;
  className?: string;
}) {
  if (!hasPortrait()) return null;
  if (fill) {
    return (
      <Image
        src="/images/profile/kartik.png"
        alt={`${site.name}, full-stack and AI developer`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 380px, 100vw"
        className={cn("object-cover object-[center_18%]", className)}
      />
    );
  }
  return (
    <Image
      src="/images/profile/kartik.png"
      alt={`${site.name}, full-stack and AI developer`}
      width={large ? 880 : 640}
      height={large ? 1100 : 800}
      priority={priority}
      className={cn(
        "h-auto w-full rounded-[18px] object-cover shadow-[0_12px_40px_rgba(17,19,24,0.08)]",
        className,
      )}
    />
  );
}
