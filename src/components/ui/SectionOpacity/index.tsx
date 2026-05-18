import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  classes?: string;
  offset?: any;
}

const Index: FC<Props> = ({ children, classes }) => {
  return (
    <motion.div 
      className={classes}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
export default Index;
