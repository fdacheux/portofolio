import style from "./AdditionalInfo.module.scss";

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

const AdditionalInfo = ({children} : Props) => {
  return (
    <div className={style.additionalInfo}>
      {children}
    </div>
  )
}

export default AdditionalInfo
