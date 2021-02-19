import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { rotateIn } from 'react-animations'

const rotate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg) scale (1.5);
  }
`
export const Loader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: 30vh auto;
  border: 2px dashed green;
  animation: 3s ${keyframes`${rotateIn}`} infinite;
`
