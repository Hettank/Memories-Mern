export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload

        case 'CREATE':
            return [...posts, action.payload]

        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post) // changing something in array and return that updated array

        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload)
        default:
            return posts
    }
}