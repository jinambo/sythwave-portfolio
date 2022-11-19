import random from "../../utils/random"

const Star = ({ styles }) => {
    const createStar = () => {    
      const starProps = {
        left: `${random(0, 100).toFixed(2)}%`,
        top: `${random(0, 100).toFixed(2)}%`,
        opacity: random(0.25, 0.75).toFixed(2),
        width: `${random(0.5, 1.25).toFixed(2)}px`,
        height: `${random(0.5, 1.25).toFixed(2)}px`
      }

      return starProps
    }
    
    return (
      <div
        className={ styles }
        style={ createStar() }
      ></div>
    )
}

export default Star