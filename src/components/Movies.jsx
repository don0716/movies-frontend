import useFetch from "../useFetch"

const Movies = () => {

    const {data, loading, error} = useFetch("http://localhost:3000/movies")
    console.log("backend Data:: ", data)
    
    return (
        <>
        {data?.map(movie => ( //optional chaining
            <li>{movie.title}</li>
        ))}
        </>
    )
}
export default Movies