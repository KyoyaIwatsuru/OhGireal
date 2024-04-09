import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wait Answer',
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