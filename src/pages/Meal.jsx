import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { FixedInstructions, Loader, Submenu } from '../components'
//icons
import { RiArrowGoBackFill } from 'react-icons/ri'

const Meal = () => {
    const { mealId } = useParams()
    const { openSubmenu, isSubmenuOpen, closeSubmenu } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const [meal, setMeal] = useState({})
    const [more, setMore] = useState(false)
    const navigate = useNavigate()
    const fetchMeal = useCallback(async () => {
        setLoading(true)
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        const { meals } = await response.json()
        if (meals) {
            const {
                strMeal: name,
                strCategory: category,
                strArea: area,
                strInstructions: instructions,
                strMealThumb: image,
                strYoutube: video,
            } = meals[0]
            let ingredients = []
            let ingredientCount = 1
            while (meals[0][`strIngredient${ingredientCount}`]) {
                const ingredient = meals[0][`strIngredient${ingredientCount}`]
                const measure = meals[0][`strMeasure${ingredientCount}`]
                ingredients.push({ ingredient, measure })
                ingredientCount++
            }
            const newMeal = {
                name,
                category,
                area,
                instructions,
                image,
                video,
                ingredients
            }
            setMeal(newMeal)
        } else {
            setMeal({})
        }
        setLoading(false)
    }, [mealId])
    useEffect(() => {
        fetchMeal()
    }, [fetchMeal])
    const displaySubmenu = (e, measure) => {
        const { left, right } = e.target.getBoundingClientRect()
        const center = (left + right) / 2
        const top = e.target.getBoundingClientRect().top
        openSubmenu(measure, { center, top })
    }

    const { name, category, area, instructions, image, video, ingredients } = meal
    return (
        <div className='bg-custom-bg h-screen flex justify-center items-center relative'>
            {loading ? (
                <Loader />
            ) : (
                <div className='max-w-[65%] flex flex-col gap-20 max-lg:gap-10 max-sm:gap-5 max-md:max-w-[90%]'>
                    <div className='flex items-center flex-wrap justify-between gap-8 max-lg:gap-4 relative py-8 pr-12 pl-40 max-lg:pl-20 max-md:py-4 max-md:px-8 rounded-lg shadow-xl bg-[#fff]'>
                        <div className='flex items-center gap-8 max-lg:gap-4 flex-wrap'>
                            <img src={image} alt={name} className='absolute max-md:hidden size-52 max-lg:size-40 max-md:size-32 top-1/2 -left-24 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-top-10 -translate-y-1/2 rounded-full border-[4px] border-main-color' />
                            <h1 className='text-3xl font-semibold max-lg:text-2xl mx-auto text-center'>{name}</h1>
                            <div className='flex items-center gap-8 max-lg:gap-4 max-sm:mx-auto'>
                                <p className='bg-[#7e342a] hover:bg-custom-red text-white px-4 py-2 rounded-lg text-xs cursor-pointer'>{category}</p>
                                <p className='bg-[#7e342a] hover:bg-custom-red text-white px-4 py-2 rounded-lg text-xs cursor-pointer'>{area}</p>
                            </div>
                        </div>
                        <div className='max-sm:mx-auto'>
                            {video && <button
                                className='font-semibold shadow-md rounded-lg px-3 py-1.5 bg-[#f5bb74] hover:bg-main-color text-[#fff]'
                                onClick={() => window.open(video)}
                            >
                                Video
                            </button>}
                        </div>
                    </div>
                    <div className='py-8 px-12 max-md:py-4 max-md:px-8 rounded-lg shadow-2xl bg-[#fff]'>
                        <div>
                            <h1 className='text-custom-red text-2xl max-lg:text-lg font-medium pb-2 border-b-2'>Instructions</h1>
                            <p className='leading-7 mt-2 max-lg:text-sm'>
                                {instructions?.length > 300 && (
                                    <>
                                        {`${instructions.slice(0, 300)} ...`}
                                        <button className='ml-2 text-xs max-sm:text-[0.5rem] bg-gray-200 px-2 py-1 rounded font-medium hover:bg-gray-300'
                                            onClick={() => setMore(!more)}
                                        >
                                            Show More
                                        </button>
                                    </>
                                )}
                            </p>
                        </div>
                        <div className='mt-2'>
                            <h1 className='text-custom-red text-2xl max-lg:text-lg font-medium pb-2 border-b-2'>Ingredients</h1>
                            <div className='flex gap-3 max-sm:gap-1 mt-2 flex-wrap' onMouseLeave={() => closeSubmenu(false)}>
                                {ingredients?.map((item, index) => {
                                    const { ingredient, measure } = item
                                    return (
                                        <div key={index} className='bg-[#7e342a] hover:bg-custom-red text-white whitespace-nowrap px-2 py-1 rounded-lg max-lg:text-sm max-sm:text-xs' onMouseOver={(e) => displaySubmenu(e, measure)}>
                                            {ingredient}
                                        </div>
                                    )
                                })}
                                {isSubmenuOpen && <Submenu />}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {more &&
                <FixedInstructions instructions={instructions} setMore={setMore} />
            }
            <div className='absolute left-5 top-5'>
                <RiArrowGoBackFill className='size-6 hover:text-main-color cursor-pointer'
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    )
}
export default Meal
