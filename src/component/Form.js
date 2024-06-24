import './Form.css';

export default function Form({ firstInput, secondInput, checkbox, button }) {
    return <>
        <form>
            <div className="input-wrapper">
                <label for={firstInput}>{firstInput}</label>
                <input type="text" id={firstInput} />
            </div>
            <div className="input-wrapper">
                <label for={secondInput}>{secondInput}</label>
                <input type="password" id={secondInput} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id={checkbox} /><label for={checkbox}>{checkbox}</label>
            </div>
            <a href="./user.html" className={button + "-button"}>{button}</a>
            <button className={button + "-button"}>{button}</button>
        </form>
    </>
}