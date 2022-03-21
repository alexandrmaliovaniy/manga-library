import {gql} from "@apollo/client";

const GetPage = ({pageId = 1, sort = 'FAVOURITES_DESC', status = []}) => {
  const q = gql`
    query($pageId: Int! $status: [MediaStatus]) {
      Page(page: $pageId, perPage: 5) {
        media(status_in: $status type: MANGA ${sort && `sort: ${sort}` || ''}) {
          id
          title {
            userPreferred
          }
          averageScore
          genres
          favourites
          coverImage {
            extraLarge
            large
            medium
            color
          }
          staff(sort: RELEVANCE) {
            nodes {
              name {
                userPreferred
              }
            }
          }
        }
      }
    }`
  return {query: q, variables: {pageId, sort, status}};
}

export const GetBestSellersPage = (pageId = 1) => {
  return GetPage({pageId, sort: "FAVOURITES_DESC", status: ["FINISHED", "RELEASING", "CANCELLED", "HIATUS", "NOT_YET_RELEASED"]})
}

export const GetLatestPage = (pageId = 1) => {
  return GetPage({pageId, sort: "START_DATE_DESC", status: ["FINISHED", "RELEASING"]})
}

export const GetComingSoon = (pageId = 1) => {
  return GetPage({pageId, sort: "FAVOURITES_DESC", status: ["NOT_YET_RELEASED"]})
}

export const GetBook = (bookId = 0) => {
  const q = gql`query($bookId: Int) {
    Media(id: $bookId) {
      title {
        userPreferred
      }
      description
      staff(sort: RELEVANCE) {
            nodes {
              name {
                userPreferred
              }
            }
          }
      favourites
      status
      averageScore
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
    }
  }`
  return {query: q, variables: {bookId}};
}