import { request } from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function getMessageList (params) {
    return request(`/api/getMessageList?${formatParam(params)}`)
}
