import { Helmet } from "react-helmet";
import Loading from "../../../../Component/Loading/Loading";
import useGetSingleSuccessStory from "../../../../Hock/useGetSingleSuccessStory";
import CreateSuccessPost from "./CreateSuccessPost";
import ViewSuccess from "./ViewSuccess";
import isBioData from "../../../../Hock/isBioData";
import { Link } from "react-router-dom";

const GotMarried = () => {
  const { successStory, isPendingSuccessStory, refetchSuccessStory } =
    useGetSingleSuccessStory();
  const { isUserBioData, isPendingIsUserBioData } = isBioData();
  console.log("successStory", successStory);
  const { info = {}, existingSuccess = false } = successStory;
  return (
    <>
      <Helmet>
        <title>MingleHeart | Got married</title>
      </Helmet>
      <>
        {isPendingSuccessStory || isPendingIsUserBioData ? (
          <Loading />
        ) : (
          <>
            {isUserBioData ? (
              <div className="">
                {existingSuccess ? (
                  <ViewSuccess info={info} />
                ) : (
                  <CreateSuccessPost
                    refetchSuccessStory={refetchSuccessStory}
                  />
                )}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-5 h-screen text-3xl md:text-4xl lg:text-5xl font-semibold">
                <h1>No Biodata added</h1>
                <Link
                  to={"/dashboard/edit-bioData"}
                  className="py-3 text-sm px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  Create Biodata
                </Link>
              </div>
            )}
          </>
        )}
      </>
    </>
  );
};

export default GotMarried;
