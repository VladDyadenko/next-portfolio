import Calendar from "@/components/Calendar/Calendar";
import HeadComponent from "@/components/seo/HeadComponent";

export default function Home() {
  return (
    <>
      <HeadComponent
        title={"Home Page"}
        keywords={"More info, API"}
        description={"information, blog and enc."}
      />
      <Calendar />
      {/* <h1 className="ml-2.5 text-textColor">Hello!</h1> */}
    </>
  );
}
