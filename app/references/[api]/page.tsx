import Description from "@/components/refrences/description";
import Leftbar from "@/components/refrences/leftbar";
import RequestBox from "@/components/refrences/request-box";
import ResponseBox from "@/components/refrences/response-box";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ClientConfig from "@/components/refrences/client-config";

export default function ReferencePage() {
  return (
    <div className="flex items-start h-screen relative">
      <Leftbar />
      <div className="border-l w-full h-screen overflow-y-scroll">
        <div className="px-12 h-fit pt-24">
          <Details />
        </div>
        <div className="px-12">
          <div className="w-full mt-20 flex items-start justify-between gap-14 border-t py-24">
            <div className="flex-grow">
              <Description />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <RequestBox
                endPoint="/users"
                method="get"
                url="https://api.example.com/v1/users"
              />
              <ResponseBox responses={dummyResponses} />
            </div>
          </div>
          <div className="w-full mt-20 flex items-start justify-between gap-14 border-t py-24">
            <div className="flex-grow">
              <Description />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <RequestBox
                endPoint="/users"
                method="get"
                url="https://api.example.com/v1/users"
              />
              <ResponseBox responses={dummyResponses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  Main details
function Details() {
  return (
    <div className="flex gap-14 items-start">
      <div className="flex flex-col items-start gap-1.5 flex-grow">
        <div className="flex items-center gap-1 mb-1">
          <Badge
            variant="secondary"
            className="text-muted-foreground text-[11px]"
          >
            1.0.0
          </Badge>
          <Badge
            variant="secondary"
            className="text-muted-foreground text-[11px]"
          >
            OAS 3.0.3
          </Badge>
        </div>
        <div className="text-2xl font-medium">Dummy API</div>
        <Button
          variant="link"
          className="px-0 h-fit py-0 text-sky-600 text-[14px]"
        >
          Download OpenAPI Spec
        </Button>
        <p className="mt-1 text-muted-foreground text-[14.5px]">
          This is a dummy API used to demonstrate a comprehensive Swagger
          (OpenAPI) documentation.
        </p>
      </div>
      <div className=" w-[600px]">
        <ClientConfig />
      </div>
    </div>
  );
}

export const dummyResponses = [
  {
    statusCode: 200,
    description: "A list of all users",
    body: `[
  {
    "id": "1",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "admin"
  }
]`,
  },
  {
    statusCode: 409,
    body: `{
  "message": "User already exists"
}`,
  },
];
