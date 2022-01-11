import { Grid } from '../../layout/Grid'
import Header from '../Header'

interface IWebSitePages {
  // eslint-disable-next-line no-undef
  children: React.ReactNode,
}
export default function WebSitePages ({
  children
}: IWebSitePages) {
  return (
    <Grid
      display='flex'
      value={{
        md: 10,
        lg: 8
      }}
      justifyContent='space-between'
      margin='50px auto'
      flexWrap='wrap'
    >
      <Header />
      {children}
    </Grid>

  )
}
