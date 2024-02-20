import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import all from './images/all.png'

const PER_PAGE = 12

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [scrolled, setScrolled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [areas, setAreas] = useState([])
    const [currentArea, setCurrentArea] = useState('All')
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState('All')
    const [list, setList] = useState([])
    const [currentList, setCurrentList] = useState([])
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        let handler = () => {
            if (window.scrollY >= 200) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handler)
    }, [])
    const getAreas = async () => {
        setLoading(true)
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        const data = await response.json()
        const areas = data.meals.map(area => ({
            text: area.strArea,
        }))
        areas.unshift({ text: 'All' })
        setAreas(areas)
        setLoading(false)
    }
    const getCategories = async () => {
        setLoading(true)
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data = await response.json()
        const categories = data.categories.map(category => ({
            id: category.idCategory,
            text: category.strCategory,
            image: category.strCategoryThumb,
        }))
        categories.unshift({
            id: 0,
            text: 'All',
            image: all,
        })
        setCategories(categories)
        setLoading(false)
    }
    const fetchCategory = async (category) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        const data = await response.json()
        return data.meals
    }
    const fetchCategoryData = useCallback(async () => {
        setLoading(true)

        // Fetch category data
        let categoryData = []
        if (currentCategory === 'All') {
            for (const cat of categories) {
                if (cat.text === 'All') continue
                const data = await fetchCategory(cat.text)
                categoryData = categoryData.concat(data)
            }
        } else {
            categoryData = await fetchCategory(currentCategory)
        }

        setLoading(false)
        setList(categoryData)
    }, [categories, currentCategory])
    //

    //

    // const fetchArea = async (area) => {
    //     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    //     const data = await response.json()
    //     return data.meals
    // }
    // const fetchAreaData = useCallback(async () => {
    //     setLoading(true)

    //     let areaData = []
    //     if (currentArea === 'All') {
    //         for (const ar of areas) {
    //             if (ar.text === 'All') continue
    //             const data = await fetchArea(ar.text)
    //             areaData = areaData.concat(data)
    //         }
    //     } else {
    //         areaData = await fetchArea(currentArea)
    //     }

    //     setLoading(false)
    //     setList(areaData)
    // }, [areas, currentArea])

    useEffect(() => {
        getAreas()
        getCategories()
    }, [])
    useEffect(() => {
        fetchCategoryData()
    }, [fetchCategoryData])
    useEffect(() => {
        setPages(Math.ceil(list.length / PER_PAGE))
        setCurrentPage(1)
    }, [list])
    useEffect(() => {
        const startIndex = (currentPage - 1) * PER_PAGE
        const endIndex = Math.min(startIndex + PER_PAGE, list.length)
        const current = list.slice(startIndex, endIndex)
        setCurrentList(current)
    }, [currentPage, list])
    // useEffect(() => {
    //     console.log(list)
    // }, [list])
    return (
        <AppContext.Provider value={{
            scrolled,
            loading,
            areas,
            categories,
            currentArea,
            currentCategory,
            currentList,
            currentPage,
            pages,
            setCurrentPage,
            setCurrentArea,
            setCurrentCategory,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

// const fetchArea = async (area) => {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
//     const data = await response.json()
//     return data.meals
// }
//that was a code that get all the food together but the api doesn't allow too many requests and at the same time it doesn't provide an api that returns back all the food so it wasn't worth to try more :)
// const fetchCategoryAndAreaData = async () => {
//     setLoading(true)

//     let categoryAndAreaData = []
//     // Fetch category data
//     let categoryData = []
//     if (currentCategory === 'All') {
//         for (const cat of categories) {
//             if (cat.text === 'All') continue
//             const data = await fetchCategory(cat.text)
//             categoryData = categoryData.concat(data)
//         }
//     } else {
//         categoryData = await fetchCategory(currentCategory)
//     }

//     // Fetch area data
//     let areaData = []
//     if (currentArea === 'All') {
//         for (const area of areas) {
//             if (area.text === 'All') continue
//             const data = await fetchArea(area.text)
//             areaData = areaData.concat(data)
//         }
//     } else {
//         areaData = await fetchArea(currentArea)
//     }
//     // Merge categoryData and areaData into categoryAndAreaData
//     categoryAndAreaData = categoryData.concat(areaData)

//     setLoading(false)
//     setList(categoryAndAreaData)
// }

//