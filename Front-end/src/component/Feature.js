import './Feature.css';

export default function Feature({ picture, title, text }) {
    return <>
        <div className="feature-item">
            <img src={picture} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    </>
}