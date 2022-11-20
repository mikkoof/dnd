import Link from 'next/link'
import classes from './navigation.module.css'

function NavBar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Sheet">Empty Sheet</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar;