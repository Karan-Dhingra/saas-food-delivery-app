import RevenueChart from '@/src/shared/components/charts/revenue.charts'

const Page = () => {
    return (
        <div className="w-full">
          <h1 className="text-4xl text-center pt-10">Revenue Analytics</h1>
           <RevenueChart />
        </div>
    )
}

export default Page