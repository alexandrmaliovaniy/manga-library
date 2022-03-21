import {GetBestSellersPage, GetComingSoon, GetLatestPage} from "../queries/API";
import {useState} from "react";
import useInView from "react-cool-inview";
import apolloClient from "../src/apollo-client";

const categories = [
    {
        id: 0,
        name: "Best Seller",
        data: 'bestSellers',
        load: GetBestSellersPage,
        page: 1
    },
    {
        id: 1,
        name: "The Latest",
        data: 'latest',
        load: GetLatestPage,
        page: 1
    },
    {
        id: 2,
        name: "Coming Soon",
        data: 'comingSoon',
        load: GetComingSoon,
        page: 1
    }
]

export const useBooks = (media) => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const categoryInfo = categories[selectedCategory];
    const [categoryData, setCategoryData] = useState(media[categoryInfo.data]);

    const { observe } = useInView({
        onEnter: async () => {
            const res = await  apolloClient.query(categoryInfo.load(++categoryInfo.page));
            setCategoryData(data => ([...data, ...res.data.Page.media]));
            // console.log(data)
        }
    });



    const changeCategory = (categoryId = 0) => {
        setSelectedCategory(id => categoryId);
        setCategoryData(media[categories[categoryId].data])
    }

    return {
        categories, selectedCategory, changeCategory, observe,
        categoryData
    }

}