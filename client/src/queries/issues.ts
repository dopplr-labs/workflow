import { CreateIssueDto } from 'api'
import apiService from 'utils/api-service'

export async function createIssue({
  title,
  status,
  description,
  estimate,
  priority,
}: CreateIssueDto) {
  const { data } = await apiService.issuesControllerAddIssue({
    title,
    status,
    description,
    estimate,
    priority,
  })
  return data
}
