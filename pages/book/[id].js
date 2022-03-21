import {Box} from "@mui/material";
import BookHeader from "../../components/BookHeader";
import BookDescription from "../../components/BookDescription";
import apolloClient from "../../src/apollo-client";
import {GetBestSellersPage, GetBook, GetComingSoon, GetLatestPage} from "../../queries/API";


const BookPage = ({book}) => {
    return (
        <Box>
            <BookHeader {...book} />
            <BookDescription {...book} />
        </Box>
    )
}
export async function getServerSideProps({params}) {
    const {data} = await apolloClient.query(GetBook(params.id));
    return {
        props: {
            book: data.Media
        },
    };


}

export default BookPage;