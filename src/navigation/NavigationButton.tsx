import styled from "styled-components"
import { BouncyClickAnimationsCSS } from "../components/StyledComponents"

// Styled Components

// TODO: Use similar styling as the info tab buttons

const NavigationStyledButton = styled.button`
  ${BouncyClickAnimationsCSS}

  cursor: pointer;
  background-color: #00000000;
  border: none;
  color: var(--primary-text-color);
  padding: 5px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-size: calc(10px + 2vmin);
`

//Component Props & Export

type NavigationButtonProps = {
  onClick: () => void
  text: string
}

function NavigationButton({ onClick, text }: NavigationButtonProps) {
  return (
    <NavigationStyledButton onClick={onClick}>{text}</NavigationStyledButton>
  )
}

export default NavigationButton
