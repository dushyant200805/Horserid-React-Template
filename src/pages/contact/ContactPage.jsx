import CommonBanner from "../../components/Common-Sections/CommonBanner";
import EmailAlertMessage from "../../components/Ui/EmailAlertMessage";
import ContactFrom from "./contactFrom";
function ContactPage() {
  const BannerData = {
    "BannerHeading": "Contact",
  }
  return (
    <>
      <title>Contact HorseRid Horse Club - Passion for Riding & Excellence in Training</title>
      <CommonBanner BannerData={BannerData} />
      <EmailAlertMessage />
      <ContactFrom />
    </>
  );
}
export default ContactPage;