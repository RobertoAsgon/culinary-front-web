import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/theme/globals.css'
import styles from '@/theme/global.module.css'
import SideBar from '@/shared/components/sideBar/SideBar'
import Header from '@/shared/components/header/Header'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const combinedClasses = `${font.className} ${styles.globalContainer}`;
  const enableHeader = true;
  const enableSideBar = true;

  return (
    <html lang="en">
      <body className={combinedClasses}>
        {enableSideBar && <SideBar />}
        <section className={styles.globalSection}>
        {enableHeader && <Header />}
          {children}
        </section>
      </body>
    </html>
  )
}
