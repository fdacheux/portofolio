import style from "./ListElement.module.scss"

interface IListElement {
    text: string
}


const ListElement = ({text }: IListElement) => {
  return (
    <li className={style.listElement}>
      {text}
    </li>
  )
}

export default ListElement
