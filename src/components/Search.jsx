import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../components'
//icons
import { IoIosSearch } from 'react-icons/io'

const Search = ({ setIsSearchOpen, isSearchOpen }) => {
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [meals, setMeals] = useState([])
    const abortController = useRef(null)
    const inputRef = useRef(null)
    const navigate = useNavigate()
    const handleSearchClick = (e) => {
        setIsSearchOpen(!isSearchOpen)
        e.target.classList.toggle('scale-animation')
    }
    useEffect(() => {
        const handler = (e) => {
            if (!formRef.current?.contains(e.target)) setIsSearchOpen(false)
        }
        document.addEventListener('mousedown', handler)
    })
    const handleSubmit = (e) => {

        e.preventDefault()
    }
    const searchMealByLetter = async (letter) => {
        setLoading(true)
        if (abortController.current) abortController.current.abort()
        const controller = new AbortController()
        abortController.current = controller
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`, {
                signal: controller.signal
            })
            setMeals(response.data.meals)
        } catch (error) {
            if (!axios.isCancel(error)) {
                console.log('error fetching the API' + error)
            }
        }
        setLoading(false)
    }
    const searchMealByName = async (name) => {
        setLoading(true)
        if (abortController.current) abortController.current.abort()
        const controller = new AbortController()
        abortController.current = controller
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`, {
                signal: controller.signal
            })
            setMeals(response.data.meals)
        } catch (error) {
            if (!axios.isCancel(error)) {
                console.log('error fetching the API' + error)
            }
        }
        setLoading(false)
    }
    useEffect(() => {
        if (searchTerm.length === 1) {
            searchMealByLetter(searchTerm)
        } else if (searchTerm.length > 1) {
            searchMealByName(searchTerm)
        } else {
            setMeals([])
        }

        return () => abortController.current && abortController.current.abort()
    }, [searchTerm])
    useEffect(() => {
        !isSearchOpen && setSearchTerm('')
    }, [isSearchOpen])
    return (
        <form className='flex items-center gap-2 relative' ref={formRef} onSubmit={handleSubmit}>
            <input type='text' ref={inputRef} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={`absolute right-10 bg-transparent outline-none text-white h-9 border-2 border-x-0 transition-all ease-in ${!isSearchOpen ? 'w-0' : 'w-[17rem] max-sm:w-[10rem]'}`} />
            <IoIosSearch className='size-6 cursor-pointer text-white hover:text-main-color' onClick={handleSearchClick} />
            <div className='absolute right-10 top-12 w-[17rem] max-sm:w-[10rem] max-h-64 overflow-y-scroll'>
                {loading ? (
                    <Loader />
                ) : (
                    meals?.map(meal => {
                        const { idMeal, strMeal } = meal
                        return (
                            <div key={idMeal} className='h-9 bg-navbar-main flex items-center p-2 text-white border-b border-b-white hover:bg-navbar-scroll cursor-pointer max-sm:text-xs'
                                onClick={() => navigate(`meals/${idMeal}`)}
                            >
                                {strMeal.length > 25 ? `${strMeal.substring(0, 25)}...` : strMeal}
                            </div>
                        )
                    })
                )}
            </div>
        </form>
    )
}

export default Search
