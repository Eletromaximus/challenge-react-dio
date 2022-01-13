import { Box } from '../../layout/Box'
import Header from '../Header'

interface IWebSitePages {
  // eslint-disable-next-line no-undef
  children: React.ReactNode | any,
}
export default function WebSitePages ({
  children
}: IWebSitePages) {
  return (
    <>
      <Header />
      <Box
        display='flex'
        justifyContent='space-between'
        width='100%'
      >
        {children}
      </Box>
    </>
  )
}
