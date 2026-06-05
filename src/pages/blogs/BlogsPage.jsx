import BlogSection from "../../components/Common-Sections/blogsection";
import CommonBanner from "../../components/Common-Sections/CommonBanner";

function BlogsPage() {
  const BannerData = {
    "BannerHeading": "Blogs",
  }
  return (
    <>
      <title>Blogs HorseRid Horse Club - Passion for Riding & Excellence in Training</title>
      <CommonBanner BannerData={BannerData} />
      <BlogSection />
    </>
  );
}
export default BlogsPage;