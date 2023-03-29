import ContactLinks from "../../components/ContactLinks";
import Portfolio from "../../components/Portfolio";
import styles from "./HomePage.module.scss";

export default async function Page() {
  return (
    <main className={styles.main}>
      <section>
        <h2>
          <strong>Experienced Technical Leader</strong>, with a strong{" "}
          <strong>Full Stack Development</strong> background.
        </h2>

        <div className={styles.summary}>
          <div>
            <ul className={styles.list}>
              <li>Python3, Django, Wagtail, DjangoCMS, Flask</li>
              <li>
                Modern JavaScript, Next.js, Node.js, React, Vue, HTML5, SCSS
              </li>
              <li>
                Technical strategy, Leadership, Recruitment, Management,
                Mentoring
              </li>
              <li>Scrum, Kanban, Shape Up</li>
            </ul>
          </div>

          <div>
            <p>
              I&apos;m a UK based <strong>technical leader</strong> and{" "}
              <strong>developer</strong> who&apos;s been making commercially
              successful projects for <strong>over 20 years</strong>.
            </p>
            <p>
              I&apos;m <strong>impactful</strong>, <strong>strategic</strong>,{" "}
              <strong>commercially aware</strong> and{" "}
              <strong>a force for good</strong>. I&apos;m highly experienced at
              joining teams and helping <strong>drive results</strong>.
            </p>
            <p>
              Why not{" "}
              <strong>
                <a href="mailto:hey@takeontom.com">get in touch</a>
              </strong>{" "}
              and see if I can help?
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>What I&apos;ve been up to...</h2>

        <Portfolio />
      </section>

      <section className={styles.partingThoughts}>
        <p>
          If you have need of a UK based, high quality and{" "}
          <strong>experienced technical leader</strong> or{" "}
          <strong>full stack developer</strong>, then just get in touch:
        </p>

        <ContactLinks />
      </section>
    </main>
  );
}
