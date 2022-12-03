import { FC, useState } from 'react';
import Link from 'next/link'
import styles from 'styles/components/ArrivalConfirmation.module.scss'
import stylesButton from 'styles/components/Button.module.scss'
import putGuest from 'lib/putGuest';
import { toast } from 'react-toastify';

type ArrivalConfirmationPropType = {
  dataGuest: any
  open: boolean
  onClose: () => void
  refetch: () => void
}

const ArrivalConfirmation: FC<ArrivalConfirmationPropType> = ({
  dataGuest,
  open,
  onClose,
  refetch
}) => {
  const [arrival, setArrival] = useState<boolean>()
  const [isEdit, setIsEdit] = useState(false)
  const [isWeddingGift, setIsWeddingGift] = useState(false)
  const usePutGuest = putGuest()
  const [form, setForm] = useState({
    arrival: arrival,
    pax: null,
    message: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    usePutGuest.mutate(
      { ...dataGuest, ...form },
      {
        onSuccess: () => {
          toast.success("Data berhasil di simpan");
          refetch();
          onClose();
        },
        onError: (err: any) => {
          toast.error('Error', err);
        }
      }
    )
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleCopy = (text: string) => {
    navigator?.clipboard?.writeText(text)
    toast.success("Link berhasil di copy");
  }

  return (
    <div
      className={`${styles.container} ${open ? 'open' : 'close'}`}
    >
      {(dataGuest?.arrival !== null && !isEdit) ?
        <>
          <div className={styles.headerContainer}>
            <div className={styles.header}>
              <button
                type='button'
                className={styles.back}
                onClick={onClose}
              >
                <span className={styles.backIcon} />
              </button>
              <h3 className={styles.formHeaderTitle}>
                Detail Konfirmasi Kehadiran
              </h3>
            </div>
          </div>
          <div>
            <div className={styles.formContainer}>
              <label>- {dataGuest?.arrival ? `Hadir dengan kedatangan ${dataGuest?.pax} Tamu` : `Berhalangan untuk hadir`}</label>
              <br />
              <label>- pesan yang anda tuliskan untuk pengantin: <blockquote>&quot;{dataGuest?.message}&quot;</blockquote></label>
            </div>
            {!arrival &&
              <div className={styles.weddingGiftContainer}>
                <p
                  className={styles.weddingGiftTitle}
                >Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:</p>
                <button
                  className={`${styles.weddingGift} `}
                  type="button"
                  onClick={() => setIsWeddingGift(!isWeddingGift)}
                >{isWeddingGift ? "Tutup" : "Buka"} Wedding Gift</button>
                {isWeddingGift &&
                  <div className={styles.weddingGiftDetail}>
                    <div>
                      <h4 className={styles.weddingGiftDetailTitle}>REKENING</h4>
                      <div
                        className={styles.weddingGiftDetailRekening}
                      >
                        <div>
                          <h3><span>BANK BSI</span> - ANGGI RIZKY</h3>
                          <p>7141788188</p>
                        </div>
                        <button
                          type="button"
                          className={stylesButton.btn_primarySmall}
                          onClick={() => handleCopy("7141788188")}
                        >Salin</button>
                      </div>
                      <div className={styles.weddingGiftDetailRekening}>
                        <div>
                          <h3><span>BANK BCA</span> - M LABIB NAUFAL A</h3>
                          <p>0954099098</p>
                        </div>
                        <button
                          type="button"
                          className={stylesButton.btn_primarySmall}
                          onClick={() => handleCopy("0954099098")}
                        >Salin</button>
                      </div>
                      <h4 className={styles.weddingGiftDetailTitle}>ALAMAT</h4>
                      <div className={styles.weddingGiftDetailRekening}>
                        <div>
                          <h3>
                            <span>M Labib Naufal A - 081585737170</span>
                            <br />
                            <label>
                              Jl.WR Supratman Gg XI No 79 RT.3/RW.6, Kel.Sendangharjo, Kab.Tuban, Jawa Timur, ID 62319
                            </label>
                          </h3>
                        </div>
                        <button
                          className={stylesButton.btn_primarySmall}
                          type="button"
                          onClick={() => handleCopy("M Labib Naufal A - 081585737170 | Jl.WR Supratman Gg XI No 79 RT.3/RW.6, Kel.Sendangharjo, Kab.Tuban, Jawa Timur, ID 62319")}
                        >Salin</button>
                      </div>
                    </div>
                    <div>

                    </div>
                  </div>
                }
              </div>
            }
            <button
              className={stylesButton.btn_primaryLongSmall}
              onClick={() => {
                setIsEdit(true)
              }}
            >UBAH</button>
          </div>
        </>
        :
        <>
          <div
            className={`${styles.confirmation} ${arrival === undefined ? 'show' : 'hidden'}`}
          >
            <div className={styles.headerContainer}>
              <div className={styles.header}>
                <button
                  type='button'
                  className={styles.back}
                  onClick={() => isEdit ? setIsEdit(false) : onClose()}
                >
                  <span className={styles.backIcon} />
                </button>
                <h3 className={styles.formHeaderTitle}>
                  Apakah anda akan hadir ke acara ?
                </h3>
              </div>
            </div>


            <div className={styles.descriptionContainer}>
              <label>
                <span className={styles.iconPlace} /> Gedung Wijaya Kusuma,
                <Link href="https://goo.gl/maps/ZSMSU2JFTygXNWAQ9" >
                  <a target="_blank">KSPKP Tuban</a>
                </Link>
              </label>
              <label>
                <span className={styles.iconClock} />{dataGuest?.time} WIB
              </label>
              <label>
                <span className={styles.iconDate} />11 Desember 2022
              </label>
            </div>
            <div className={styles.button}>
              <button
                className={stylesButton.btn_primaryLongSmall}
                onClick={() => {
                  setForm({
                    ...form,
                    arrival: true
                  })
                  setArrival(true)
                }}
              >HADIR</button>
              <button
                className={stylesButton.btn_secondaryLongSmall}
                onClick={() => {
                  setForm({
                    ...form,
                    arrival: false
                  })
                  setArrival(false)
                }}
              >TIDAK HADIR</button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`${styles.form} ${arrival !== undefined ? 'show' : 'hidden'}`}
          >
            <div className={styles.formHeader}>
              <button
                type='button'
                className={styles.back}
                onClick={() => setArrival(undefined)}
              >
                <span className={styles.backIcon} />
              </button>
              <h3 className={styles.formHeaderTitle}>
                Konfirmasi {arrival ? 'Kehadiran' : 'Ketidakhadiran'}
              </h3>
            </div>
            {arrival &&
              <div className={styles.formContainer}>
                <label className={styles.formLabel}>Jumlah Tamu</label>
                <input
                  type='number'
                  onChange={handleChange}
                  name="pax"
                  value={form.pax}
                  className={styles.formInputText}
                  placeholder='0'
                  max={10}
                  required
                />
              </div>
            }
            {!arrival &&
              <div className={styles.weddingGiftContainer}>
                <p
                  className={styles.weddingGiftTitle}
                >Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:</p>
                <button
                  className={`${styles.weddingGift} `}
                  type="button"
                  onClick={() => setIsWeddingGift(!isWeddingGift)}
                >{isWeddingGift ? "Tutup" : "Buka"} Wedding Gift</button>
                {isWeddingGift &&
                  <div className={styles.weddingGiftDetail}>
                    <div>
                      <h4 className={styles.weddingGiftDetailTitle}>REKENING</h4>
                      <div
                        className={styles.weddingGiftDetailRekening}
                      >
                        <div>
                          <h3><span>BANK BSI</span> - ANGGI RIZKY</h3>
                          <p>7141788188</p>
                        </div>
                        <button
                          type="button"
                          className={stylesButton.btn_primarySmall}
                          onClick={() => handleCopy("7141788188")}
                        >Salin</button>
                      </div>
                      <div className={styles.weddingGiftDetailRekening}>
                        <div>
                          <h3><span>BANK BCA</span> - M LABIB NAUFAL A</h3>
                          <p>0954099098</p>
                        </div>
                        <button
                          type="button"
                          className={stylesButton.btn_primarySmall}
                          onClick={() => handleCopy("0954099098")}
                        >Salin</button>
                      </div>
                      <h4 className={styles.weddingGiftDetailTitle}>ALAMAT</h4>
                      <div className={styles.weddingGiftDetailRekening}>
                        <div>
                          <h3>
                            <span>M Labib Naufal A - 081585737170</span>
                            <br />
                            <label>
                              Jl.WR Supratman Gg XI No 79 RT.3/RW.6, Kel.Sendangharjo, Kab.Tuban, Jawa Timur, ID 62319
                            </label>
                          </h3>
                        </div>
                        <button
                          className={stylesButton.btn_primarySmall}
                          type="button"
                          onClick={() => handleCopy("M Labib Naufal A - 081585737170 | Jl.WR Supratman Gg XI No 79 RT.3/RW.6, Kel.Sendangharjo, Kab.Tuban, Jawa Timur, ID 62319")}
                        >Salin</button>
                      </div>
                    </div>
                    <div>

                    </div>
                  </div>
                }
              </div>
            }
            <div className={styles.formContainer}>
              <label className={styles.formLabel}>Pesan</label>
              <textarea
                className={styles.formInputArea}
                name='message'
                onChange={handleChange}
                value={form.message}
                placeholder='Tulis pesan / ucapan untuk calon pengantin...'
                required
              />
            </div>

            <button
              className={`${styles.buttonSubmit} ${stylesButton.btn_primaryLongSmall}`}
            >KIRIM</button>
          </form>
        </>
      }

    </div>
  )
}

export default ArrivalConfirmation;
