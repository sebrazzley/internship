import React from 'react'

// USING CSS MODULES:
import styles from './Button.module.css'
interface Props {
  children: string;
  color?: string;
  onClick: () => void
}
const Button = ({ children, color='primary', onClick}: Props) => {
return (
  <button className={[styles, styles['btn-'+color]].join(' ')} onClick={onClick}>{children}</button>
)
}

export default Button
//-----------------------------------------------------------------------------
// // USING STYLED-COMPONENTS:
// import styled from 'styled-components';

// const PrimaryButton = styled.button<Props>`
// background: blue;
// color: white;
// `

// interface Props {
//     children: string;
//     color?: string;
//     onClick: () => void
// }
// const Button = ({ children, onClick}: Props) => {
//   return (
//     <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
//   )
// }

// export default Button

//------------------------------------------------------------------------------
// // USING BOOTSTRAP:
// interface Props {
//   children: string;
//   color?: string;
//   onClick: () => void
// }
// const Button = ({ children, color='primary', onClick}: Props) => {
// return (
//   <button className={'btn btn-'+color} onClick={onClick}>{children}</button>
// )
// }

// export default Button