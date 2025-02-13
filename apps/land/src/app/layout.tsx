import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import { Footer, Nav } from '@/widgets/menu/ui';

export const metadata: Metadata = {
  title: '스프, 대학생 프로젝트 함께해요!',
  description: '',
  icons: '/favicon/favicon.ico',
};

const pretendardBold = localFont({
  src: '../assets/fonts/Pretendard-Bold.otf',
  variable: '--font-pretendard-bold',
});
const pretendardSemiBold = localFont({
  src: '../assets/fonts/Pretendard-SemiBold.otf',
  variable: '--font-pretendard-semibold',
});
const pretendardMedium = localFont({
  src: '../assets/fonts/Pretendard-Medium.otf',
  variable: '--font-pretendard-medium',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendardBold.variable} ${pretendardMedium.variable} ${pretendardSemiBold.variable}`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
