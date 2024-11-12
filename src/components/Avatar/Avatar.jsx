import './Avatar.scss'

export default function Avatar({ visibleOnMedia }) {
    return (
        <>
        <div className={'header__avatar--'+ visibleOnMedia}>
        </div>
        </>
    )
}