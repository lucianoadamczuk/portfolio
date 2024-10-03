import { LanguageSwitcher, Navbar } from '@/layouts';
import '../styles/index.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<LanguageSwitcher />
				{children}
				<Navbar />
			</body>
		</html>
	);
}
