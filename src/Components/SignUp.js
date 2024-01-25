import React from 'react'
import  PropTypes  from 'prop-types'

export default function SignUp(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.para}</p>
    </div>
  )
}

SignUp.propTypes = {
  title : PropTypes.string,
  para : PropTypes.string
}

SignUp.defaultProps = {
  title : "Title Here",
  para : "Paragraph Here"
}
//import xyz, {a, b, d} from './Login'
//console.log(xyz)

//console.log(b)
//console.log(d)
//console.log(a)


