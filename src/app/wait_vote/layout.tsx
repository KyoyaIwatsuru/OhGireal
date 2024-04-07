import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wait Vote',
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