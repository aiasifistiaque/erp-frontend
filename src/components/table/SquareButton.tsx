import { Center, FlexProps, Text, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

type SquareButtonProps = FlexProps & {
	label: string;
	children: React.ReactNode;
};

const SquareButton: React.FC<SquareButtonProps> = ({ children, label, ...props }) => {
	return (
		<motion.div whileTap={{ scale: 0.8 }} onClick={props.onClick}>
			<Tooltip label={label}>
				<Center
					userSelect='none'
					boxSize={8}
					cursor='pointer'
					borderRadius={1}
					_hover={{
						boxShadow: 'md',
					}}
					{...props}>
					<Text>{children}</Text>
				</Center>
			</Tooltip>
		</motion.div>
	);
};

export default SquareButton;
