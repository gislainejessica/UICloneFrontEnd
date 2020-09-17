import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled.main`
  .first { 
    background: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #F75692;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #F75692;
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      background: #c52534;
      width: 100%;
      height: 100%;
    }
    .c {    
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
 }

 .second {
  background: #8FCBAC;
 }

 .third {
  background: #FC5C67;
 }

 .forth{
  background: #139995;
 }
`

export const Section = styled.div`
  position: relative;
`

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
`
