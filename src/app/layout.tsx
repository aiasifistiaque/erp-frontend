import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers, { theme } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>ERP | THINKCRYPT</title>
			</head>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
