import AboutFaceDetector from "@/components/AboutFaceDetector";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="text-center mt-20">
        <AboutFaceDetector />
      </div>
    </>
  );
}
