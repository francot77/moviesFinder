
export const Movies = (props) => {
    const { movies } = props
    if (!movies) return <h4>No hay resultados</h4>
    return <>
        {movies.map(e => {
            const { title, year, img, id } = e
            return <li className='movie' key={id}>
                <h3>{title}</h3>
                <h4>{year}</h4>
                <img height={"400px"} width={"300px"} src={img} alt={title} />
            </li>
        })}
    </>
}