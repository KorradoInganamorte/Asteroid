"use client"

import { useGetAsteroidQuery } from '@/services/asteroid'
import { useState } from 'react'

import "./globals.sass"
import Card from '@/components/Card'
import Detail from '@/components/Detail'
import Filter from '@/UI/Filter'

const Home = () => {
  const [dataAsteroid, setDataAsteroid] = useState<string>("2015-09-10")
  const { data, error, isLoading, isSuccess } = useGetAsteroidQuery({ start_date: dataAsteroid, end_date: dataAsteroid })

  // const filter = useContext(FilterContext)
  const [filter, setFilter] = useState("")

  return (
    <div className='max-w-[1920px] mx-auto px-[3rem] py-[2.5rem]'>

    <Detail element_count={data?.element_count} isSuccess={isSuccess} data={dataAsteroid} setData={setDataAsteroid}></Detail>

    <Filter data={filter} setData={setFilter}></Filter>

    {isLoading ? (
      <h3 className='text-3xl'>Loading Asteroid...</h3>
    ) : (
      isSuccess && data?.near_earth_objects[dataAsteroid] ? (
        data?.near_earth_objects[dataAsteroid].map((asteroid) => {
            return (
                <Card key={asteroid.id} data={dataAsteroid} name={asteroid.name} id={asteroid.id} magnitude={asteroid.absolute_magnitude_h} hazardous={asteroid.is_potentially_hazardous_asteroid} orbity={asteroid.close_approach_data[0].orbiting_body} diameter={asteroid.estimated_diameter} closeData={asteroid.close_approach_data[0]}></Card>
            )
        })
      ) : (
        <h3 className='text-3xl'>Please wait...</h3>
      )
    )}

    </div>
  )
}

export default Home