import { Flex, Th, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TbArrowUp, TbArrowDown, TbArrowsDownUp } from 'react-icons/tb';
import { BsInfoCircle } from 'react-icons/bs';
import { useAppSelector } from '@/hooks/hooks';

export type TitleProps = {
	children: React.ReactNode;
	onClick?: any;
	val?: string;
	info?: string;
	toSort?: boolean;
};

export const Title: React.FC<TitleProps> = ({ children, onClick, val, info }) => {
	const { sort } = useAppSelector(state => state.table);
	const icon =
		sort == `-${val}` ? <TbArrowUp /> : sort == val ? <TbArrowDown /> : <TbArrowsDownUp />;

	const body = val ? (
		<Flex as={motion.div} align='center' gap={1} whileTap={{ scale: 0.9 }}>
			{children}
			{icon}
		</Flex>
	) : (
		children
	);

	const tooltip = info && (
		<Tooltip label={info} hasArrow placement='bottom-end'>
			<span>
				<BsInfoCircle ml={4} />
			</span>
		</Tooltip>
	);

	return (
		<Th cursor={onClick ? 'pointer' : 'default'} onClick={onClick}>
			<Flex align='center' gap={2}>
				{body}
				{tooltip}
			</Flex>
		</Th>
	);
};

export default Title;
