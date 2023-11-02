import './globals.css';

export const metadata = {
	title: 'Trello Clone with AI',
	description: 'Generated by Kusjay',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
