import { Box } from '../box/box'
import { useDispatch } from 'react-redux'
import { setLogoutAC } from '../../redux/auth-reducer'
export default function NavBar() {
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(setLogoutAC())
  }

  return (
    <Box
      mt="35px"
      pl="35px"
      pr="35px"
      pt="15px"
      pb="15px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="green">
      {' '}
      Hi, you!!
      <button onClick={onLogout}>logout</button>
    </Box>
  )
}
