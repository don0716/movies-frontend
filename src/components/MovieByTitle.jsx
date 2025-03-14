import useFetch from "../useFetch"


const MovieByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/movies/${title}`)
    console.log("Movie By It's Title:: ", data)

    return (
        <div>
            {data ? (
                <div>
                    <h2>{data.title}</h2>
                    <p>Director: {data.director}</p>
                    <p>Rating: {data.rating}</p>
                    <p>Actors: {data.actors.join(", ")}</p>
                </div>
            ): loading && <p>Loading...</p> }
            
        </div>
    )
}



export default MovieByTitle