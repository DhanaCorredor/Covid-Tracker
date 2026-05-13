import { CovidTable } from '../components/covidTable/CovidTable'

export const Tracker2 = () => {
    return (
        <div className='bg-neutral-0 p-2 h-full overflow-hidden'>
            <div className='border-b border-border-strong pb-4'>
                <h1 className='text-text-primary font-semibold text-heading-sm'>
                    Ajax Data Table-Covid-19 Country Wise State
                </h1>
            </div>
            <div className='mt-1'>
                <CovidTable />
            </div>
        </div>
    )
}