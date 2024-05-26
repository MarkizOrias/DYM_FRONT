import { gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
{
    memeCreateds(orderBy: id) {
      id
      MemeProcessManager_id
      creator
      name
    }
    memeFundeds(orderBy: id) {
      id
      MemeProcessManager_id
      value
      blockNumber
    }
  }
`

export default GET_ACTIVE_ITEMS
