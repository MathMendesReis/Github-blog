import { useQuery } from '@tanstack/react-query'
import { api } from './axios'
import { AxiosResponse } from 'axios'
import { User } from '../types/profile-api'
export default function useProfile() {
  const fetcher = async (): Promise<AxiosResponse<User>> => {
    const response = await api.get('/users/MathMendesReis')
    return response
  }
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: () => fetcher(),
  })

  const response = data?.data

  return { response }
}
