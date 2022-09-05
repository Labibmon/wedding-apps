import SEO from 'components/SEO'
import { FC, ReactNode } from 'react'
import styles from '../../styles/components/Layout.module.scss'

type LayoutPropType = {
  children?: ReactNode
}

const Layout: FC<LayoutPropType> = ({
  children
}) => {

  return (
    <>
      <SEO />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout

