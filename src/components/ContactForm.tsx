import { useState } from 'react'
import contactPhoto from '../../images/viljakaisa.png'
import './ContactForm.css'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__person">
          <div className="contact__person-photo">
            <img src={contactPhoto} alt="Viljakaisa Aaltonen" />
          </div>
          <div className="contact__person-info">
            <p className="contact__person-name">Viljakaisa Aaltonen</p>
            <p className="contact__person-title">Head of Business, Design Services</p>
            <p className="contact__person-contact">
              viljakaisa.aaltonen@gofore.com
              <br />
              <a href="tel:+358504835663">+358 50 483 5663</a>
            </p>
          </div>
        </div>

        <div className="contact__divider" />

        <div className="contact__form-area">
          <h2 className="contact__heading">Please reach out, what can we do together?</h2>
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label">Firstname *</label>
                <input type="text" className="contact__input" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Lastname *</label>
                <input type="text" className="contact__input" required />
              </div>
            </div>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label">Email *</label>
                <input type="email" className="contact__input" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Phone</label>
                <input type="tel" className="contact__input" />
              </div>
            </div>
            <div className="contact__field contact__field--full">
              <label className="contact__label">Company name</label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__field contact__field--full">
              <label className="contact__label">How could we help?</label>
              <textarea className="contact__textarea" rows={4} />
            </div>
            <div className="contact__checkbox-row">
              <label className="contact__checkbox-label">
                <input
                  type="checkbox"
                  className="contact__checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span className="contact__checkbox-box" />
                <span>
                  I give Gofore permission to process my data so they can respond to my inquiry. *
                </span>
              </label>
            </div>
            <p className="contact__privacy">
              We promise to keep your data safe. Read more in our{' '}
              <a href="#" className="contact__privacy-link">privacy policy</a>.
            </p>
            <button type="submit" className="contact__submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
