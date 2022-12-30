import * as zod from 'zod'
import { confirmOrderFormValidationSchema } from '.'

export type ConfirmOrderForData = OrderData

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>
