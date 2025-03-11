import '../../sass/globals.scss';
import { Raleway } from 'next/font/google';
import { Metadata } from 'next';

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-raleway',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Cinema Managment',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className={`${raleway.variable}`}>{children}</body>
        </html>
    );
}
