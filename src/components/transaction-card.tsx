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
    <Card className={cn("gap-0 rounded-md py-0 transition-colors hover:bg-[#ECEDE8]", className)}>
      <CardContent className="flex items-center gap-4 px-4 py-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
          <Icon className="size-5 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          {subAmount && (
            <p className="text-xs text-muted-foreground">{subAmount}</p>
          )}
        </div>
        <p className={cn("shrink-0 text-right font-medium", isCredit && "text-primary")}>
          {amount}
        </p>
      </CardContent>
    </Card>
  )
}

export { TransactionCard }
