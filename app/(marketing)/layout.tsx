import ScrollToTopButton from "@/components/scroll-to-top"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <ScrollToTopButton />
    </>
  )
}