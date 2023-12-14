export default interface AsteroidAllInformation {
    element_count: number,
    links: {
        next: string,
        previous: string
        self: string
    },
    near_earth_objects: {
        [data: string]: Asteroid[]
    }
}

interface Asteroid {
    absolute_magnitude_h: number,
    close_approach_data: Close_Data[],
    estimated_diameter: Diameter,
    id: string,
    is_potentially_hazardous_asteroid: boolean,
    is_sentry_object: boolean,
    links: {
        self: string
    },
    name: string,
    nasa_jpl_url: string,
    neo_reference_id: string
}

export interface Diameter {
    feet: {
        estimated_diameter_max: number,
        estimated_diameter_min: number
    },
    kilometers: {
        estimated_diameter_max: number,
        estimated_diameter_min: number
    },
    meters: {
        estimated_diameter_max: number,
        estimated_diameter_min: number
    },
    miles: {
        estimated_diameter_max: number,
        estimated_diameter_min: number
    }
}

export interface Close_Data {
    close_approach_date: string,
        close_approach_date_full: string,
        epoch_date_close_approach: number,
        miss_distance: {
            astronomical: string,
            kilometers: string,
            lunar: string,
            miles: string
        },
        orbiting_body: string,
        relative_velocity: {
            kilometers_per_hour: string,
            kilometers_per_second: string,
            miles_per_hour: string
        }
}