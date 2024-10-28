import './VideoCard.scss'


export default function VideoCard(props) {
    console.log(props)
    return (
    <>
    <article className="video__card">
        <img className="video__image" src={props.image} alt="next video" />
        <div className="video__details">
            <p className="video__title">
                {props.title}
            </p>
            <p className="video__channel">
                {props.channel}
            </p>
        </div>
    </article>
    </>
    )
}