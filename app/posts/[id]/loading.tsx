import { Loader2 } from "lucide-react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  )
}