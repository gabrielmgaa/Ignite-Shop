import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { Cart } from '../Cart'

import {
  Header as HeaderStyle
} from '../../styles/components/header'

import logo from '../../assets/logo.svg'

export function Header() {
  const { pathname } = useRouter();
  const ShowCart = pathname !== "/success";

  return (
    <HeaderStyle>
      <Link href="/">
        <Image src={logo} alt="" />
      </Link>

      {ShowCart && <Cart />}
    </HeaderStyle>
  )
}