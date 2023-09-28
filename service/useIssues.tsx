/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { api } from './axios'
import { AxiosResponse } from 'axios'
import useFilter from '../hooks/useFilter'
import { Issues } from '../types/profile-api'

const path = '/repos/MathMendesReis/Github-blog/issues'
const fecther = async (): Promise<AxiosResponse<Issues[]>> => {
  const url: string = path
  return await api.get(url)
}
export default function useIssues() {
  const { search } = useFilter()
  const { data } = useQuery({
    queryFn: () => fecther(),
    queryKey: ['issues'],
  })

  const responseIssues = data?.data.filter((issue) =>
    issue.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  )
  return { responseIssues }
}
