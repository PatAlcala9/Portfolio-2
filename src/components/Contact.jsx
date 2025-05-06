import './Contact.sass'
import { createSignal, onMount } from 'solid-js'
import { mode } from '/src/stores/mode.js'
import { gsap } from 'gsap'
import vars from '/src/assets/js/variables.js'

export default () => {
  const [email, setEmail] = createSignal('patrick_alv@yahoo.com')
  const [copy, setCopy] = createSignal('Copy')

  const duration = vars.duration
  const backgroundSize = vars.backgroundSize
  const ease = vars.ease

  const yemail = 'patrick_alv@yahoo.com'
  const gemail = 'pat.alcala9@gmail.com'
  const pemail = 'pat.alcala9@proton.me'

  const tabBackgroundColorProgrammer = 'hsl(208, 26.30%, 11.20%)'
  const tabSelectedBackgroundColorProgrammer = 'hsl(208, 26.30%, 50.20%)'
  const tabBackgroundColorDesigner = 'rgba(130, 131, 102, 1)'
  const tabSelectedBackgroundColorDesigner = 'rgba(220, 221, 183, 1)'
  const tabBackgroundColorWriter = 'rgba(135, 135, 135, 1)'
  const tabSelectedBackgroundColorWriter = 'rgba(251, 251, 251, 1)'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email()).then(() => {
      setCopy('Copied')
    })
  }

  const clearClipboard = () => {
    navigator.clipboard.writeText('').then(() => {
      setCopy('Copy')
    })
  }

  const changeEmail = (email) => {
    setEmail(email)
    clearClipboard()

    if (email === yemail) {
      mode.subscribe((val) => {
        switch (val) {
          case 'programmerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              backgroundColor: tabSelectedBackgroundColorProgrammer,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              backgroundColor: tabBackgroundColorProgrammer,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              backgroundColor: tabBackgroundColorProgrammer,
              ease,
            })
            break

          case 'designerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabSelectedBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            break

          case 'writerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabSelectedBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            break

          default:
            const defaulttabSelectedBackgroundColor = 'hsla(240, 24%, 75%, 0.8)'
            const defaultTabSelectedBorder = 'none'
            const defaulttabBackgroundColor = 'transparent'
            const defaultTabBorder = '1px solid hsla(240, 24%, 58%, 0.8)'

            gsap.to(tabYmail, {
              duration,
              border: defaultTabSelectedBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabSelectedBackgroundColor,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              border: defaultTabBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabBackgroundColor,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              border: defaultTabBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabBackgroundColor,
              ease,
            })
            break
        }
      })
    } else if (email === gemail) {
      mode.subscribe((val) => {
        switch (val) {
          case 'programmerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: tabBackgroundColorProgrammer,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: tabSelectedBackgroundColorProgrammer,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: tabBackgroundColorProgrammer,
              backgroundSize,
              ease,
            })
            break
          case 'designerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabSelectedBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            break
          case 'writerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabSelectedBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            break

          default:
            const defaulttabSelectedBackgroundColor = 'hsla(240, 24%, 75%, 0.8)'
            const defaultTabSelectedBorder = 'none'
            const defaulttabBackgroundColor = 'transparent'
            const defaultTabBorder = '1px solid hsla(240, 24%, 58%, 0.8)'

            gsap.to(tabYmail, {
              duration,
              border: defaultTabBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabBackgroundColor,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              border: defaultTabSelectedBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabSelectedBackgroundColor,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              border: defaultTabBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabBackgroundColor,
              ease,
            })
            break
        }
      })
    } else {
      mode.subscribe((val) => {
        switch (val) {
          case 'programmerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: tabBackgroundColorProgrammer,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: tabBackgroundColorProgrammer,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: tabSelectedBackgroundColorProgrammer,
              backgroundSize,
              ease,
            })

            break
          case 'designerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeProgrammerTextColor,
              fontFamily: vars.modeProgrammerFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeProgrammerTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '150px',
              backgroundColor: tabSelectedBackgroundColorDesigner,
              backgroundSize,
              ease,
            })
            break
          case 'writerMode':
            gsap.to(tabYmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              color: vars.modeWriterTextColor,
              fontFamily: vars.modeWriterFontFamily,
              fontWeight: '500',
              border: `1px solid ${vars.modeWriterTextColor}`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0',
              backgroundColor: tabSelectedBackgroundColorWriter,
              backgroundSize,
              ease,
            })
            break

          default:
            const defaulttabSelectedBackgroundColor = 'hsla(240, 24%, 75%, 0.8)'
            const defaultTabSelectedBorder = 'none'
            const defaulttabBackgroundColor = 'transparent'
            const defaultTabBorder = '1px solid hsla(240, 24%, 58%, 0.8)'

            gsap.to(tabYmail, {
              duration,
              border: defaultTabBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabBackgroundColor,
              ease,
            })
            gsap.to(tabGmail, {
              duration,
              border: defaultTabBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabBackgroundColor,
              ease,
            })
            gsap.to(tabPmail, {
              duration,
              border: defaultTabSelectedBorder,
              padding: '0',
              borderRadius: '0',
              backgroundColor: defaulttabSelectedBackgroundColor,
              ease,
            })

            break
        }
      })
    }
  }

  onMount(() => {
    mode.subscribe((val) => {
      switch (val) {
        case 'programmerMode':
          gsap.to(contactText, {
            duration,
            color: vars.modeProgrammerTextColor,
            fontFamily: vars.modeProgrammerFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeProgrammerTextColor}`,
            padding: '0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: vars.modeProgrammerBackgroundColor,
            backgroundSize,
            ease,
          })
          gsap.to(contactEmail, {
            duration,
            color: vars.modeProgrammerTextColor,
            fontFamily: vars.modeProgrammerFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeProgrammerTextColor}`,
            padding: '0',
            borderRadius: '0.5rem',
            backgroundColor: vars.modeProgrammerBackgroundColor,
            backgroundSize,
            ease,
          })
          gsap.to(copyButton, {
            duration,
            color: vars.modeProgrammerTextColor,
            fontFamily: vars.modeProgrammerFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeProgrammerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: vars.modeProgrammerBackgroundColor,
            backgroundSize,
            ease,
          })
          gsap.to(tabYmail, {
            duration,
            color: vars.modeProgrammerTextColor,
            border: `1px solid ${vars.modeProgrammerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: tabSelectedBackgroundColorProgrammer,
            backgroundSize,
            ease,
          })
          gsap.to(tabGmail, {
            duration,
            color: vars.modeProgrammerTextColor,
            border: `1px solid ${vars.modeProgrammerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: tabBackgroundColorProgrammer,
            backgroundSize,
            ease,
          })
          gsap.to(tabPmail, {
            duration,
            color: vars.modeProgrammerTextColor,
            border: `1px solid ${vars.modeProgrammerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: tabBackgroundColorProgrammer,
            backgroundSize,
            ease,
          })
          break

        case 'designerMode':
          gsap.to(contactText, {
            duration,
            color: vars.modeDesignerTextColor,
            fontFamily: vars.modeDesignerFontFamily,
            fontWeight: '500',
            border: 'none',
            padding: '0',
            borderRadius: '0.5rem',
            backgroundColor: 'transparent',
            backgroundSize,
            ease,
          })
          gsap.to(contactEmail, {
            duration,
            color: vars.modeDesignerBackgroundColor,
            fontFamily: vars.modeDesignerFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeDesignerTextColor}`,
            padding: '0',
            borderRadius: '2rem',
            backgroundColor: vars.modeDesignerTextColor,
            backgroundSize,
            ease,
          })
          gsap.to(copyButton, {
            duration,
            color: vars.modeDesignerTextColor,
            fontFamily: vars.modeDesignerFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeDesignerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backgroundSize,
            ease,
          })
          gsap.to(tabYmail, {
            duration,
            color: vars.modeDesignerTextColor,
            border: `1px solid ${vars.modeDesignerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '150px',
            backgroundColor: tabSelectedBackgroundColorDesigner,
            backgroundSize,
            ease,
          })
          gsap.to(tabGmail, {
            duration,
            color: vars.modeDesignerTextColor,
            border: `1px solid ${vars.modeDesignerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '150px',
            backgroundColor: tabBackgroundColorDesigner,
            backgroundSize,
            ease,
          })
          gsap.to(tabPmail, {
            duration,
            color: vars.modeDesignerTextColor,
            border: `1px solid ${vars.modeDesignerTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '150px',
            backgroundColor: tabBackgroundColorDesigner,
            backgroundSize,
            ease,
          })

          break
        case 'writerMode':
          gsap.to(contactText, {
            duration,
            color: vars.modeWriterTextColor,
            fontFamily: vars.modeWriterFontFamily,
            fontWeight: '500',
            border: 'none',
            padding: '0',
            borderRadius: '0',
            backgroundColor: 'transparent',
            backgroundSize,
            ease,
          })
          gsap.to(contactEmail, {
            duration,
            color: vars.modeWriterTextColor,
            fontFamily: vars.modeWriterFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeWriterTextColor}`,
            padding: '0',
            borderRadius: '0',
            backgroundColor: 'rgba(245, 245, 245, 1)',
            backgroundSize,
            ease,
          })
          gsap.to(copyButton, {
            duration,
            color: vars.modeWriterTextColor,
            fontFamily: vars.modeWriterFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeWriterTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0',
            backgroundColor: vars.modeWriterBackgroundColor,
            backgroundSize,
            ease,
          })
          gsap.to(tabYmail, {
            duration,
            color: vars.modeWriterTextColor,
            fontFamily: vars.modeWriterFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeWriterTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0',
            backgroundColor: tabSelectedBackgroundColorWriter,
            backgroundSize,
            ease,
          })
          gsap.to(tabGmail, {
            duration,
            color: vars.modeWriterTextColor,
            fontFamily: vars.modeWriterFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeWriterTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0',
            backgroundColor: tabBackgroundColorWriter,
            backgroundSize,
            ease,
          })
          gsap.to(tabPmail, {
            duration,
            color: vars.modeDesignerTextColor,
            fontFamily: vars.modeDesignerFontFamily,
            fontWeight: '500',
            border: `1px solid ${vars.modeWriterTextColor}`,
            padding: '0.25rem 0.5rem',
            borderRadius: '0',
            backgroundColor: tabBackgroundColorWriter,
            backgroundSize,
            ease,
          })
          break
        default:
          break
      }
    })
  })

  return (
    <>
      <section class="contacts">
        <span class="contacts__text" id="contactText">
          Contacts
        </span>

        <div class="contacts__email" id="contactEmail">
          <section class="contacts__email__row">
            <span class="contacts__email__row__content">{email}</span>
            <div class="contacts__email__row__content__icon" id="copy_button">
              <span id="copy_button_icon" onClick={copyToClipboard}>
                {copy}
              </span>
            </div>
          </section>
        </div>

        <div class="contacts__tabs">
          <div
            class="contacts__tab__selected"
            onClick={() => {
              changeEmail(yemail)
            }}
            id="tabYmail"
          >
            <picture>
              <source srcset="/src/assets/images/yahoo.avif" type="image/avif" />
              <img class="logo" src="/src/assets/images/yahoo.webp" alt="Yahoo Logo" width="80px" />
            </picture>
          </div>
          <div
            class="contacts__tab"
            onClick={() => {
              changeEmail(gemail)
            }}
            id="tabGmail"
          >
            <picture>
              <source srcset="/src/assets/images/gmail.avif" type="image/avif" />
              <img class="logo" src="/src/assets/images/gmail.webp" alt="Gmail Logo" width="70px" />
            </picture>
          </div>
          <div
            class="contacts__tab"
            onClick={() => {
              changeEmail(pemail)
            }}
            id="tabPmail"
          >
            <picture>
              <source srcset="/src/assets/images/proton-white.avif" type="image/avif" />
              <img class="logo" src="/src/assets/images/proton-white.webp" alt="Proton Mail Logo" width="90px" />
            </picture>
          </div>
        </div>
      </section>
    </>
  )
}
