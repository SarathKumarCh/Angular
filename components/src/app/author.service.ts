
export class AuthorService {
    getAuthors(){
        return  ['author4', 'author5', 'author6'];
    }

    getPipeDetails() {
        return {
            title: "Angular course",
            rating: 4.9576,
            students: 842976,
            price: 63.658,
            releaseDate: new Date(2017, 2, 17)
        }
    }
}