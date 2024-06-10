import FoodData from '@/src/shared/components/data/food.data'

const Page = () => {
    return (
        <div className="md:w-[90%] xl:w-[75%] m-auto">
          <h1 className="text-4xl text-center pt-3">All Foods</h1>
          <FoodData />
        </div>
    )
}

export default Page