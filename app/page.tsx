"use client"

import { useGetAsteroidQuery } from '@/services/asteroid'
import { useState } from 'react'

import "./globals.sass"
import Card from '@/components/Card'
import Detail from '@/components/Detail'
import Button from '@/UI/Button'

const Home = () => {
  const [dataAsteroid, setDataAsteroid] = useState<string>("2015-09-10")
  // Изначальное количество метеоритов, которое нужно вывести на страницу
  const [shownMeteorites, setShownMeteorites] = useState<number>(5)
  // отправляем запрос к API с данными который ввел пользователь, end_date = start_date, чтоюы метеориты приходили за один день, а не за какой-то промежуток времени
  const { data, error, isLoading, isSuccess } = useGetAsteroidQuery({ start_date: dataAsteroid, end_date: dataAsteroid })

  const showMore = () => {
    setShownMeteorites(prev => prev + 5) // Увеличить количество отображаемых метеоритов на 5 при нажатии на кнопку
  }

  return (
    <div className="max-w-[1920px] mx-auto px-[3rem] py-[2.5rem]">
      <Detail
        element_count={data?.element_count}
        isSuccess={isSuccess}
        data={dataAsteroid}
        setData={setDataAsteroid}
        setMeteorits={setShownMeteorites}
      ></Detail>

      {isLoading ? (
        <h3 className="text-3xl">Loading Asteroid...</h3>
      ) : isSuccess && data?.near_earth_objects[dataAsteroid] ? (
        data?.near_earth_objects[dataAsteroid]
          .slice(0, shownMeteorites)
          .map((asteroid) => {
            return (
              <Card
                key={asteroid.id}
                data={dataAsteroid}
                name={asteroid.name}
                id={asteroid.id}
                magnitude={asteroid.absolute_magnitude_h}
                hazardous={asteroid.is_potentially_hazardous_asteroid}
                orbity={asteroid.close_approach_data[0].orbiting_body}
                diameter={asteroid.estimated_diameter}
                closeData={asteroid.close_approach_data[0]}
              ></Card>
            );
          })
      ) : (
        <h3 className="text-3xl">Please wait...</h3>
      )}

      {isLoading ? (<></>) : 
        isSuccess &&
        shownMeteorites < data?.element_count ? (
          <div className="flex justify-center w-full border-t border-black py-[2.5rem]">
            <Button name="See more" onClick={showMore}></Button>
          </div>
        ) : (<></>)
      }
    </div>
  );
}

export default Home