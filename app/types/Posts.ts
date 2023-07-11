export type PostType = {
    title : string
    id : string
    createdAt : string
    author : {
        name: string
        image : string
    }
    Comments? : {
        createdAt : string
        id : string
        postId : string
        userId : string
    }[]
}