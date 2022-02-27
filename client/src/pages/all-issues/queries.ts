import apiService from 'utils/api-service'

export async function fetchIssues() {
  const { data } = await apiService.issuesControllerGetIssues()
  return data
}
