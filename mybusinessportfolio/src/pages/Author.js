// src/pages/Author.js
import React, { useRef } from "react";
import corinneBW from "../images/corinne_bw.jpg";
import styles from "../linkstyles/Author.module.css";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Author() {
  const handlePrint = () => window.print();

  const contentRef = useRef();

  const generatePDF = () => {
    const input = contentRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Corinne_Padilla_Biography.pdf");
    });
  };

  return (
    <div className="container-fluid" style={{ paddingBottom: "4rem" }}>
      <div className="container">
        {/* Action Buttons */}
        <div className="d-flex justify-content-end mb-3">
          <button
            className={styles["custom-button"]}
            onClick={handlePrint}
            aria-label="Print biography page"
          >
            🖨️ Print
          </button>
          <button
            className={styles["custom-button"]}
            onClick={generatePDF}
            aria-label="Download biography as PDF"
          >
            📄 Download PDF
          </button>
        </div>

        <header>
          <h1 className={styles.pageHeader}>
            Meet the Founder — Corinne A. Padilla
          </h1>
        </header>

        <div
          ref={contentRef}
          className="row align-items-start"
          style={{
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            borderRadius: "8px",
            boxShadow: "0 4px 6px #000000",
            color: "#400669", // changed from #282c34 to eggplant purple
          }}
        >
          <div className="col-md-5 mb-4 text-center">
            <img
              src={corinneBW}
              alt="Portrait of Corinne Padilla"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 6px #000000",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </div>

          <div className="col-md-7">
            <article>
              <section className={styles.bioSection}>
                <h2>Childhood</h2>
                <p className="born">
                  Born to Manuel Padilla and Cynthia Peters on March 24, 1979,
                  in Apple Valley, California, I grew up poor and fully aware.
                  By the age of four, I could discern the good and bad in
                  people. I sensed their true intentions. I looked to my parents
                  and other adults in my life to understand why people chose
                  good over bad, or bad over good. I remember observing the good
                  that adults did for others and began building my core beliefs.
                  These core beliefs became the foundation for how I would treat
                  others—and how I would allow them to treat me. To this day, my
                  core values are:
                  <ol>
                    <li>Don’t steal</li>
                    <li>Don’t cheat</li>
                    <li>Don’t lie</li>
                    <li>Don’t hit</li>
                    <li>Don’t call me dumb</li>
                  </ol>
                  I learned that sometimes you have to accept what is and make
                  the best of it. I trust easily and look for the good in
                  people, no matter how small it may be. God was in and out of
                  my life depending on who was around me. As a child, adults are
                  responsible for nourishing us—physically, emotionally, and
                  spiritually. As I got older, I felt resentment toward God for
                  not saving me from bad people. But as an adult, I realized
                  just how much He was there for me—I just didn’t know it at the
                  time.
                </p>
              </section>

              <section className={styles.bioSection}>
                <h2>Education and Career</h2>
                <p className="born">
                  The first in my family to graduate from college, I earned my
                  Cosmetology License on September 17, 1998. I gave birth to my
                  first child on November 26, 1998, and worked various odd jobs
                  from the age of eight through today. I gave birth to my second
                  child on July 20, 2001. I attempted college a second time but
                  had to resign. After the birth of my third child on April 17,
                  2003, I started a daycare and also did hair and nails to help
                  pay bills. I attempted college again but had to resign once
                  more. I focused on raising my kids and helping others with
                  theirs until my children started school. Then I became an avid
                  volunteer, eventually earning an honorary award for the most
                  volunteer hours that school year. The award was a handmade
                  book from the preschoolers featuring the words they learned to
                  spell that year. Once my kids were all over the age of four, I
                  earned my school bus driver’s license and drove school buses
                  in both California and Idaho.
                </p>
              </section>

              <section className={styles.bioSection}>
                <h2>Later Education & Volunteering</h2>
                <p className="born">
                  After returning home from Idaho, I decided to go back to
                  school for the third time—and this time, I succeeded. I earned
                  a Bachelor of Arts in Social Science with a concentration in
                  Political Government and Science, and a Bachelor of Arts in
                  Sociology. I developed a real interest in Anthropology. My
                  curiosity grew as we learned about local tribes and how
                  Western influences changed their way of life. I’ve always been
                  fascinated by people—how they function both individually and
                  as part of a group. My biggest interest lies in the roles
                  people play in group settings and how each role contributes to
                  the group’s overall harmony. By then, my kids were old enough
                  to volunteer with me in our community. Over time, much of what
                  we did together counted as community service hours on their
                  school records.
                </p>
              </section>

              <section className={styles.bioSection}>
                <h2>Challenges & Resilience</h2>
                <p className="born">
                  I attempted college again in 2020 and 2021, but had to take a
                  leave of absence both times due to COVID-related challenges
                  and homelessness. I came off of being homeless on January 21,
                  2022. My vehicle shows more interior wear than it should, but
                  we survived our third period of homelessness since the
                  pandemic began. My good friend Richie played a major role
                  during this time. He helped me through some of the toughest
                  moments.
                </p>
              </section>

              <section className={styles.bioSection}>
                <h2>Bitwise Coding Journey</h2>
                <p className="born">
                  On February 19, 2022, an employee from Bitwise Industries told
                  me about their Workforce Training classes in coding and web
                  design. It seemed too good to be true, but after a one-on-one
                  conversation, I decided to enroll. I had my first introduction
                  to coding on February 23, 2022. Like LEGOs and Minecraft
                  before it, I took to coding within days. I learned quickly and
                  was fortunate to help others who struggled. I’ve been
                  preparing for this moment my whole life—strategic board games,
                  mystery books, puzzles, LEGOs, Minecraft—they all built the
                  foundation for the best skill I’ve ever learned: coding for
                  web design. My first course was{" "}
                  <em>Websites for Beginners</em>. I am currently in{" "}
                  <em>Mobile Friendly</em>, and this website is my final project
                  for the course. I plan to continue with{" "}
                  <em>JavaScript for Beginners</em>, then complete the final
                  course in <em>React</em>. By the end of this course, I hope to
                  have this website fully functioning and live online!
                </p>
              </section>

              <section className={styles.bioSection}>
                <h2>Continued Education</h2>
                <p className="born">
                  I was finally able to buy a trailer home—I was so excited! But
                  then, my first grandchild ended up in foster care, and now I’m
                  preparing to adopt them later this year. Unfortunately, the
                  landowner of the trailer park where I was paying space rent
                  didn’t want children in the park. He convinced a judge to
                  force me to move. Since then, I’ve been renting rooms for
                  myself and my grandchild while continuing to attend bootcamps.
                  I’m proud to say I received certifications in both backend and
                  frontend software development!
                </p>
              </section>

              <section className={styles.bioSection}>
                <h2>My Future</h2>
                <p className="born">
                  I’ve built this Business Portfolio Website to showcase my
                  skills to potential clients and employers. I plan to update
                  all the code from my past four years of projects and link them
                  to this site. I’ll also include short videos explaining how to
                  use each one. My goal is to build a successful career and
                  eventually purchase land where I can place a modular home for
                  myself and my grandchild. I know the road ahead won’t be
                  easy—but I’m ready to take one successful step at a time
                  toward a beautiful future!
                </p>
              </section>

              <p className="text-center fs-4 mt-4">
                *Last Update July 11, 2025*
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
