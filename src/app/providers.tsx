'use client';

// 3. Wrap your app with the ChakraProvider
import { CacheProvider } from '@chakra-ui/next-js';

// 1. Import the extendTheme function and the theme you want to use.
import { ChakraProvider, extendTheme, ThemeConfig, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '@/store';

// 2. Add your color mode config
const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
	bg: {
		100: '#fff',
		200: '#f1f1f1',
	},
	text: {
		500: '#333',
	},
};

const components = {
	Heading: {
		baseStyle: {
			color: 'text.500', // Set the color. You can use theme color tokens or raw CSS values.
		},
	},
};

export const theme = extendTheme({ config, colors, components });

type ProvidersProps = {
	children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<CacheProvider>
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					{children}
				</ChakraProvider>
			</Provider>
		</CacheProvider>
	);
};

export default Providers;
