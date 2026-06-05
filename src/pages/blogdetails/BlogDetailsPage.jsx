import CommonBanner from "../../components/Common-Sections/CommonBanner";
import BlogsList from "./BogsList";
function BlogDetailsPage() {
   const BannerData ={
    "BannerHeading" :"Blog Details",
  }
  return (
     <>
       <title>Blog Details HorseRid Horse Club - Passion for Riding & Excellence in Training</title>
       <CommonBanner  BannerData={BannerData}/>
        <BlogsList/>
     </>
  );
}
export default BlogDetailsPage;