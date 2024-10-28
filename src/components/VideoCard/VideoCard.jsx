import './VideoCard.scss'


export default function VideoCard(props) {
    console.log(props)
    return (
    <>
    <article className="video__card">
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