import Banner from "@/components/Banner";
import MainDoctorPage from "@/components/MainDoctor";
import PatientReviews from "@/components/PatientReviews";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div >
        <Banner></Banner>
        <MainDoctorPage></MainDoctorPage>
        <WhyChooseUs></WhyChooseUs>
        <PatientReviews></PatientReviews>
    </div>
  );
}
