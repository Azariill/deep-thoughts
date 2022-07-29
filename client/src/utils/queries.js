// import graphql into the document
import {gql} from '@apollo/client';

// quieres to the backend
export const QUERY_THOUGHTS = gql`
    query thoughts($username: String){
        thoughts(username: $username){
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions{
                _id
                createdAt
                username
                reactionBody

            }
        }
    }
`;






