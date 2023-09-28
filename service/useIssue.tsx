/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { api } from './axios'
import { AxiosResponse } from 'axios'
import { Issues } from '../types/profile-api'

const path = '/repos/MathMendesReis/Github-blog/issues'
const fecther = async (number: string): Promise<AxiosResponse<Issues[]>> => {
  const url: string = `${path}/${number}`
  return await api.get(url)
}

export default function useIssue(number: string) {
  const { data } = useQuery({
    queryFn: () => fecther(number),
    queryKey: ['issue', number],
  })

  const responseIssue = data?.data as unknown as Issues
  return { responseIssue }
}
