import { Spinner } from "@/src/components/ui/spinner";
import { Skeleton } from "@/src/components/ui/skeleton";
import { cn } from "@/lib/utils";


export default function Loading() {
  return (
    <div className="grid place-items-center w-full py-4">
      <div className="w-full flex items-center justify-center gap-6">
        {Array(3).fill(0).map((item, key) => (
          <Skeleton key={key} className="w-63 h-66.5 border rounded-xl"/>
        ))}
      </div>
    </div>
  )
}