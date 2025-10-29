import "../components.css"

export function Header() {
    return (
        <div className="headerDiv">
            <h1 className="headerText">MOOD <span className="headerTextSpan">PLAYER</span></h1>
            <p className="headerP">FIND PERFECT TRACKS THAT RESONATE WITH YOUR MOOD AND ELEVATE YOUR SPIRIT</p>
            <img src="/bouton-de-lecture.png" className="headerIcon" />
        </div>
    )
}