import { api } from '@/lib/axios'

export interface GetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMontOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponse>(
    '/metrics/moth-orders-amount',
  )

  return response.data
}
