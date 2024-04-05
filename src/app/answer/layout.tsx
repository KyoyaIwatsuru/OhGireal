import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Answer',
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