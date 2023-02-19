import style from "./ListElement.module.scss"

interface IListElement {
    key: string,
    text: string
}


const ListElement = ({ key, text }: IListElement) => {
  return (
    <li  className={style.listElement}  key={key}>
      {text}
    </li>
  )
}

export default ListElement
