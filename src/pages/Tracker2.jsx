import React from 'react'
import { ControlsTable } from '../components/covidTable/ControlsTable'
import { CovidTable } from '../components/covidTable/CovidTable'

export const Tracker2 = () => {
    return (

        <div className='bg-neutral-0'>
            <div className='border-b border-neutral-200 pb-md'>
                <h1 className='text-blue-950 font-semibold  '>Ajax Data Table-Covid-19 Conuntry Wise State</h1>
            </div>
            <div className='m-5'>

                <ControlsTable></ControlsTable>
                <CovidTable></CovidTable>
            </div>
        </div>
    )
}
