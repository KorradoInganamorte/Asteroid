import AsteroidAllInformation from '@/types/Asteroid'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const asteroidApi = createApi({
  reducerPath: 'asteroidApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getAsteroid: builder.query<AsteroidAllInformation, { start_date: string, end_date: string }>({
      query: ({ start_date, end_date }) => `/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=Uez3xMpqDPdtzB9lFkHGWxFk2og1Hp0lfPyPXD96`,
    }),
  }),
})

export const { useGetAsteroidQuery } = asteroidApi