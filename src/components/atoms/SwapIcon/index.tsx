import arrowRigth from 'assets/arrow-right.svg'
import arrowLeft from 'assets/arrow-left.svg'
import './style.scss'

interface IProps {
  handleClick: (value: any) => void
}

export default function SwapIcon(props: IProps) {
  return (
    <div className="swap-icon" onClick={props.handleClick}>
      <div className="arrow__animate">
        <svg
          width="13"
          height="6"
          viewBox="0 0 13 6"
          fill="#2196f3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3.5H2.5V4V4.79289L0.707107 3L2.5 1.20711V2V2.5H3H12.5V3.5H3Z"
            stroke="white"
          />
        </svg>
        <svg
          width="13"
          height="6"
          viewBox="0 0 13 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2.5H10.5V2V1.20711L12.2929 3L10.5 4.79289V4V3.5H10L0.5 3.5V2.5L10 2.5Z"
            stroke="white"
          />
        </svg>
      </div>
    </div>
  )
}
