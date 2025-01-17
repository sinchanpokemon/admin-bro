import React from 'react'

import styled from 'styled-components'

const StyledPlaceholder = styled.div`
  @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 338px;
  position: relative;
  overflow: hidden;
`

/**
 * Renders placeholder
 * @component
 * @hideconstructor
 *
 * @example <caption>Image placeholder</caption>
 * return (
 *   <WrapperBox border>
 *     <Placeholder style={{ width: 100, height: 200 }} />
 *   </WrapperBox>
 * )
 *
 * @example <caption>Text placeholder</caption>
 * return (
 *   <WrapperBox border>
 *     <Label>Some name</Label>
 *     <Placeholder style={{ width: 400, height: 14 }} />
 *   </WrapperBox>
 * )
 */
const Placeholder = props => (<StyledPlaceholder {...props} />)

export default Placeholder
