import './VideoCard.scss'


export default function VideoCard(props) { 
    const clickHandler = () => {
        props.changeActiveVideoId(props.id)
    }

    // // <Link to={`/videos/${}`}>
    // // </Link>
    return (
    <>
    <article className="video__card" onClick = {clickHandler}>
        <div className="video__image-container">
            <img className="video__image" src={props.image} alt="next video" />
        </div>
        <div className="video__details">
            <p className="video__title">
                {props.title}
            </p>
            <p className="video__name">
                {props.name}
            </p>
        </div>
    </article>
    </>
    )
}