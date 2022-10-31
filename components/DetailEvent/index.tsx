import { FC } from 'react'
import Link from 'next/link'

import styles from 'styles/components/Admin.module.scss'

const DetailEvent: FC = () => {
  return (
    <div className={styles.detailEventContainer}>
      <div className={styles.detailEventItems}>
        <h3 className={styles.detailEventItemsLabel}>Nama Pengantin Wanita:</h3>
        <p className={styles.detailEventItemsValue}>Anggi Rizky Ayuningtyas Sugiwarso</p>
      </div>

      <div className={styles.detailEventItems}>
        <h3 className={styles.detailEventItemsLabel}>Nama Pengantin Pria:</h3>
        <p className={styles.detailEventItemsValue}>Mochamad Labib Naufal Ansi</p>
      </div>

      <div className={styles.detailEventItems}>
        <h3 className={styles.detailEventItemsLabel}>Tanggal Acara:</h3>
        <p className={styles.detailEventItemsValue}>11 Desember 2022</p>
      </div>

      <div className={styles.detailEventItems}>
        <h3 className={styles.detailEventItemsLabel}>Jam Acara:</h3>
        <p className={styles.detailEventItemsValue}>Kloter 1, 11:00 WIB - 13:00 WIB</p>
        <p className={styles.detailEventItemsValue}>Kloter 2, 13:00 WIB - 14:00 WIB</p>
      </div>

      <div className={styles.detailEventItems}>
        <h3 className={styles.detailEventItemsLabel}>Lokasi:</h3>
        <p className={styles.detailEventItemsValue}>
          <span className={styles.iconPlace} /> Gedung Wijaya Kusuma,
          <Link href="https://goo.gl/maps/ZSMSU2JFTygXNWAQ9" >
            <a target="_blank">KSPKP Tuban</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default DetailEvent;
