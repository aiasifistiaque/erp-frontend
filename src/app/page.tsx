'use client';
import Page from '@/components/navigation/page/Page';
import ScrollComponent from '@/components/test/ScrollComponent';
import { Center, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

type ButtonType = {
	children: React.ReactNode;
};

const Homepage = () => {
	const [right, setRight] = useState(4);
	const [bottom, setBottom] = useState(100);
	const constraintsRef = React.useRef(null);
	const [scope, animate] = useAnimate();
	const [width, setWidth] = useState('40px');
	const [val, setVal] = useState(0);
	const [open, setOpen] = useState(false);
	const Btn: React.FC<ButtonType> = ({ children, ...props }) => {
		return (
			<Text
				onClick={() => val > 0 && setVal(val - 1)}
				fontSize='22px'
				id='plus'
				px={3}
				display='none'
				{...props}>
				-
			</Text>
		);
	};
	return (
		<Page>
			<Flex flex={1} as={motion.div} ref={constraintsRef} flexDir='column'>
				<Flex>
					<Text>Right: {right}</Text>
					<Text>Bottom: {bottom}</Text>
					<Text>Width: {width}</Text>
				</Flex>
				<Flex w='300px' p={4} h='200px' bg='white' borderWidth={2} borderRadius={8}>
					<Center
						id='button'
						border='2px solid blue'
						justifyContent={'center'}
						alignItems='center'
						ref={scope}
						onTapStart={() => {
							setOpen(true);
							if (val == 0) {
								setVal(1);
							}

							animate(scope.current, { width: '100%', justifyContent: 'space-between' });
							animate('#plus', { display: 'flex' });
						}}
						onMouseLeave={() => {
							setOpen(false);
							animate(scope.current, { width: '40px', justifyContent: 'center' }, { delay: 0.8 });
							animate('#plus', { display: 'none' }, { delay: 0.8 });
						}}
						cursor='pointer'
						as={motion.div}
						h='40px'
						w='40px'
						bg='teal'
						color='white'
						borderRadius={999}>
						<Text
							fontSize='22px'
							px={3}
							display='none'
							onClick={() => {
								if (val == 1) {
									setVal(0);
									animate(
										scope.current,
										{ width: '40px', justifyContent: 'center' },
										{ delay: 0.2 }
									);
									animate('#plus', { display: 'none' }, { delay: 0.2 });
									//setOpen(false);
								} else {
									setVal(val => val - 1);
								}
							}}
							userSelect='none'
							id='plus'>
							-
						</Text>
						{open ? <Text>{val}</Text> : <Text>{val > 0 ? val : '+'}</Text>}
						<Text
							onClick={() => setVal(val + 1)}
							id='plus'
							fontSize='22px'
							px={3}
							display='none'
							userSelect='none'>
							+
						</Text>
					</Center>
				</Flex>

				<Flex
					// onClick={() => animate(scope.current, { scale: 1.5 })}
					// onDoubleClick={() => animate(scope.current, { scale: 2 })}
					dragConstraints={{ top: -400, bottom: 50 }}
					whileHover={{ scale: 1.1 }}
					whileDrag={{ cursor: 'drag' }}
					as={motion.div}
					h='64px'
					w='64px'
					//drag='y'
					drag='y'
					position='absolute'
					bg='blue'
					borderRadius='8px'
					right={right}
					bottom={bottom}></Flex>
			</Flex>
		</Page>
	);
};

export default Homepage;
