import ContactLinks from "../components/contact-links";
import Portfolio from "../components/portfolio";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h2>Full stack, quality focussed &amp; experienced.</h2>

        <div className={styles.summary}>
          <div>
            <ul className={styles.list}>
              <li>Python3, Django, Wagtail, DjangoCMS, Flask</li>
              <li>JavaScript, React, VueJS, HTML5, CSS, LESS, SASS</li>
              <li>Node.js, Express</li>
            </ul>
          </div>

          <div>
            <p>
              I&apos;m a UK based developer who&apos;s been making commercially
              successful projects for nearly 20 years.
            </p>
            <p>
              I&apos;m reliable, flexible and a fast learner, who can jump into
              projects at any stage and slot seamlessly into a team.
            </p>
            <p>
              Why not <a href="mailto:hey@takeontom.com">get in touch</a> and
              see if I can help with your project?
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Some of my work</h2>

        <Portfolio />
      </section>

      <section className={styles.partingThoughts}>
        <p>
          If you have need of a UK based, high quality and experienced full
          stack developer, then just get in touch:
        </p>

        <ContactLinks />
      </section>
    </main>
  );
}
