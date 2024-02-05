import css from './Contact.module.css'
import personPic from '../../images/person.png'
import phonePic from '../../images/phone.png'

export const Contact = ({name, number, id, onDelete}) => (
    <>
        <li className={css.card}>
            <div>
                <div className={css.info}><img className={css.icon} alt="Person" src={personPic} />{name}</div>
                <div className={css.info}><img className={css.icon} alt="Phone" src={phonePic} />{number}</div>
            </div>
            <button onClick={() => (onDelete(id))}>Delete</button>
        </li>
    </>
)