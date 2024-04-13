import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Up',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}