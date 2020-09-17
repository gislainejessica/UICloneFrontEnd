import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.2);

  position: fixed;
  z-index: 9999;
  top: 0;
`;
