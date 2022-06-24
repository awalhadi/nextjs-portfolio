import Layout from "@/components/layout";
import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import { CMS_NAME } from "@/lib/constants";
import { chosenTheme } from "@/styles/theme";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Button from "@/components/button/Button";
import SocialMedia from "@/components/greeting/SocialMedia";
import { greeting, contactPageData } from "@/_portfolio/portfolio";
import BlogsImg from "@/components/contact/BlogsImg";
import AddressImg from "@/components/contact/AddressImg";
const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const contact = () => {
  return (
    <>
      <Head>
        <title>{CMS_NAME} - contact us</title>
      </Head>
      <Layout chosenTheme={chosenTheme}>
        <div className={styles["contact-main"]}>
          <div className={styles["basic-contact"]}>
            <Fade bottom duration={1000} distance="40px">
              <div className={styles["contact-heading-div"]}>
                <div className={styles["contact-heading-img-div"]}>
                  <Image
                    width={50}
                    height={50}
                    src={`/assets/images/${ContactData["profile_image_path"]}`}
                    layout="responsive"
                    alt=""
                  />
                </div>
                <div className={styles["contact-heading-text-div"]}>
                  <h1
                    className={styles["contact-heading-text"]}
                    style={{ color: chosenTheme.text }}
                  >
                    {ContactData["title"]}
                  </h1>
                  <p
                    className={styles["contact-header-detail-text subTitle"]}
                    style={{ color: chosenTheme.secondaryText }}
                  >
                    {ContactData["description"]}
                  </p>
                  <SocialMedia theme={chosenTheme} />

                  <div className={styles["resume-btn-div"]}>
                    <Button
                      text="See My Resume"
                      newTab={true}
                      href={greeting.resumeLink}
                      theme={chosenTheme}
                    />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className={styles["blog-heading-div"]}>
                <div className={styles["blog-heading-text-div"]}>
                  <h1
                    className={styles["blog-heading-text"]}
                    style={{ color: chosenTheme.text }}
                  >
                    {blogSection["title"]}
                  </h1>
                  <p
                    className={styles["blog-header-detail-text subTitle"]}
                    style={{ color: chosenTheme.secondaryText }}
                  >
                    {blogSection["subtitle"]}
                  </p>
                  <div className={styles["blogsite-btn-div"]}>
                    <Button
                      text="Visit My Blogsite"
                      newTab={true}
                      href={blogSection.link}
                      theme={chosenTheme}
                    />
                  </div>
                </div>

                <div className={styles["blog-heading-img-div"]}>
                  <BlogsImg theme={chosenTheme} />
                </div>
              </div>
            </Fade>

            <Fade bottom duration={1000} distance="40px">
              <div className={styles["address-heading-div"]}>
                <div className={styles["contact-heading-img-div"]}>
                  <AddressImg theme={chosenTheme} />
                </div>

                <div className={styles["address-heading-text-div"]}>
                  <h1
                    className={styles["address-heading-text"]}
                    style={{ color: chosenTheme.text }}
                  >
                    {addressSection["title"]}
                  </h1>
                  <p
                    className={styles["contact-header-detail-text subTitle"]}
                    style={{ color: chosenTheme.secondaryText }}
                  >
                    {addressSection["subtitle"]}
                  </p>
                  <h1
                    className={styles["address-heading-text"]}
                    style={{ color: chosenTheme.text }}
                  >
                    {phoneSection["title"]}
                  </h1>
                  <p
                    className={styles["contact-header-detail-text subTitle"]}
                    style={{ color: chosenTheme.secondaryText }}
                  >
                    {phoneSection["subtitle"]}
                  </p>
                  <div className={styles["address-btn-div"]}>
                    <Button
                      text="Visit on Google Maps"
                      newTab={true}
                      href={addressSection.location_map_link}
                      theme={chosenTheme}
                    />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
