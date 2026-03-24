import type { LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type TransactionCardProps = {
  icon: LucideIcon
  name: string
  subtitle: string
  amount: string
  subAmount?: string
  isCredit?: boolean
  className?: string
}

function TransactionCard({
  icon: Icon,
  name,
  subtitle,
  amount,
  subAmount,
  isCredit = false,
  className,
}: TransactionCardProps) {
  return (
    <Card className={cn("group gap-0 rounded-md py-0 transition-colors duration-500 ease-out hover:bg-muted", className)}>
      <CardContent className="flex items-center gap-4 px-4 py-3">
        <div className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
          <Icon className="relative z-10 size-5 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          {subAmount && (
            <p className="text-xs text-muted-foreground">{subAmount}</p>
          )}
        </div>
        <p className={cn("shrink-0 text-right font-medium", isCredit && "text-primary-foreground")}>
          {amount}
        </p>
      </CardContent>
    </Card>
  )
}

export { TransactionCard }
