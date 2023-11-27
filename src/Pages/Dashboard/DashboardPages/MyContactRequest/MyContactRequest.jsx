import BorderContainer from "../../../../Component/Ui/BorderContainer";
import Container from "../../../../Component/Ui/Container";
import useGetUserContactRequest from "../../../../Hock/useGetUserContactRequest";
import MyContactRequestRow from "./MyContactRequestRow";

const MyContactRequest = () => {
  const contactRequest = useGetUserContactRequest();
  return (
    <Container>
      <BorderContainer>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Contact Request {contactRequest?.length}
        </h1>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-pink-200 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                      >
                        Diodata id
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                      >
                        Phone number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-sm font-semibold text-pink-600 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-sm font-semibold text-pink-600 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pink-200 ">
                    {contactRequest?.map((item) => (
                      <MyContactRequestRow key={item._id} item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </BorderContainer>
    </Container>
  );
};

export default MyContactRequest;
