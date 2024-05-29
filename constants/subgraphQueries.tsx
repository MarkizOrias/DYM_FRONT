import { gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
{
  memeCreateds(orderBy: MemeProcessManager_id) {
    id
    MemeProcessManager_id
    creator
    name
  }
  memeFundeds(orderBy: MemeProcessManager_id) {
    id
    MemeProcessManager_id
    funder
    value
  }
}
`

export default GET_ACTIVE_ITEMS
