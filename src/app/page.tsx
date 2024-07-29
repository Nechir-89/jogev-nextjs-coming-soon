// import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import socialMedia from '@/helpers/social-media.json' assert {type: 'json'}
import contacts from '@/helpers/contacts.json' assert {type: 'json'}
import Image from "next/image";
export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h3 className={styles.h3}>COMING SOON</h3>
        <h1>JOGEV Organization</h1>
        <p className={styles.description}>
          We're under construction. Check back for an update soon. Stay in touch!
        </p>
        <div className={styles.contactsContainer}>
          {
            contacts?.map(contact => (<div key={contact.id} className={styles.contact}>
              <Image
                src={contact.path}
                alt={contact.id}
                width={24}
                height={24} />
              {
                contact.id === 'mail' ?
                  <Link href={`mailto:${contact.data}`}>
                    {contact.data}
                  </Link>
                  : contact.data
              }
            </div>))
          }
        </div>

      </div>
      <div className={styles.socialMediaContainer}>
        <p>Follow Us On</p>
        <div className={styles.socialMedias}>
          {
            socialMedia?.map(media => (
              <Link
                key={media.id}
                href={media.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {media.name}
              </Link>
            ))
          }
        </div>
      </div>
    </main>
  );
}
